
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class I18nService {
  private translations: Record<string, Record<string, string>> = {};
  private defaultLang = 'en';

  constructor() {
    this.loadTranslations();
  }

  private loadTranslations() {
    const i18nPath = path.join(__dirname, '..', 'i18n');
    const files = fs.readdirSync(i18nPath);

    for (const file of files) {
      if (file.endsWith('.json')) {
        const lang = file.replace('.json', '');
        const filePath = path.join(i18nPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        this.translations[lang] = JSON.parse(content);
      }
    }
  }

  translate(key: string, lang?: string): string {
    const selectedLang = lang || this.defaultLang;
    const translation = this.translations[selectedLang]?.[key];
    if (!translation) {
      // Fallback to default language if key not found in selected language
      return this.translations[this.defaultLang]?.[key] || key;
    }
    return translation;
  }

  setAppLanguage(lang: string) {
    this.defaultLang = lang;
  }
}
