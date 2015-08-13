'use strict';

/**
 * @ngdoc service
 * @name soundMapApp.persistence
 * @description
 * # persistence
 * Service in the soundMapApp.
 */
angular.module('soundMapApp')
  .service('persistence', function () {
    
    this.location = 'persistence';

    this.setLocation = function(data){
    	this.location =  data;
    };

    this.getLocation = function(){
    	return this.location;
    };

  });
