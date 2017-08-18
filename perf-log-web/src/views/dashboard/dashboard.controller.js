angular.module('perfLog')
    .controller('dashboardController', ['$q', 'dataService',
        function ($q, dataService) {
            // Controller Defaults
            const DEFAULTS = {
                data: {},
                barChartData: [10, 20, 30, 40, 60, 80, 20, 50],
                loading: false
            };

            // Public Exports
            const PUBLIC_EXPORTS = {};

            let $dashboardCtrl = angular.merge(this, angular.merge(DEFAULTS, PUBLIC_EXPORTS));

            //
            // Intial data load and setup.
            //
            (function () {
                $dashboardCtrl.loading = true;
                $q.all([loadData()])
                    .finally(() => $dashboardCtrl.loading = false);
            })();

            //
            // Private Functions
            //
            function loadData() {
                return dataService.getData()
                    .then((data) => $dashboardCtrl.data = data);
            }

        }]);
