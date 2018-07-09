module.exports = (grunt) => {

  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        cwd: 'assets',
        src: '**',
        dest: '.dist/grunt/'
      }
    }
  })

  grunt.registerTask('default', ['copy'])
}