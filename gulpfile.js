var gulp=require('gulp');
var del=require('del');
var del2=require('del2');


gulp.task('cleanBuild',function(done){
    del(['app/**/*.js','app.services/**/*.js','mocks/**/*.js']);
    done();
});
