app.factory('$dataSource', function($http, $location) {

    checkIfLoggedIn = function() {
        var id = localStorage.getItem('_id')
        if (!id) $scope.redirectToLogin()
    }

    redirectToLogin = function() {
        $location.path('/')
    }

    return {
        getAds: function() {
            return $http.post('/ads/all')
        },
        getSingleAd: function(id) {
            return $http.post('/ads/' + id)
        },
        changeActiveStatus: function(ad) {
            return $http.put('/ads/admin', ad)
        },
        deleteAd: function(id) {
            return $http.delete('/ads/' + id)
        },
        updateAd: function(ad) {
            return $http.put('/ads/', ad)
        },
        getAllUsers: function() {
            return $http.post('/users/all')
        },
        getSingleUser: function(id) {
            return $http.post('/users/one/' + id)
        },
        updateUser: function(user) {
            return $http.put('/users/', user)
        },
        checkIfLoggedIn: function() {
            var id = localStorage.getItem('_id')
            if (!id) redirectToLogin()
        }
    };
});