angular.module('perfLog')
    .directive('areaChart', ['$window', 'dataService', function($window, dataService) {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                chartData: '=',
                idName: '@',
                titleName: '@',
                yAxisTitle: '@'
            },
            templateUrl: 'directives/areaChart/areaChart.html',
            link: function(scope, element, attrs) {

                attrs.$set('id', scope.idName);

                let data = scope.chartData;
                let xAxisName = data.columns[0];
                let yAxisName = data.columns[1];

                var svg = d3.select(element.find('svg')[0]);
                var margin = { top: 20, right: 20, bottom: 30, left: 50 };
                var width = +svg.attr("width") - margin.left - margin.right;
                var height = +svg.attr("height") - margin.top - margin.bottom;
                var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                var x = d3.scaleTime()
                    .rangeRound([0, width]);

                var y = d3.scaleLinear()
                    .rangeRound([height, 0]);

                var area = d3.area()
                    .x(function(d) { return x(d[xAxisName]); })
                    .y1(function(d) { return y(d[yAxisName]); });


                x.domain(d3.extent(data, function(d) { return d[xAxisName]; }));
                y.domain([0, d3.max(data, function(d) { return d[yAxisName]; }) * 1.2]);
                area.y0(y(0));

                g.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 0 + (margin.top / 2))
                    .attr("text-anchor", "middle")
                    .style("font-size", "20px")
                    .style("font-weight", "bold")
                    .style("text-decoration", "none")
                    .text(scope.titleName);

                // Attach Area
                g.append("path")
                    .datum(data)
                    .attr("class", "area")
                    .attr("d", area);

                // Attach X Axis
                g.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%x")));

                // Attach Y Axis
                g.append("g")
                    .call(d3.axisLeft(y))
                    .append("text")
                    .attr("fill", "#000")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", "0.71em")
                    .attr("text-anchor", "end")
                    .text(scope.yAxisTitle);


                function getWidth() {
                    return element.find('svg')[0].clientWidth;
                }

                function getHeight() {
                    return element.find('svg')[0].clientHeight;
                }

                scope.$watch(getWidth, () => redraw());

                function redraw() {
                    // Extract the width and height that was computed by CSS.
                    var width = getWidth();
                    var height = getHeight();


                    // Use the extracted size to set the size of an SVG element.
                    svg
                        .attr("width", width)
                        .attr("height", height);
                }


                $window.addEventListener("resize", redraw);
            }
        };
    }]);
