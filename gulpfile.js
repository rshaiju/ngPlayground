var gulp=require('gulp');
var del=require('del');
var del2=require('del');


gulp.task('cleanBuild',function(done){
    del(['app/**/*.js','app.services/**/*.js','mocks/**/*.js']);
    done();
});
