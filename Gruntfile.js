module.exports = function(grunt) {

  grunt.initConfig({

	  less: 
	  {
	      development: 
	      {
	        options: 
	        {
	          compress: true,
	          yuicompress: true,
	          optimization: 2
	        },
	        files: 
	        [{
	  				expand: true,
	  				cwd: "bower_components/bootstrap/less",
	  				src: [ "**/bootstrap.less", "less/local.less" ],
	  				dest: "www/css/",
	  				ext: ".css"
	        }
	        ]
	      }
	  },
    bower_concat:
    { 
          all: 
          {
            matchBase: true,
            src: "?.js?",
            dest: 'www/js/libs.js'
          }
    },
    minify:
    {
      
    } 
  });

  // This will automatically load any grunt plugin you install, such as grunt-contrib-less.
  require('load-grunt-tasks')(grunt);

  // Rename task.
  grunt.registerTask('package', 'bower_concat');
};
