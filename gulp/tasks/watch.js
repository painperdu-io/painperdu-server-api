import gutil from 'gulp-util';
import watch from 'gulp-watch';

gulp.task('watch', 'Watch all changes in source folder and execute task accordingly.', () => {

  // configs
  watch(`${cfg.src}/config/**/*.json`, () => {
    gulp.start('configs:json');
  });

  // serve
  watch(`${cfg.src}/server/**/*.js`, () => {
    gulp.start('serve');
  });

  // log information
  gutil.log(gutil.colors.green('Watching mode: ✔ enabled'));
});
