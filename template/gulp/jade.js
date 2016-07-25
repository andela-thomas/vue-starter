import { gulp, plugins, sync } from './imports';

gulp.task('jade', function () {
  return gulp.src('./app/index.jade')
    .pipe(plugins.jade())
    .pipe(gulp.dest('./public'))
    .pipe(sync.reload({
      stream: true
    }));
});
