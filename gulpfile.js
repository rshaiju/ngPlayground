var gulp=require('gulp');
var del=require('del');

gulp.task('cleanBuild',function(done){
    del(['app/**/*.js','app.services/**/*.js','mocks/**/*.js']);
    done();
});
