var app = angular.module('contacts', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


$stateProvider
    .state('home', {
    url: '/',
    controller: 'mainCtrl',
    templateUrl: './templates/home.html',
    resolve: {
        getDetails: ['mainService', function(mainService) {
            return mainService.getAllContacts();
        }]
    }

  })
    .state('addContact', {
    url: '/addContact',
    controller: 'mainCtrl',
    templateUrl: './templates/addContact.html'
  });

    $urlRouterProvider.otherwise('/');
}]);
