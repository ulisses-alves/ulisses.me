module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      bin: {
        src: 'bin/**'
      }
    },
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },
    ngtemplates: {
      build: {
        options: {
          module: 'uaTemplates',
          standalone: true
        },
        cwd: 'src/',
        src: '**/*.html',
        dest: 'bin/ua-templates.js'
      }
    },
    concat: {
      build: {
        options: {
          sourceMap: true,
          sourceMapStyle: 'link'
        },
        src: [
          '<%= ngtemplates.build.dest %>',
          'src/**/*.js'
        ],
        dest: 'bin/ua.js'
      }
    },
    uglify: {
      build: {
        options: {
          sourceMap: true,
          sourceMapIn: (path) => path + '.map'
        },
        expand: true,
        src: '<%= concat.build.dest %>',
        ext: '.min.js'
      }
    },
    sass: {
      build: {
        options: {
          sourceMap: false,
          outputStyle: 'expanded'
        },
        src: 'src/*.scss',
        dest: 'bin/ua.css'
      }
    },
    postcss: {
      build: {
        options: {
          map: false,
          processors: [
            require('autoprefixer')({
              browsers: 'last 3 versions'
            })
          ]
        },
        src: '<%= sass.build.dest %>'
      }
    },
    cssmin: {
      build: {
        options: {
          sourceMap: true,
          root: 'bin/',
        },
        expand: true,
        flatten: true,
        src: '<%= postcss.build.src %>',
        dest: 'bin/',
        ext: '.min.css'
      }
    },
    watch: {
      source: {
        files: ['index.html', 'src/**'],
        tasks: [
          'build'
        ]
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'ngtemplates',
    'concat',
    'uglify',
    'sass',
    'postcss',
    'cssmin'
  ]);

  grunt.registerTask('start', [
    'build',
    'connect',
    'watch'
  ]);
};
