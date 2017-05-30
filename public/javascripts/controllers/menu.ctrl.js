app.controller('menu', function($scope, $http, $mdToast, $location) {

    $scope.redirect = function(path) {
        $location.path(path)
    }

    $scope.logout = function() {
        localStorage.clear()
        $location.path('/')
    }
});