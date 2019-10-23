var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  gulp.src(['app/scss/main.scss', 'app/scss/*.scss'])
    .pipe(concat('styles.scss'))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'Firefox >= 20'],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('jshint', function() {
  gulp.src('./app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(reload({ stream:true }));
});

gulp.task('default', ['sass', 'jshint'], function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['jshint']);
  gulp.watch('app/*.html').on('change', reload);
  gulp.watch('app/page/*.html').on('change', reload);
  gulp.watch('app/images/*.*').on('change', reload);
});

// 编译
gulp.task('build', function() {
  // 压缩样式文件
  gulp.src('app/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));

  // 压缩图片
  gulp.src('app/images/**/*.*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/images'));

  gulp.src('app/js/**/*')
    .pipe(gulp.dest('./dist/js'));

  gulp.src('app/page/**/*')
    .pipe(gulp.dest('./dist/page'));

  gulp.src(['app/*.html', 'app/favicon.ico', 'app/icon.png'])
    .pipe(gulp.dest('./dist'));
});
