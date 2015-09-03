var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var uncss = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var notify = require('gulp-notify');

// CSS
gulp.task('css', function(){
    return gulp.src('css/*.css')
        //.pipe(uncss({html: ['index.html']}))
        //.pipe(autoprefixer('last 15 versions'))
        .pipe(minifyCss('bundle.css'))
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('css/'))
        .pipe(notify('Done'));
});

gulp.task('watch', function(){
    gulp.watch('css/*.css', ['css'] )
});
/*
// CLEAN
gulp.task('clean', function () {
    return gulp.src('app', {read: false})
        .pipe(clean());
});

// BUILD
gulp.task('build', ['clean'], function () {
    var assets = useref.assets();

    return gulp.src('*.html')
        .pipe(assets)
        .pipe(gulpif('js/*.js', uglify()))
        .pipe(gulpif('css/*.css'), minifyCss())
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('app'))
});

// BOWER
gulp.task('bower', function(){
    gulp.src('./src/index.html')
        .pipe(wiredep({
            directory : 'app/bower_components'
        }))
        .pipe(gulp.dest('./app'));
});


gulp.task('watch', function(){
    gulp.watch('bower.json', ['bower']);
});
*/
