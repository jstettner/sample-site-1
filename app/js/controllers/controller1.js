myApp.controller('controller1', ['$scope', function($scope) {
  $scope.userPhrase = '';
  $scope.avaroot = 'https://api.adorable.io/avatars/'
  $scope.avaurl = $scope.avaroot + $scope.userPhrase;

}]);
