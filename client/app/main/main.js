var main = angular.module('ticket.main', ['ticket.services']);


main.controller('mainCtrl', function($scope, $http, apiService) {
    $scope.results = null;
    $scope.games;
    $scope.searchData = function(q) {
        console.log(q);
        if (q.length < 1) {
            $scope.games = [];
            console.log('insufficient string');
            return;
        }
        apiService.apiSearch(q).success(function(data) {
                $scope.games = data.channels;
                console.log($scope.games);
            })
            .catch(function(err) {
                console.error(err);
            });
        // pass the $http to the factory
    };

    $scope.getData = function(game) {

        game = game.split(' ');
        game = game.join('%20');
        console.log(game);
        apiService.apiSelect(game).success(function(data) {
            console.log(data);
        }).catch(function(err) {
            console.error(err);
        });
    };
});

// main.controller('mainCtrl', function($scope, $http, apiService) {
//   $scope.getData = function(){
//     // pass the $http to the factory
//     $http.get("https://api.twitch.tv/kraken/streams")
//     .success(function(response) {console.log(response.streams);});
//   };
// });
