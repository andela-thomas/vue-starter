import { gulp, plugins } from './imports';

gulp.task('build', plugins.shell.task([
  'npm run build'
]));
