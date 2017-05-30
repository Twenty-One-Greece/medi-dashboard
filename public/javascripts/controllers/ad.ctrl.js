app.controller('ad', function($scope, $http, $mdToast, $location, $routeParams, $dataSource, $mdDialog) {
    $dataSource.checkIfLoggedIn()

    $scope.getSingleAd = function() {
        var adId = $routeParams.adId
        $dataSource.getSingleAd(adId).then(function(res) {
            $scope.selectedAd = res.data
        })
    }

    $scope.showMessage = function(message) {
        $mdToast.show(
            $mdToast.simple().textContent(message).hideDelay(3000)
        );
    };

    $scope.changeActiveStatus = function(ad, status) {
        ad.active = status // change active status
        $dataSource.changeActiveStatus(ad).then(function(res) {
            $scope.showMessage(res.data.message)
            $location.path('/ads')
        })
    }

    $scope.showDeleteConfirm = function(ev, id) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete this ad?')
            .textContent('All of the ads content will be permanenly lost.')
            .targetEvent(ev)
            .ok('Yes delete it')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function(confirm) {
            $scope.deleteAd(id);
        });
    };

    $scope.deleteAd = function(id) {
        $dataSource.deleteAd(id).then(function(res) {
            $scope.showMessage(res.data.message)
            $location.path('/ads')
        })
    }

    $scope.setFeatured = function(ad) {
        $dataSource.updateAd(ad).then(function(res) {
            $scope.showMessage(res.data.message)
            $location.path('/ads')
        })
    }

    $scope.getSingleAd() // Call function checkIfLoggedIn
});