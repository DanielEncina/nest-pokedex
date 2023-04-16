import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  APP_ID: Joi.string().required(),
  API_PREFIX: Joi.string().default('/api/v1'),
  NODE_ENV: Joi.string().valid('dev', 'prod', 'qa').default('dev'),
  DEFAULT_LIMIT: Joi.number().default(10),
  DEFAULT_OFFSET: Joi.number().default(0),
  PORT: Joi.number().default(3000),
  MONGO_HOST: Joi.string().required(),
});
