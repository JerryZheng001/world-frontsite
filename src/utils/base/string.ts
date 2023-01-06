// @ts-nocheck
/**
 * get Env value
 */
export const getEnv = (envName: string) => {
  const envObj = !process.env.REACT_APP_ENV
  ? window.ENV_CONFIG[window.ENV_CONFIG.currentEnv]
  : process.env;
return envObj[envName];
};
