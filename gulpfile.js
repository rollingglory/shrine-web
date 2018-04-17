'use strict';

const gulp = require('gulp');
const dest = 'node_modules/raneto/themes/default/public/lib';

gulp.task('copy_libs', () =>
  gulp
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


gulp.task('copy_css', () =>
  gulp
  .src([ 'css/**/*' ])
  .pipe(gulp.dest(dest))
);

// Default
gulp.task('default', ['copy_libs', 'copy_css']);
