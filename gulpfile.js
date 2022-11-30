// Gulpを初期化する
const { src, dest, series } = require('gulp');

// Gulpプラグインの読み込み
const sass = require('gulp-sass');

// Sassのコンパイル処理
const sass_compile = function(){
    return src('css/sass/style.scss')
      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(dest('css'))
}

// タスクを実行する
exports.default = series(sass_compile);