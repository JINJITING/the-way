#!/usr/bin/env sh

initZero(){
  mkdir zero
  cd zero
  git init
  git config user.name "JINJITING"
  git config user.email "jinjiting2690@gmail.com"
  git remote add origin https://github.com/JINJITING/zero.git
  git pull origin master
  cd -
  updateZero
}
updateZero(){
  cd zero
  shopt -s extglob # 开启匹配
  rm -r !(.git|.gitignore)
  shopt -u extglob # 关闭匹配
  cd -
  mv dist/* zero
  cd zero
  git add .
  git commit -m "$1"
  git push origin master
  cd -
}

yarn build # 生成静态文件
if test -e ./zero
then updateZero
else initZero
fi