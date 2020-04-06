const gulp = require('gulp');
const List = require('./find_and_replace_list');

function custom(cb){
    List.createList();
    cb();
}

// gulp 3 old default gulp.task('default',['custom']);

const build = gulp.series(custom);
exports.default = build;