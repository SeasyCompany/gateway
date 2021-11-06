#!/bin.sh

git checkout development
git fetch
git pull origin development
yarn add @seasy/package
git add .
git commit -m "package updated"
git push origin development

cd ../shopee
git checkout development
git fetch
git pull origin development
yarn add @seasy/package
git add .
git commit -m "package updated"
git push origin development

cd ../meli
git checkout development
git fetch
git pull origin development
yarn add @seasy/package
git add .
git commit -m "package updated"
git push origin development