#!/bin.sh

git checkout development
yarn add @vmotta8/price-comparison
git add .
git commit -m "price comparisson package updated"
git push origin development

cd ../shopee
git checkout development
yarn add @vmotta8/price-comparison
git add .
git commit -m "price comparisson package updated"
git push origin development

cd ../meli
git checkout development
yarn add @vmotta8/price-comparison
git add .
git commit -m "price comparisson package updated"
git push origin development