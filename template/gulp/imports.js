import gulp from 'gulp';
import watchify from 'watchify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import assign from 'lodash.assign';
import loader from 'gulp-load-plugins';
import jade from 'jade';
import browser from 'browser-sync';
import sequence from 'run-sequence';

let sync = browser.create();
let plugins = loader();


export {
  gulp,
  jade,
  sequence,
  watchify,
  buffer,
  browserify,
  source,
  assign,
  sync,
  plugins
};
