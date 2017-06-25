'use strict';
angular.module('sasApp', [
  'ui.router',
  'expertMode',
  'ngStorage',
  'devicesMode'
  ])
  .controller('rootController', function ($scope, $rootScope, getDatas, $localStorage) {
    $scope.$storageI = $localStorage.$default({i:0});
    $scope.changeStatusDeviceGroup = function(type){
      $scope.$storageI.i++;
      $.each($scope.$storageDevices.datas, function(){
        if (this.type === type) {
          var self = this;
          $.each(this.device, function(){
            if($scope.$storageI.i%2 > 0){
              this.data = false;
              $scope.$storageStatus.msg = 'Status: ' + self.type + ' group has been switched off';
            }
            else {
              this.data = true;
              $scope.$storageStatus.msg = 'Status: ' + self.type + ' group has been switched on';
            }
          })
        }
      })
    };
    var devicesPromise = getDatas.getData();
    devicesPromise.then(function(data){
      $scope.$storageDevices = $localStorage.$default({datas:data});
      $scope.$storageStatus = $localStorage.$default({msg: "message..."})
    });
    $scope.datasType = function(device){
      device.show = !device.show;
    };
    $scope.changeData = function(data){
      data.data = !data.data;
      var temp = (data.data)?'on':'off';
      $scope.$storageStatus.msg = 'Status: ' + data.name + ' has been switched ' + temp;
    };
    $scope.offAllDevices = function(){
      console.log("kick them all!");
      $.each($scope.$storageDevices.datas, function(){
        $.each(this.device, function(){
          this.data = false;
          $scope.$storageStatus.msg = "All devices has been switched off";
        });
      });
    };
  });