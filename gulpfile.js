'use strict'

let gulp = require('gulp'),
    changed = require('gulp-changed'),
    connect = require('gulp-connect'),
    ghPages = require('gulp-gh-pages'),
    jade    = require('gulp-jade')

let runSequence = require('run-sequence')

gulp.task('jade', () =>
{
  gulp.src('jade/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./'))
})

gulp.task('server:connect', () =>
{
  connect.server({
    livereload: true,
    fallback: './index.html',
    host: 'localhost',
    port: 8080,
    root: './'
  })
})

gulp.task('server:reload', () =>
{
  gulp.src('{gulpfile.js,index.html,package.json}')
    .pipe(changed('{gulpfile.js,index.html,package.json}'))
    .pipe(connect.reload())
})

gulp.task('deploy', function ()
{
  let remoteUrl = 'https://github.com/Ahimta/bagi.git'
  return gulp.src('{index.html}')
    .pipe(ghPages())
})

gulp.task('reload', (callback) =>
{
  runSequence('jade', 'server:reload', callback)
})

gulp.task('watch', ['server:connect'], () =>
{
  gulp.watch(['{gulpfile.js,package.json,jade/*.jade}'], ['reload'])
})
