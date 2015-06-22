var gulp = require('gulp')
var minifyCss = require('gulp-minify-css')
var uglify = require('gulp-uglify')

DEST = 'vendor'

gulp.task('minify-css', function() {
  return gulp.src('src/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest(DEST));
});

gulp.task('compress', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(DEST));
});

gulp.task('watch', ['minify-css', 'compress'], function(){
    gulp.watch('src/*',['minify-css', 'compress'])        
})

gulp.task('default', ['watch'])