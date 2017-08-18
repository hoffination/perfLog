angular.module('perfLog')
    .controller('dashboardController', ['$q', 'dataService',
        function($q, dataService) {
            // Controller Defaults
            const DEFAULTS = {
                data: {},
                barChartData: [10, 20, 30, 40, 60, 80, 20, 50],
                loading: false,
                showStackedLineChart: true,
                showLineChart: true,
                showAreaChart: true,
                showBarChart: true
            };

            // Public Exports
            const PUBLIC_EXPORTS = {};

            let $dashboardCtrl = angular.merge(this, angular.merge(DEFAULTS, PUBLIC_EXPORTS));

            //
            // Intial data load and setup.
            //
            (function() {
                $dashboardCtrl.loading = true;
                loadData()
                $dashboardCtrl.loading = false;
            })();

            //
            // Private Functions
            //
            function loadData() {
                loadDOMData();
                loadAngularData();
                loadScriptsData();
                loadStylesData();
                loadRequestsData();
            }


            function loadDOMData() {
                $dashboardCtrl.dom = {
                    avg: dataService.getDomData('avg'),
                    timeline: dataService.getDomData('timeline')
                };
            }

            function loadAngularData() {
                $dashboardCtrl.angular = {
                    watchers: {
                        avg: dataService.getData('avg', 'angular', 'watchers'),
                        timeline: dataService.getData('timeline', 'angular', 'watchers')
                    }
                };
            }

            function loadScriptsData() {
                $dashboardCtrl.scripts = {
                    size: {
                        avg: dataService.getData('avg', 'scripts', 'totalSize'),
                        timeline: dataService.getData('timeline', 'scripts', 'totalSize')
                    },
                    duration: {
                        avg: dataService.getData('avg', 'scripts', 'totalDuration'),
                        timeline: dataService.getData('timeline', 'scripts', 'totalDuration')
                    }
                };
            }

            function loadStylesData() {
                $dashboardCtrl.styles = {
                    size: {
                        avg: dataService.getData('avg', 'styles', 'totalSize'),
                        timeline: dataService.getData('timeline', 'styles', 'totalSize')
                    },
                    duration: {
                        avg: dataService.getData('avg', 'styles', 'totalDuration'),
                        timeline: dataService.getData('timeline', 'styles', 'totalDuration')
                    }
                };
            }

            function loadRequestsData() {
                $dashboardCtrl.requests = {
                    size: {
                        avg: dataService.getData('avg', 'xmlRequestValues', 'totalSize'),
                        timeline: dataService.getData('timeline', 'xmlRequestValues', 'totalSize')
                    },
                    duration: {
                        avg: dataService.getData('avg', 'xmlRequestValues', 'totalDuration'),
                        timeline: dataService.getData('timeline', 'xmlRequestValues', 'totalDuration')
                    }
                };
            }

        }]);
