var app = angular.module('app', ['ui.router', 'ticket.services','ticket.main']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main',{
          url: '/main',
          templateUrl: 'app/main/main.html',
          controller: 'mainCtrl'
        });

});
