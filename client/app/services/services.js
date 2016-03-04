angular.module('ticket.services', [])
    .factory('apiService', ['$http',function($http, $location, $window) {


        var apiSearch = function($http) {
            $http.get("https://api.twitch.tv/kraken/streams")
                .success(function(response) { return response.streams; });
        };

        return {
            apiSearch: apiSearch
        };

    }]);
