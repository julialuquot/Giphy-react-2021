#! /bin/sh

pm2-runtime start pm2.json &
npm run storybook