app.controller('ads', function($scope, $http, $mdToast, $mdMenu, $location, $dataSource, $mdDialog) {
    $dataSource.checkIfLoggedIn()

    $scope.getAllAds = function() {
        $dataSource.getAds().then(function(res) {
            $scope.ads = res.data
            $scope.selectedAd = res.data[0]
        })
    }

    $scope.selectAd = function(ad) {
        $location.path('ad/' + ad._id)
    }

    $scope.selectUser = function(id) {
        $location.path('user/' + id)
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
            $scope.getAllAds()
        })
    }

    $scope.getAllAds() // Call function checkIfLoggedIn
});