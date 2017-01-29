const gulp = require('gulp')
const connect = require('gulp-connect')
const ghPages = require('gulp-gh-pages')

gulp.task('server:connect', () =>
{
  return connect.server({
    fallback: './index.html',
    host: 'localhost',
    livereload: true,
    port: 8080,
    root: './'
  })
})

gulp.task('server:reload', () =>
{
  return gulp.src('{app.manifest,favicon.png,index.html}')
    .pipe(gulp.src('{app.manifest,favicon.png,index.html}'))
    .pipe(connect.reload())
})

gulp.task('deploy', () =>
{
  return gulp.src('{app.manifest,favicon.png,index.html}')
    .pipe(ghPages())
})

gulp.task('watch', ['server:connect'], () =>
{
  return gulp.watch(['{app.manifest,favicon.png,index.html}'], ['server:reload'])
})
