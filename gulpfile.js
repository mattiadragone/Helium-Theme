const { dest, src, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const prefix = require("gulp-autoprefixer");
const csso = require("gulp-csso");

const sassSrc = "sass/**/*.scss"

function scss() {
	return src(sassSrc)
		.pipe(sass())
		.pipe(dest("./backup/css/"));
}

function minify() {
	return src(sassSrc)
		.pipe(sass())
        .pipe(prefix())
        .pipe(csso())
		.pipe(dest("./assets/"));
}

exports.default = function() {
	watch(sassSrc, minify);
    watch(sassSrc, scss);
};