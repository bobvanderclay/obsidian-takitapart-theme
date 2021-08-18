require('dotenv').config();

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssNesting = require('postcss-nesting');
const postcssImport = require('postcss-import');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const postCssPlugins = [postcssImport(), postcssNesting()];

gulp.task('css', function () {
  if (process.env.OBSIDIAN_THEMES_DIR) {
    return gulp
      .src('./src/000_entry.css')
      .pipe(postcss(postCssPlugins))
      .pipe(concat('obsidian.css'))
      .pipe(gulp.dest('./'))
      .pipe(rename('takitapart.css'))
      .pipe(gulp.dest(process.env.OBSIDIAN_THEMES_DIR));
  } else {
    return gulp
      .src('./src/000_entry.css')
      .pipe(postcss(postCssPlugins))
      .pipe(concat('obsidian.css'))
      .pipe(gulp.dest('./'));
  }
});

gulp.task('css:watch', function () {
  gulp.watch('./src/*.css', gulp.series('css'));
});
