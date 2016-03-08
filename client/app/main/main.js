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
    $scope.mute = function(){
        $('#1').mute();
    };

    $scope.getData = function(game) {
        $scope.games = [];
        $scope.results = [];
        $scope.query = '';

        game = game.split(' ');
        game = game.join('%20');
        console.log(game);
        apiService.apiSelect(game).success(function(data) {
            console.log(data['streams'][0]['channel']['name']);
            $('#0').attr('src', "http://www.twitch.tv/"+data['streams'][0]['channel']['name']+'/embed');
            $('#1').attr('src', "http://www.twitch.tv/"+data['streams'][1]['channel']['name']+'/embed');
            $('#2').attr('src', "http://www.twitch.tv/"+data['streams'][2]['channel']['name']+'/embed');
            $('#3').attr('src', "http://www.twitch.tv/"+data['streams'][3]['channel']['name']+'/embed');
        }).catch(function(err) {
            console.error(err);
        });
    };
});

