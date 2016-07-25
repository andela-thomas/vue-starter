import gulp from 'gulp';
import requiredir from 'requiredir';
import { sequence } from './gulp/imports';

requiredir('./gulp');
gulp.task('build:dev', ['browserify', 'jade']);

gulp.task('default', (cb) => {
  sequence('build:dev', ['serve', 'watch'], cb);
});

