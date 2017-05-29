module.exports = function (env) {
  const environment = env || 'dev';

  const conf = require(`./webpack/webpack.${environment}.config.js`);
  return conf(env);
};
