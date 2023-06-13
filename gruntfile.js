module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                options:{
                    compress:true
                },
                files:{
                    'dev/styles/main-min.css': 'src/styles/main.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'dev/scripts/main.js': 'src/scripts/main.js'
                }
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify'])
}