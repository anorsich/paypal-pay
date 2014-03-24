"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        meta: {
            banner: "/*!\n * <%= pkg.name %>\n * <%= pkg.description %>\n * @version <%= pkg.version %> - <%= grunt.template.today(\'yyyy-mm-dd\') %>\n * @author <%= pkg.author.name %> <<%= pkg.author.url %>>\n */\n"
        },
        jshint: {
            all: {
                src: ["./lib/index.js"],
                options: {
                    jshintrc: ".jshintrc"
                }
            }
        },
        mochaTest: {
            options: {
                timeout: 30000,
                reporter: 'spec'
            },
            src: ['test/*.js']
        }
    });

    // Load grunt tasks from npm packages
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-mocha-test');

    // Default task.
    grunt.registerTask("default", ["jshint", "mochaTest"]);
}