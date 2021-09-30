//gulp packages
const {
  src,
  dest,
  watch
} = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');

//default task
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask



//Function that compiles sass --> css + mapfiles
const bundleSass = () => {
  return src('sass/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(sourceMaps.write(''))
    .pipe(dest('css'));
};




//function that runs on watch and so is constant
const devWatch = () => {
  watch('sass/**/*.scss', bundleSass);
};

exports.default = defaultTask;
exports.bundleSass = bundleSass;
exports.devWatch = devWatch;