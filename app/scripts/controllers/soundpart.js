'use strict';

/**
 * @ngdoc function
 * @name soundMapApp.controller:SoundpartCtrl
 * @description
 * # SoundpartCtrl
 * Controller of the soundMapApp
 */
angular.module('soundMapApp')
  .controller('SoundpartCtrl', function ($scope,persistence) {
    	$scope.location = persistence.location;
    	
    	console.log(persistence.location)
  });
