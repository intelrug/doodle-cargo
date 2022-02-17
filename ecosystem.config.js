const { environment } = require('./environment-parse');

module.exports = {
  apps: [{
    name: environment.APP_NAME,
    script: 'dist/main.js',
    interpreter: 'node@14.18.1',
    node_args: '--require=./environment.js',
    autorestart: true,
  }],
};
