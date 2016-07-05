var autoprefixer 	= require('gulp-autoprefixer'),
		browserSync 	= require('browser-sync').create(),
		cache 				= require('gulp-cache'),
		cleanCSS 			= require('gulp-clean-css'),
		concat 				= require('gulp-concat'),
		del 					= require('del'),
		gulp 					= require('gulp'),
		htmlmin 			= require('gulp-htmlmin'),
		imagemin 			= require('gulp-imagemin'),
		minifycss 		= require('gulp-minify-css'),
		pngquant 			= require('imagemin-pngquant'),
		rename 				= require('gulp-rename'),
		sass 					= require('gulp-sass'),
		uglify 				= require('gulp-uglify');

gulp.task('browser-sync', ['styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		'./app/libs/pjax/jquery.pjax.js',
		])
		.pipe(concat('libs.js'))
		// .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('1_start', ['browser-sync', 'watch']);

gulp.task('2_build', ['clean', 'img', 'styles', 'scripts', 'htmlmin'], function(){
	
	var buildCss = gulp.src('app/css/*.css')
	.pipe(gulp.dest('dist/css'));
	
	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));
	
	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildJs = gulp.src(['!app/**/*.html', 'app/**/*', 'app/**/.htaccess'])
	.pipe(gulp.dest('dist'));	
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		prograssive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('htmlmin', function(){
	return gulp.src('app/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'))
});

/*gulp.task('common-min', function(){
	return gulp.src('app/js/common.js')
	.pipe(uglify()) //Minify libs.js
	.pipe(gulp.dest('app/js'));
});*/