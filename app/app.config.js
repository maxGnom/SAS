"use strict";
angular.module('sasApp').
    config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/device-mode");
      $stateProvider
          .state('device-mode', {
            url: "/device-mode",
            templateUrl: "devices-mode/devices-mode.template.html"
          })
          .state('expert-mode', {
            url: "/expert-mode",
            templateUrl: "expert-mode/expert-mode.template.html"
          })
    });