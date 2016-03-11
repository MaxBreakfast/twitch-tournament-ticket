var main = angular.module('ticket.main', ['ticket.services']);



main.controller('mainCtrl', function($scope, $http, apiService, $document) {

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
                var info = data.channels;
                info = info.filter(function(ind) {
                    if (ind.game !== null) {

                        return ind;
                    }
                });
                $scope.games = info;
                console.log($scope.games);
                $scope.games.map(function(ind) {
                    var icon = ind.game;
                    icon = icon.split(' ');
                    icon = icon.join('%20');
                    icon += '-272x380.jpg';
                    ind.ico = icon;
                });


            })
            .catch(function(err) {
                console.error(err);
            });
        // pass the $http to the factory
    };

    $scope.clearData = function() {
        $scope.games = [];
        $scope.results = [];
        $scope.query = '';
    };

    $scope.getData = function(game) {
        $scope.clearData();

        game = game.split(' ');
        game = game.join('%20');
        console.log(game);
        apiService.apiSelect(game).success(function(data) {
            for (var i = 0; i < 4; i++) {
                var ind = '#' + i;
                if (i === 0) {
                    $(ind).attr('src', "https://player.twitch.tv/?channel=" + data['streams'][i]['channel']['name'] + "&!muted");
                } else {

                    $(ind).attr('src', "https://player.twitch.tv/?channel=" + data['streams'][i]['channel']['name'] + "&muted");
                }
            }

        }).catch(function(err) {
            console.error(err);
        });
    };
    $document.ready(function() {
        $scope.getData('league%20of%20legends');
    });
});
