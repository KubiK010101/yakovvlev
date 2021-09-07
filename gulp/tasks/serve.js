module.exports = function() {
    $.gulp.task('serve', function() {
        $.bs.init({
            server: {
                baseDir: "./build",
            },
            host: "0.0.0.0",
            injectChanges: true,
            notify: false
        });
    });
}