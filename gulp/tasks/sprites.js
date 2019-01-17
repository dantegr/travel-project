var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var	del = require('gulp-del');

var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprites.css'
				}
			}
		}
	}
};

gulp.task('beginclean', function(){
	return del(['./app/temp/sprite', './app/assets/images/sprites']);

});

gulp.task('createSprite', ['beginclean'],function(){
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));

});

gulp.task('copySpriteGraphic', ['createSprite'], function(){
	gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'],function(){
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));

});

gulp.task('endClean',['copySpriteGraphic', 'copySpriteCSS'] ,function(){
	return del('./app/temp/sprite');

});

gulp.task('icons',['beginclean','createSprite','copySpriteGraphic','copySpriteCSS', 'endClean']);

