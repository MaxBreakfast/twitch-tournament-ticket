angular.module('ticket.services', [])
    .factory('apiService', ['$http', function($http, $location, $window) {


        var apiSearch = function() {
            return $http.get("https://api.twitch.tv/kraken/streams")
                .success(function(data){return data;}).error(function(err){console.error(err);});

        };

        return {
            apiSearch: apiSearch
        };

    }]);
