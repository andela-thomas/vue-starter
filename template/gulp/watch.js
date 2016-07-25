import { gulp } from './imports';

const paths = {
  scripts: ['app/scripts/**/**/*.js', 'app/scripts/**/**/*.vue'],
  jade: ['app/*.jade']
};

gulp.task('watch', () => {
  // livereload.listen({ port: 35729 });
  gulp.watch(paths.scripts, ['browserify']);
  gulp.watch(paths.jade, ['jade']);
});
