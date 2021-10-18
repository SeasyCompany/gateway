#!/bin/sh

echo "tag 1.0.0"

git checkout development
git fetch
git pull origin development
git tag 1.0.0
git push origin 1.0.0

cd ../shopee
git checkout development
git fetch
git pull origin development
git tag 1.0.0
git push origin 1.0.0

cd ../meli
git checkout development
git fetch
git pull origin development
git tag 1.0.0
git push origin 1.0.0