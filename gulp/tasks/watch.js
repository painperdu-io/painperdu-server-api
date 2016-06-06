import gutil from 'gulp-util';
import watch from 'gulp-watch';

gulp.task('watch', 'Watch all changes in source folder and execute task accordingly.', () => {

  // configs
  watch(`${cfg.src}/config/**/*.json`, () => {
    gulp.start('configs:json');
  });

  // configs
  watch(`${cfg.src}/config/**/*.json`, () => {
    gulp.start('serve:json');
  });

  // upload
  watch(`${cfg.src}/upload/**/*`, () => {
    gulp.start('upload');
  });

  // serve json
  watch(`${cfg.src}/server/**/*.json`, () => {
    gulp.start('serve:json');
  });

  // serve babel
  watch(`${cfg.src}/server/**/*.js`, () => {
    gulp.start('serve:babel');
  });

  // log information
  gutil.log(gutil.colors.green('Watching mode: ✔ enabled'));
});
