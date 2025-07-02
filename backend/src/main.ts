import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT ?? 3000;

  // ✅ Manually connect to MongoDB and log the result
  const dbUri = process.env.DB_URI;
  if (!dbUri) {
    console.error('❌ DB_URI not defined in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(dbUri);
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
    process.exit(1);
  }

  await app.listen(port);
  console.log(`🚀 App running on http://localhost:${port}`);
}
bootstrap();
