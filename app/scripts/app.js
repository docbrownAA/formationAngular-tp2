'use strict';

/**
 * @ngdoc overview
 * @name soundMapApp
 * @description
 * # soundMapApp
 *
 * Main module of the application.
 */
angular
    .module('soundMapApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'uiGmapgoogle-maps'
    ])

.config(function($routeProvider,uiGmapGoogleMapApiProvider) {
   
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .when('/soundpart', {
            templateUrl: 'views/soundpart.html',
            controller: 'SoundpartCtrl',
            controllerAs: 'soundpart'
        })
        .when('/mappart', {
            templateUrl: 'views/mappart.html',
            controller: 'MappartCtrl',
            controllerAs: 'mappart'
        })
        .otherwise({
            redirectTo: '/'
        });

       uiGmapGoogleMapApiProvider.configure({
        //key: 'AIzaSyAmjAPzhV595pcxrQJ6jVbRsevtjtjTXo8',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});
