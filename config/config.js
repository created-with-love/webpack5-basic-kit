const { merge } = require('webpack-merge');

const sharedConfig = require('./environments/shared');

const modeConfig = env => require(`./environments/${env.NODE_ENV}`)(env);

module.exports = env => merge(sharedConfig(env), modeConfig(env));
