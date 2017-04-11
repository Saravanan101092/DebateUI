/**
 * app config file
 */

var app = angular.module("myApp", ["ngRoute"]);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/browseDebates.html"
    })
    .when("/browseDebates", {
        templateUrl : "view/browseDebates.html"
    })
    .when("/createDebate", {
        templateUrl : "view/createDebate.html",
        controller : "MainController"
    })
    .when("/debate/:id",{
    	templateUrl :"view/debate.html",
    	controller : "DebateController"
    });
});