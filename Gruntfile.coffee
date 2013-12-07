module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    less:
      all:
        options:
          yuicompress: true
          compress: true
          cleancss: true
        files:
          'style.css': 'less/main.less'

    connect:
      all:
        options:
          port: 8200

    watch:
      less:
        files: ['less/**/*.less']
        tasks: ['less: all']

  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'default', ['less', 'connect', 'watch']
