angular.module('perfLog')
    .directive('barChart', [ function () {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                chartData: '='
            },
            link: function (scope, element, attrs) {
                var chart = d3.select(element[0]);

                chart.append("div").attr("class", "bar-chart")
                    .selectAll('div')
                    .data(scope.chartData).enter().append("div")
                    .transition().ease(d3.easeCubic)
                    .style("width", (datum) => datum + "%")
                    .text((datum) => datum + "%");
            }
        };
    }]);
