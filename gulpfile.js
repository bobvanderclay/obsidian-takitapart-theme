require("dotenv").config();

const postcss = require('gulp-postcss');
const gulp = require('gulp');
const concat = require("gulp-concat");
const rename = require("gulp-rename");

gulp.task("css", function () {
  if (process.env.OBSIDIAN_THEMES_DIR) {
    return gulp
      .src("./src/*.css")
      .pipe(concat("obsidian.css"))
      .pipe(gulp.dest("./"))
      .pipe(rename("takitapart.css"))
      .pipe(gulp.dest(process.env.OBSIDIAN_THEMES_DIR));
  } else {
    return gulp
      .src("./src/*.css")
      .pipe(concat("obsidian.css"))
      .pipe(gulp.dest("./"));
  }
});

gulp.task("css:watch", function () {
  gulp.watch("./src/*.css", gulp.series("css"));
});