angular.module('perfLog')
    .service('dataService', ['$http',
        function ($http) {
            // Public Exports
            const PUBLIC_EXPORTS = {
                initChart: initChart
            };

            let $dataSrcv = angular.merge(this, PUBLIC_EXPORTS);

            function initChart() {
 
                
            }

            //Private Functions

        }]);
