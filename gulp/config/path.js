// Получаем имя папки нашего проекта
import * as nodePath from 'path'; // Импортируем модуль path с помощью синексиса ES6
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Путь к папке с результатом , можно dist заменить на rootFolder и тогда складывать все будут в папку с названием наего проекта
const srcFolder = `./src`; // Путь к папке с исходниками

// export - позволяет экспортировать константу, что бы мы могли использовать её из других файлов
export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp, svg, ico}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
}