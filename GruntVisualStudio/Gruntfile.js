module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: false,
          sourceMap: true,
          sourceMapFilename: "Content/Styles.css.map",
          sourceMapURL: "Styles.css.map"
        },
        files: {
          "Content/Styles.css": "Content/less/Styles.less"
        }
      },
      production: {
        options: {
          paths: ["Content"],
          cleancss: true,
        },
        files: {
          "Content/Styles.css": "Content/less/Styles.less"
        }
      }
    }
  });

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less:development']);

};