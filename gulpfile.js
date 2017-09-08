var gulp = require('gulp');
var cmq = require('gulp-combine-media-queries');

gulp.task('cmq', function () {
  gulp.src('assets/**/*.css')
    .pipe(cmq({
      log: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['cmq']);
