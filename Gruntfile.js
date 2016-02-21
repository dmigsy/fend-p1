module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 360,
            quality: 40
          }, {
            width: 868,
            quality: 100
          }, {
            width: 1140,
            quality: 80
          }]
        },
        files: [{
          expand: true,
          src: ['images/*.{jpg,jpeg,gif,png}'],
          dest: 'dist/'
        }]
      }
    },
    htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'index.html',     // 'destination': 'source'
      }
    },
  }
});

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images', 'htmlmin']);
};

