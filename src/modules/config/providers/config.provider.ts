import * as Joi from 'joi';
import * as _ from 'lodash';

import { Service } from '~/tokens';

import { Config } from '../types';

function toBoolean(value?: string): boolean {
  return value === 'true';
}

export const configProvider = {
  provide: Service.CONFIG,
  useFactory: (): Config => {
    const { env } = process;
    const validationSchema = Joi.object<Config>().unknown().keys({
      APP_NAME: Joi.string().required(),
      APP_PORT: Joi.number().required(),

      TYPEORM_HOST: Joi.string().required(),
      TYPEORM_PORT: Joi.number().required(),
      TYPEORM_USERNAME: Joi.string().required(),
      TYPEORM_PASSWORD: Joi.string().required(),
      TYPEORM_DATABASE: Joi.string().required(),
      TYPEORM_MIGRATIONS_RUN: Joi.boolean().required(),
      TYPEORM_LOGGING: Joi.boolean().required(),

      TELEGRAM_TOKEN: Joi.string().required(),
      TELEGRAM_ADMIN_CHAT_ID: Joi.string().required(),
    });

    const result = validationSchema.validate(env);

    if (result.error) {
      throw new Error(`Configuration not valid: ${result.error.message}`);
    }

    return {
      APP_NAME: `${env.APP_NAME}`,
      APP_PORT: _.toNumber(env.API_PORT),

      TYPEORM_HOST: `${env.TYPEORM_HOST}`,
      TYPEORM_PORT: _.toNumber(env.TYPEORM_PORT),
      TYPEORM_USERNAME: `${env.TYPEORM_USERNAME}`,
      TYPEORM_PASSWORD: `${env.TYPEORM_PASSWORD}`,
      TYPEORM_DATABASE: `${env.TYPEORM_DATABASE}`,
      TYPEORM_MIGRATIONS_RUN: toBoolean(env.TYPEORM_MIGRATIONS_RUN),
      TYPEORM_LOGGING: toBoolean(env.TYPEORM_LOGGING),

      TELEGRAM_TOKEN: `${env.TELEGRAM_TOKEN}`,
      TELEGRAM_ADMIN_CHAT_ID: `${env.TELEGRAM_ADMIN_CHAT_ID}`,
    };
  },
};
