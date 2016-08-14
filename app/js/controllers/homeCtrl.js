myApp.controller('homeCtrl', ['$scope', function($scope) {
  $scope.maint = "hello world";
  $scope.apps = [{
    name: "avatar",
    title_text: "Phrase Avatar Generator" 
  }];
}]);
