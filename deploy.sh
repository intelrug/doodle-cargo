export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

pm2 stop ecosystem.config.js && true

find . -maxdepth 1 ! -name node_modules ! -name artifacts.tgz ! -name .env.local ! -name .env.production.local ! -name .env.staging.local ! -name . ! -name .. -exec rm -rf {} \;
tar -xvf artifacts.tgz
rm artifacts.tgz

nvm exec 14.18.1 npm i -g yarn
nvm exec 14.18.1 yarn --frozen-lockfile --production
nvm exec 14.18.1 yarn typeorm:prod migration:run
pm2 start ecosystem.config.js
