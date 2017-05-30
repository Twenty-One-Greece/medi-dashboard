app.controller('loginCtrl', function($scope, $http, $mdToast, $location) {
    $scope.loginData = {}

    $scope.handleSubmit = function(loginData) {
        $http.post('/users/login', loginData)
            .then(function(res) { $scope.handleSeverLoginResponse(res.data) })
    }

    $scope.handleSeverLoginResponse = function(data) {
        if (!data.err) $scope.saveUserInfo(data.user)
        if (data.message) $scope.showMessage(data.message)
    }

    $scope.saveUserInfo = function(user) {
        localStorage.setItem('_id', user._id)
        localStorage.setItem('username', user.username)
        localStorage.setItem('email', user.email)
        $scope.redirectToDashboard()
    }

    $scope.redirectToDashboard = function() {
        $location.path('/ads')
    }

    $scope.showMessage = function(message) {
        $mdToast.show(
            $mdToast.simple().textContent(message).hideDelay(3000)
        );
    };
});