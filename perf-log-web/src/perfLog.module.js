var perfLog = angular.module('perfLog', [
	'ui.bootstrap',
	'ui.router',
	'perf-log-web-templates'
]);

perfLog.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('!');

	$urlRouterProvider.otherwise("/dashboard");

	$stateProvider.state({
		name: 'dashboard',
		url: '/dashboard',
		controller: 'dashboardController',
		controllerAs: '$dashboardCtrl',
		templateUrl: 'views/dashboard/dashboard.html'
	});
}]);
