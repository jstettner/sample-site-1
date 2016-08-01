var myApp = angular
  .module('myApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider' , function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    
  }]);