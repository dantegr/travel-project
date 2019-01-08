var gulp = require('gulp');
var watch = require('gulp-watch');
gulp.task('default',function(){
	console.log("Hooray it works");
});

gulp.task('html',function(){

	console.log("do sth usefull");
});

gulp.task('styles',function(){

	console.log("Sass and postcss task runnig here");
});

gulp.task('watch',function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});
});