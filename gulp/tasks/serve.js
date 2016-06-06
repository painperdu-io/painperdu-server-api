import babel from 'gulp-babel';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';

// default task
gulp.task('serve', 'Copy your datafixtures and build the server.', [
  'serve:json', 'serve:babel'
]);

// json
gulp.task('serve:json', false, () => {
  return gulp.src(`${cfg.src}/server/**/*.json`)
    .pipe(changed(`${cfg.dist}/server`))
    .pipe(gulp.dest(`${cfg.dist}/server`));
});

// babel
gulp.task('serve:babel', false, () => {
  return gulp.src(`${cfg.src}/server/**/*.js`)
    .pipe(changed(`${cfg.dist}/server`))
    .pipe(plumber())
    .pipe(babel(cfg.babel))
    .on('error', err => console.log(err))
    .pipe(gulp.dest(`${cfg.dist}/server`));
});
