#! /bin/sh
mkdir temp_web
git config --global user.name "OVYVO"
git config --global user.email "vue12306@163.com"

if [ "${secrets.ROT_TOKEN}" = "" ]; then
  echo "Bye~"
  exit 0
fi

# build site
npm run docs:build
cd temp_web
git clone https://${secrets.ROT_TOKEN}@github.com/vue-utils/main.git && cd main
mkdir webpages
rm -rf webpages/**
cp -rf ../../docs/.vuepress/dist/** webpages/
git add -A .
git commit -m "🔨构建静态目录"
git push origin gh-pages
cd ../..
