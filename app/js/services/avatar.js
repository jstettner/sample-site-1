myApp.factory('avatar', ['$http', function($http) {
  return $http.get('https://api.adorable.io/avatars/default')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
