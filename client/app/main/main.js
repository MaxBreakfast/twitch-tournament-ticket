var main = angular.module('ticket.main',['ticket.services']);


main.controller('mainCtrl', function($scope, $http, apiService) {
  $scope.results = null;
  $scope.getData = function(){
    apiService.apiSearch().success(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.error(err);
    });
    // pass the $http to the factory
  };
});

// main.controller('mainCtrl', function($scope, $http, apiService) {
//   $scope.getData = function(){
//     // pass the $http to the factory
//     $http.get("https://api.twitch.tv/kraken/streams")
//     .success(function(response) {console.log(response.streams);});
//   };
// });