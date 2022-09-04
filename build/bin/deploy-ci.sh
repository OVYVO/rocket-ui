#! /bin/sh
mkdir temp_web
git config --global user.name "OVYVO"
git config --global user.email "vue12306@163.com"

if [ "$ROT_TOKEN" = "" ]; then
  echo "Bye~"
  exit 0
fi

# build site
npm run docs:build
cd temp_web
git clone https://$ROT_TOKEN@github.com/vue-utils/release.git && cd release
mkdir webpages
rm -rf webpages/**
cp -rf ../../docs/.vuepress/dist/** webpages/
git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin gh-pages
cd ../..
