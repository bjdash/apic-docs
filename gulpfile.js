var gulp = require('gulp'),
    fs = require('fs'),
    war = require('gulp-war'),
    zip = require('gulp-zip'),
    textTransformation = require('gulp-text-simple'),
    exec = require('child_process').exec,
    clean = require('gulp-rimraf'),
    runSequence = require('run-sequence');

var transformString = function (s) {
    if(s.indexOf('<link rel="stylesheet" href="gitbook/style.css">')>0){
        s = s.replace('<link rel="stylesheet" href="gitbook/style.css">', '<link rel="stylesheet" href="gitbook/style.css"><link rel="stylesheet" href="assets/apic-doc-style.css">');
        s = s.replace('<div class="book-summary">', '<div class="book-summary"><div><img src="assets/apic-docs-logo.png" style="width: 145px;"/></div>');
    }
    if(s.indexOf('<link rel="stylesheet" href="../gitbook/style.css">')>0){
        s = s.replace('<link rel="stylesheet" href="../gitbook/style.css">', '<link rel="stylesheet" href="../gitbook/style.css"><link rel="stylesheet" href="../assets/apic-doc-style.css">');
        s = s.replace('<div class="book-summary">', '<div class="book-summary"><div><img src="../assets/apic-docs-logo.png" style="width: 145px;"/></div>');
    }
    
    s = s.replace('GitBook</title>', 'APIC Docs</title>');
    s = s.replace('<body>', '<body class="apic-doc-body">');
    s = s.replace('href="https://www.gitbook.com"', 'href="http://myapic.com"');
    s = s.replace('Published with GitBook', '&copy; myapic');
    return s;
};
 
// create the factory with GulpText simple 
var myTransformation = textTransformation(transformString);
 
gulp.task('editHtml', function () {
    return gulp.src('_book/**/*.html')
        .pipe(myTransformation()) // create the Gulp transformation and insert it into the Gulp stream 
        .pipe(gulp.dest('build/'));
});

gulp.task('copyFiles', function () {
    return gulp.src(['_book/**/*.*', '!_book/**/*.html'])
        .pipe(gulp.dest('build/'));
});

gulp.task('clean', [], function () {
	console.log("Cleaning all files in build folder");
	return gulp.src("build/*", {
		read : false
	}).pipe(clean());
});

gulp.task('build:book', function(cb){
    exec('gitbook build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
});

gulp.task('build', function(cb){
    return runSequence('clean','build:book','copyFiles','editHtml','war');
});

gulp.task('war', function () {
	gulp.src(['./build/**/*.*'])
	.pipe(war({
			welcome : 'index.html',
			displayName : 'Apic Docs WAR',
		}))
	.pipe(zip('docs.war'))
	.pipe(gulp.dest("./dist"));

});