'use strict';

const { public_dir } = require('./config');
const dest = `${public_dir}/lib`;
const gulp = require('gulp');

gulp.task('copy_theme', () => gulp
  .src([
    'themes/default/**/*',
  ])
  .pipe(gulp.dest(dest))
);

gulp.task('copy_libs', () => gulp
  .src([
    'node_modules/bootstrap/**/*',
    'node_modules/bootstrap-rtl/**/*',
    'node_modules/fitvids/**/*',
    'node_modules/highlightjs/**/*',
    'node_modules/jquery/**/*',
    'node_modules/masonry-layout/**/*',
    'node_modules/sweetalert2/**/*',
    'node_modules/jquery-backstretch/**/*'
  ], { base: 'node_modules' })
  .pipe(gulp.dest(dest))
);


gulp.task('copy_css', () => gulp
  .src(['css/**/*'])
  .pipe(gulp.dest(dest))
);

// Default
gulp.task('default', ['copy_theme', 'copy_libs', 'copy_css']);