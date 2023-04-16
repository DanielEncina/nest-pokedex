export const EnvConfigutation = () => ({
  appId: process.env.APP_ID,
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  nodeEnv: process.env.NODE_ENV || 'dev',
  defaultLimit: +process.env.DEFAULT_LIMIT || 10,
  defaultOffset: +process.env.DEFAULT_OFFSET || 0,
  port: +process.env.PORT || 3000,
  mongoHost: process.env.MONGO_HOST,
});
