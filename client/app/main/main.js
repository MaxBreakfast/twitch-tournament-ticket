var main = angular.module('ticket.main',['ticket.services']);

main.controller('mainCtrl', ['$scope', '$http', function($scope, $window, apiService, $http){
  $scope.test = "test test test";
  $scope.dats = 1;
  $scope.getData = function(){
    $http.get("https://api.twitch.tv/kraken/streams")
    .success(function(response){$scope.dats = response;});
    console.log($scope.dats.streams);
  };
}]);

main.controller('namesCtrl', function($scope, $http, apiService) {
  $scope.getData = function(){
    // pass the $http to the factory 
    $http.get("https://api.twitch.tv/kraken/streams")
    .success(function(response) {console.log(response.streams);});
  };
});