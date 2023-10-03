#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:cit1zen4/the-witcher-trpg-charlist.git master:gh-pages

cd -