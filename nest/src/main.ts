import { NestFactory } from '@nestjs/core';
import { I18nInterceptor } from './i18n/i18n.interceptor';
import { I18nService } from './i18n/i18n.service';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new I18nInterceptor(app.get(I18nService)));

  app.enableCors({
    origin: 'http://localhost:8080', // Allow requests from your React app's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  const configService = app.get(ConfigService);
  const i18nService = app.get(I18nService);

  const port = configService.get<string>('PORT') ?? 3001;

  // ✅ Manually connect to MongoDB and log the result
  const dbUri = configService.get<string>('DATABASE_URL');

  if (!dbUri) {
    console.error(i18nService.translate('database.urlNotDefined'));
    process.exit(1);
  }

  try {
    await mongoose.connect(dbUri);
    console.log(i18nService.translate('database.connected'));
  } catch (err) {
    console.error(i18nService.translate('database.connectionFailed'), err);
    process.exit(1);
  }

  await app.listen(port);
  console.log(`🚀 App running on http://localhost:${port}`);
}
bootstrap();
