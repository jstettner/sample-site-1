var myApp = angular
  .module('myApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider' , function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
  }]);