app.controller('user', function($scope, $http, $mdToast, $location, $dataSource, $routeParams) {
    $scope.editing = false

    $scope.getSingleUser = function(id) {
        $dataSource.getSingleUser(id).then(function(res) {
            $scope.selectedUser = res.data
        })
    }

    $scope.updateUser = function(user) {
        $dataSource.updateUser(user).then(function(res) {
            $scope.showMessage(res.data.message)
            if (!res.data.err) $location.path('users')
        })
    }

    $scope.showMessage = function(message) {
        $mdToast.show(
            $mdToast.simple().textContent(message).hideDelay(3000)
        );
    };

    $scope.getSingleUser($routeParams.userId)
});