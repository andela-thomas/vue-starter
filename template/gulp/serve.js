import { gulp, sync } from './imports';

gulp.task('serve', function () {
  sync.init({
    server: {
      baseDir: './public'
    }
  });
});
