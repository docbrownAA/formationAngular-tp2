'use strict';

/**
 * @ngdoc service
 * @name soundMapApp.location
 * @description
 * # location
 * Factory in the soundMapApp.
 */
angular.module('soundMapApp')
    .factory('location', function() {

        var place;

        return {
            someMethod: function(data) {
                return angular.fromJson(data);
            }
        };
    });
