angular.module('perfLog')
	.service('dataService', ['$http',
		function($http) {
			let json = angular.fromJson(localStorage.getItem('perf-log'));

			this.getStyles = function(type, key) {
				getData(type, 'styles', key);
			}

			this.getScripts = function(type, key) {
				getData(type, 'scripts', key);
			}

			this.getRequests = function(type, key) {
				getData(type, 'xmlRequestValues', key);
			}

			this.getAngular = function(type, key) {
				getData(type, 'angular', key);
			}

			this.getDomData = function(type) {
				switch (type) {
					case 'avg':
						return createLoadAverage(json);
					case 'timeline':
						return createLoadTimeline(json);
				}
			}

			//Private Functions

			function getData(type, node, key) {
				switch (type) {
					case 'avg':
						return getAvgData(node, key);
					case 'timeline':
						return getTimelineData(node, key);
				}
			}
			this.getData = getData;

			function getAvgData(node, key) {
				return createAverage(json, node, key);
			}

			function getTimelineData(node, key) {
				return createTimeline(json, node, key);
			}


			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}


			function createLoadTimeline(json) {
				let rval = [];

				let index = 0;

				let previousTimestamp = json.timestamp;

				for (let i = 0; i < 30; i++) {
					let duration = json.load.domComplete - json.load.domLoading;


					previousTimestamp += 86400000;

					rval[index++] = {
						'timestamp': new Date(previousTimestamp),
						'duration': getRandomInt(1200, 2500)
					};
				}
				rval.columns = ['timestamp', 'duration'];

				return rval;
			}


			function createTimeline(json, node, key) {
				let rval = [];

				let index = 0;

				let previousTimestamp = json.timestamp;

				for (let i = 0; i < 30; i++) {
					let thing = json[node][key];


					previousTimestamp += 86400000;

					rval[index++] = {
						'timestamp': new Date(previousTimestamp),
						'duration': getRandomInt(thing * 0.90, thing * 1.10)
					};
				}
				rval.columns = ['timestamp', 'duration'];

				return rval;
			}

			function createLoadAverage(json) {
				let avg = 0;

				for (let i = 0; i < 30; i++) {
					avg += json.load.domComplete - json.load.domLoading;;
				}

				avg /= 30;

				return avg;
			}

			function createAverage(json, node, key) {
				let avg = 0;

				for (let i = 0; i < 30; i++) {
					avg += json[node][key];
				}

				avg /= 30;

				return avg;
			}

		}]);
