const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const postcssScss = require('postcss-scss');
const autoprefixer = require('autoprefixer');
const easyImport = require('postcss-easy-import');
const cssnano = require('cssnano');

const plugins = [
  autoprefixer({ browsers: ['last 1 version'] }),
  cssnano(),
  easyImport({ prefix: '_', extensions: ['.scss'] })
];

gulp.task('sass', function () {
  return gulp.src('./styles/main.scss')
    .pipe(postcss(plugins, { syntax: postcssScss }))
    .pipe(rename('constant.scss'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass']);
