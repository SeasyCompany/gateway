#!/bin/sh

git checkout development
git fetch
git pull origin development
yarn build
yq eval -i '.provider.stage = "dev"' serverless.yml
sls deploy -v
git checkout .

cd ../shopee
git checkout development
git fetch
git pull origin development
yarn build
yq eval -i '.provider.stage = "dev"' serverless.yml
sls deploy -v
git checkout .

cd ../meli
git checkout development
git fetch
git pull origin development
yarn build
yq eval -i '.provider.stage = "dev"' serverless.yml
sls deploy -v
git checkout .