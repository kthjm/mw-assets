const gulp = require('gulp')

gulp.task('copy', () =>
  gulp.src('assets/**')
  .pipe(gulp.dest('.dist/gulp'))
)

gulp.task('default', ['copy'])