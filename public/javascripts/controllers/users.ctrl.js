app.controller('users', function($scope, $http, $mdToast, $location, $dataSource, $mdDialog) {
    $dataSource.checkIfLoggedIn()

    $scope.getAllUsers = function() {
        $dataSource.getAllUsers().then(function(res) {
            $scope.users = res.data
        })
    }

    $scope.selectUser = function(id) {
        $location.path('user/' + id)
    }


    $scope.getAllUsers() // Call function checkIfLoggedIn
});