angular.module('app', []);

angular.module('app').config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.get = { 'Authorization' : 'e69433b32c43fecdb2184bab9075aade652435b4' };
}]);

angular.module('app').controller('CategoryCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('http://504080.com/api/v1/services/categories')
        .then(function(data){
            $scope.categories = data.data.data
        });
}]);