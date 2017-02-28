// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer

gulp.task('css', function() {
    return gulp.src(source + '/css/style.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest(destination + '/css/'));
});