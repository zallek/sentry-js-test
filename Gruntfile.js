module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" */\n"
		},

		//Clean definitions
		clean: {
			build: {
				src: ["build/*"]
			},
			dist: {
				src: ["dist/*"]
			}
		},

		//Copy definitions
		copy: {
			build: {
				files: [
					{ expand: true, cwd: 'src/', src: 'index.html', dest: 'build/' }
				]
			},
			dist: {
				files: [
					{ expand: true, cwd: 'build/', src: '*', dest: 'dist/sourcemap/'},
					{ expand: true, cwd: 'build/', src: 'index.html', dest: 'dist/no-sourcemap/'}
				]
			}
		},

		// Concat definitions
		concat: {
			build: {
				src: ["src/*.js"],
				dest: "build/sentry-js-test.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Minify definitions
		uglify: {
			sourcemap: {
				options: {
					sourceMap: true,
					sourceMapName: "dist/sourcemap/sentry-js-test.min.map"
				},
				files: {
					"dist/sourcemap/sentry-js-test.min.js": ["build/sentry-js-test.js"]
				}
			},
			no_sourcemap: {
				files: {
					"dist/no-sourcemap/sentry-js-test.min.js": ["build/sentry-js-test.js"]
				}
			},
			options: {
				banner: "<%= meta.banner %>",
			}
		},

	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["dist"]);
	grunt.registerTask("build", ["clean:build", "copy:build", "concat"]);
	grunt.registerTask("dist", ["clean:dist", "build", "copy:dist", "uglify"]);

};
