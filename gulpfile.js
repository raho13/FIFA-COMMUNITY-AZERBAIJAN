var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
gulp.task('style', () => {
    return gulp.src('./src/scss/main.scss').pipe(
        sass()
    ).pipe(gulp.dest('./src'))
})
gulp.task('izle', () => {
    gulp.watch('./src/scss/**/*.scss', gulp.series('style'))
})