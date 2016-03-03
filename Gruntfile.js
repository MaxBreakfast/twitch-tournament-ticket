module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            src: {
                src: 'client/app/**/*.js',
                dest: 'client/dist/src.js'
            },
            lib: {
                src: ['client/lib/angular/angular.js',
                    '/client/lib/angular-ui-router/release/angular-ui-router.js',
                    '/client/lib/jquery/dist/jquery.js'

                ],
                dest: 'client/dist/lib.js'
            }

        },
        watch: {
            scripts: {
                files: 'client/app/**/*.js',
                tasks: 'conc'
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('conc', ['concat']);

};
