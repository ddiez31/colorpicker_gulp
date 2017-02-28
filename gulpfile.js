// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
// var source = './src'; // dossier de travail
// var destination = './dist'; // dossier à livrer

gulp.task('compass', function() {
    return gulp.src('css/*.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.compass({
            css: 'css',
            sass: 'css'
        }))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest('css'));
});

gulp.task('minifycss', function() {
    return gulp.src('css/*.css')
        .pipe(plugins.csso())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('minifyjs', function() {
    return gulp.src('js/*.js')
        .pipe(plugins.minify({
            min: '.js'
        }))
        .pipe(gulp.dest('js'));
});


gulp.task('default', ['compass', 'minifycss', 'minifyjs'], function() {
    return gulp.src('*.html')
        // .pipe(plugins.uglify)
        // .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    var server = plugins.livereload();
    gulp.watch('css/*.scss', ['compass']);
    gulp.watch(['*.html', 'js/*.js', 'css/*.css']);
});