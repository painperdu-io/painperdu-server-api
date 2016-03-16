import del from 'del';

// default task
gulp.task('clean', 'Clean dist folder.', () => {
  return del(`${cfg.dist}/*`);
});
