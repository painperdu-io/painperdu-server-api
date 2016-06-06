import babel from 'gulp-babel';
import changed from 'gulp-changed';

// upload task
gulp.task('upload', 'Copy upload directory.', () => {
  return gulp.src(`${cfg.src}/upload/**/*`)
    .pipe(changed(`${cfg.dist}/upload`))
    .pipe(gulp.dest(`${cfg.dist}/upload`));
});
