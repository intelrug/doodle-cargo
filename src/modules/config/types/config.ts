export interface Config {
  readonly APP_NAME: string;
  readonly APP_PORT: number;

  // Database ORM configuration
  readonly TYPEORM_HOST: string;
  readonly TYPEORM_PORT: number;
  readonly TYPEORM_USERNAME: string;
  readonly TYPEORM_PASSWORD: string;
  readonly TYPEORM_DATABASE: string;
  readonly TYPEORM_MIGRATIONS_RUN: boolean;
  readonly TYPEORM_LOGGING: boolean;

  // Telegram
  readonly TELEGRAM_TOKEN: string;
  readonly TELEGRAM_ADMIN_CHAT_ID: string;
}
