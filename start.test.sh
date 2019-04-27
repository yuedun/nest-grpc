#!/bin/bash

# npm i || exit

npm run prestart:prod

export NODE_ENV=test

pm2 startOrReload pm2.json
