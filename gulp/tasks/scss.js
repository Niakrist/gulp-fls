import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов 

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})

    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>',
        })
     ))
    .pipe(app.plugins.replace(/@img\//g, './../img/'))

    .pipe(sass({
        outputStyle: 'expanded',
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss({
        webpClass: '.webp', // Надо дописать JS код, который будет определять поддерживает ли браузер WEBP
        noWebpClass: '.no-webp',
    }))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true,
    }))
    // Раскомментироватьпгдз если нужен не сжатый дубль файла стилей
    .pipe(app.gulp.dest(app.path.build.css)) // Обычная CSS версия
    .pipe(cleanCss()) // Жмем CSS
    .pipe(rename({
        extname: '.min.css', // Переименовываем CSS
    }))
    .pipe(app.gulp.dest(app.path.build.css))  // Пожатая CSS версия
    .pipe(app.plugins.browserSync.stream());
}