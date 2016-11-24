var gulp = require('gulp'),
    fs = require('fs'),
    war = require('gulp-war'),
    zip = require('gulp-zip'),
    textTransformation = require('gulp-text-simple'),
    runSequence = require('run-sequence');

var transformString = function (s) {
    s = s.replace('<link rel="stylesheet" href="gitbook/style.css">', '<link rel="stylesheet" href="gitbook/style.css"><link rel="stylesheet" href="gitbook/apic-doc-style.css">');
    s = s.replace('<link rel="stylesheet" href="../gitbook/style.css">', '<link rel="stylesheet" href="../gitbook/style.css"><link rel="stylesheet" href="gitbook/apic-doc-style.css">');
    
    s = s.replace('gitbook</title>', 'APIC Docs</title>');
    return s.toLowerCase();
};
 
// create the factory with GulpText simple 
var myTransformation = textTransformation(transformString);
 
gulp.task('editHtml', function () {
    return gulp.src('_book/**/*.html')
        .pipe(myTransformation()) // create the Gulp transformation and insert it into the Gulp stream 
        .pipe(gulp.dest('apic-doc-build/'));
});

gulp.task('copyFiles', function () {
    return gulp.src(['_book/**/*.*', '!_book/**/*.html'])
        .pipe(gulp.dest('apic-doc-build/'));
});

gulp.task('build', function(cb){
    return runSequence('copyFiles','editHtml');
});

gulp.task('war', function () {
	gulp.src(['./apic-doc-build/**/*.*'])
	.pipe(war({
			welcome : 'index.html',
			displayName : 'Apic Docs WAR',
		}))
	.pipe(zip('apic-docs.war'))
	.pipe(gulp.dest("./dist"));

});