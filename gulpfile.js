const babel = require("gulp-babel");
const autoprefix = require("gulp-autoprefixer");
const gulp = require("gulp");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");
const surge = require("gulp-surge");

gulp.task('pug', function() {
	return gulp.src(['src/pug/**/*.pug', '!src/pug/includes/*'])
	.pipe(pug())
	.pipe(gulp.dest(''));
})

gulp.task('stylus', function() {
	return gulp.src('src/styl/*.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(autoprefix({
		cascade: false
	}))
	.pipe(gulp.dest('assets/css'));
})

gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
	.pipe(babel({
		comments: false,
		presets: ['env'],
		minified: true
	}))
	.pipe(gulp.dest('assets/js'))
})

gulp.task('deploy', function() {
	return surge({
		project: './assets/',
		domain: 'mihirch.surge.sh'
	})
})

gulp.task('deployWatch', ['pug', 'stylus', 'scripts', 'deploy'], function() {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/**/*.js'], ['pug', 'stylus', 'scripts', 'deploy']);
})

gulp.task('default', ['pug', 'stylus', 'scripts'], function () {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/**/*.js'], ['pug', 'stylus', 'scripts']);
})