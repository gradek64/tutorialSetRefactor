const gulp = require('gulp');
const List = require('./find_and_replace_list');

gulp.task('custom',()=>{
    List.createList();
});

gulp.task('default',['custom']);