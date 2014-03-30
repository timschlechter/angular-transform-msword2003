module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ngtemplates: {
            'msword2003': {
                src: 'src/**/*.tpl.*',
                dest: 'dist/templates.js',
                options: {
                  prefix: 'angular-transform-msword2003/'
                }
            }
        },

        uglify: {
            options: {
                banner: '<%= pkg.banner %>',
                sourceMap: 'dist/<%= pkg.name %>.min.js.map',
                sourceMappingURL: '<%= pkg.name %>.min.js.map'
            },
            build: {
                files: {
                    'dist/<%= pkg.name %>.min.js': [
                        'src/module.js',
                        'src/directives/**/*.js',
                        'dist/templates.js'
                    ]
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.*'],
                tasks: ['build'],
                options: {
                    spawn: false,
                },
            },
        },

        clean: ["dist/templates.js"]
    });

    grunt.registerTask('build', ['ngtemplates', 'uglify', 'clean']);
};
