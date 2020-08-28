const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

 
// gulp.task('fileinclude', async function() {
//   gulp.src(['main/main.html'])
//     .pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(gulp.dest('./main'));
// });
// gulp.task('fileinclude', async function() {
//   gulp.src(['about/about.html'])
//     .pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(gulp.dest('./about'));
// });
// gulp.task('fileinclude', async function() {
//   gulp.src(['typography/typograghy.html'])
//     .pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(gulp.dest('./typography'));
// });
gulp.task('fileinclude', async function() {
  gulp.src(['contact_us/contact_us.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./contact_us'));
});
gulp.task('default',gulp.series('fileinclude'));
