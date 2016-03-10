module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            src: {
                src: 'client/app/**/*.js',
                dest: 'client/dist/src.js'
            },
            lib: {
                src: ['client/lib/angular/angular.min.js',
                    'client/lib/angular-ui-router/release/angular-ui-router.min.js',
                    'client/lib/jquery/dist/jquery.min.js',
                    'client/lib/angular-filter/dist/angular-filter.min.js'


                ],
                dest: 'client/dist/lib.js'
            }

        },
        uglify: { // Minify .js files
            options: {
                mangle: false
            },
            js_files: {
                files: {
                    'client/dist/src.min.js': ['client/dist/src.js']
                }
            }
        },
        watch: {
            scripts: {
                files: 'client/app/**/*.js',
                tasks: 'conc'
            }
        },
        nodemon: { // Start server
            dev: {
                script: 'server/server.js'
            }
        },

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('server-dev', function(target) {
        // Running nodejs in a different process and displaying output on the main console
        var nodemon = grunt.util.spawn({
            cmd: 'grunt',
            grunt: true,
            args: 'nodemon'
        });
        nodemon.stdout.pipe(process.stdout);
        nodemon.stderr.pipe(process.stderr);

        grunt.task.run(['watch']);
    });


    grunt.registerTask('conc', ['concat']);

    grunt.registerTask('build', ['concat', 'uglify']);

};
