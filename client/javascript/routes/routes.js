var myApp = angular.module('myApp', ['ngRoute', 'uiGmapgoogle-maps', 'angular-loading-bar', 'ngSanitize', 'chart.js']);

myApp.config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/map.html'
		})
		.when('/strains', {
			templateUrl: 'partials/strains.html'
		})
		.when('/feed', {
			templateUrl: 'partials/feed.html'
		})
		.when('/vendor/:id', {
			templateUrl: 'partials/vendor.html'
		})
		.when('/reserve/:vendor_id/:strain_id', {
			templateUrl: 'partials/reserve.html'
		})
		.when('/registration', {
			templateUrl: 'partials/registration.html'
		})
		.when('/vendor', {
			templateUrl: 'partials/vendor.html'
		})
		.when('/vendors_dashboard/:id', {
			templateUrl: 'partials/vendors_dashboard.html'
		})
		.when('/vendors_dashboard/:id/analytics', {
			templateUrl: 'partials/vendors_analytics.html'
		})

	uiGmapGoogleMapApiProvider.configure({
		v: '3.17',
		libraries: 'weather, geometry, visualization'
	});
});

myApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);