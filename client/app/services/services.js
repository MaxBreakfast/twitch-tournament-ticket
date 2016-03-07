angular.module('ticket.services', [])
    .factory('apiService', ['$http', function($http, $location, $window) {


        var apiSearch = function(q) {
            return $http.get("https://api.twitch.tv/kraken/search/channels?q=" + q + '&type=suggest&live=true')
                .success(function(data) {
                    return data;
                })
                .error(function(err) { console.error(err); });

        };
        var apiSelect = function(str) {
            return $http.get('https://api.twitch.tv/kraken/streams?game=' + str)
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    console.error(err);
                });

        };
        return {
            apiSearch: apiSearch,
            apiSelect: apiSelect
        };

    }]);
