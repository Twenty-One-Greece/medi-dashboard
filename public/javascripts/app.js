var app = angular.module("myApp", [
    "ngRoute",
    "ngMaterial"
])


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/login.html",
            controller: 'loginCtrl'
        })
        .when("/ads", {
            templateUrl: "views/ads.html",
            controller: 'ads'
        })
        .when("/ad/:adId", {
            templateUrl: "views/ad.html",
            controller: 'ad'
        })
        .when("/users", {
            templateUrl: "views/users.html",
            controller: 'users'
        })
        .when("/user/:userId", {
            templateUrl: "views/user.html",
            controller: 'user'
        })
})