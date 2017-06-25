/**
 * Created by iMax on 21.06.2017.
 */
angular
  .module('sasApp')
  .factory('getDatas', function($http, $q){
  return{
    getData: function(){
      var deferred = $q.defer();
      $http({method: 'GET', url: 'assets/assets.json'}).
      then(function success(response) {
            deferred.resolve(response.data);
          },function error(response) {
            deferred.reject(response.status);
          }
      );
      return deferred.promise;
    }
  }
});