'use strict';

/**
 * @ngdoc function
 * @name soundMapApp.controller:MappartCtrl
 * @description
 * # MappartCtrl
 * Controller of the soundMapApp
 */
angular.module('soundMapApp')
    .controller('MappartCtrl', function($scope, geocoding, persistence) {
        var onMapIdle = function(map) {
            var promise = geocoding.geocode(map.getBounds());
            promise.then(function(results) {
                persistence.setLocation(results);
            });


        };

       
        $scope.map = {
            center: {
                latitude: 51.219053,
                longitude: 4.404418
            },
            zoom: 14,
            events: {
                idle: onMapIdle
            }
        };
        $scope.options = {
            scrollwheel: true
        };


    });
