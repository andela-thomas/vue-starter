 import { gulp, source, sync, watchify, plugins, browserify, assign, buffer } from './imports';

 const options = {
  entries: ['./app/scripts/app.js'],
  debug: true
 };

 let opts = assign({}, watchify.args, options);
 let bundler = watchify(browserify(opts));

 gulp.task('browserify', () => {
  return bundler.bundle()
    // log errors if they happen
    .on('error', plugins.util.log.bind(plugins.util, 'Browserify Error'))
    .pipe(source('app.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(plugins.sourcemaps.init({ loadMaps: true })) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    .pipe(plugins.sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./public/js'))
    .pipe(sync.reload({
      stream: true
    }));
 });
