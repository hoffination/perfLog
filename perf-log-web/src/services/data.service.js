angular.module('perfLog')
	.service('dataService', ['$http',
		function ($http) {
			// Public Exports
			const PUBLIC_EXPORTS = {
				getData: getData
			};

			let $dataSrcv = angular.merge(this, PUBLIC_EXPORTS);

			function getData() {
				return $http.get('https://httpbin.org/response-headers')
					.then((response) => response.data);
			}

			//Private Functions

		}]);
