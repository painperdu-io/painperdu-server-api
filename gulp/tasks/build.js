import runSequence from 'run-sequence';

// build production
gulp.task('build:prod', 'Build the application for production.', () => {
  runSequence('clean', 'configs', 'serve');
});

// build development
gulp.task('build:dev', 'Build the application for development.', () => {
  runSequence('clean', 'configs', 'serve', 'watch');
});
