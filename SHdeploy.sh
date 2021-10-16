#!/bin/sh

git checkout development
yq eval -i '.provider.stage = "dev"' serverless.yml
sls deploy -v
git checkout .

cd ../shopee
git checkout development
yq eval -i '.provider.stage = "dev"' serverless.yml
sls deploy -v
git checkout .

cd ../meli
git checkout development
yq eval -i '.provider.stage = "dev"' serverless.yml
sls deploy -v
git checkout .