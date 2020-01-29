module.exports = function (grunt) {
// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      "front-end/public/js/react.min.js": "node_modules/react/umd/react.production.min.js",
      "front-end/public/js/react-dom.min.js": "node_modules/react-dom/umd/react-dom.production.min.js",
      "front-end/public/index.html": "front-end/src/views/index.html",
      "front-end/public/favicon.ico": "front-end/src/resources/favicon.ico"
    },
    less: {
      production: {
        options: {
          compress: true,
          paths: ['front-end/src/css'], 
        },
        files: {
          'front-end/public/css/styles.css': 'front-end/src/less/styles.less'
        }
      }
    },
    "babel": {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env', '@babel/preset-react']
      },
      dist: {
        files: {
          "front-end/public/js/app.js": "front-end/src/js/app.js"
        }
      }
    }
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['babel', 'less', 'copy']);

};