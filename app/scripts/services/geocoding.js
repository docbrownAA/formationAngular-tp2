'use strict';

/**
 * @ngdoc service
 * @name soundMapApp.geocoding
 * @description
 * # geocoding
 * Service in the soundMapApp.
 */
angular.module('soundMapApp')
    .service('geocoding', function($q, $window, uiGmapGoogleMapApi) {
        var geocoder;

        uiGmapGoogleMapApi.then(function(api) {
            geocoder = new api.Geocoder();
        });

        this.geocode = function(bounds) {
            var deferred = $q.defer();

            geocoder.geocode({
                bounds: bounds
            }, function(results) {
                deferred.resolve(results[0].formatted_address);
            });
            return deferred.promise;
        };
    });
