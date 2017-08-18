angular.module('perfLog')
    .directive('lineChart', ['dataService', 'commitmentCSV', 'stackedAreaChartTSV', 'lineChartTSV', function(dataService, commitmentCSV, stackedAreaChartTSV, lineChartTSV) {
        return {
            restrict: 'E',
            replace: false,
            scope: {},
            templateUrl: 'directives/lineChart/lineChart.html',
            link: function(scope, element, attrs) {

                let data = dataService.getDurationData();
                let xAxisName = data.columns[0];
                let yAxisName = data.columns[1];

                var svg = d3.select("svg#line-chart");
                var margin = { top: 20, right: 20, bottom: 30, left: 50 };
                var width = +svg.attr("width") - margin.left - margin.right;
                var height = +svg.attr("height") - margin.top - margin.bottom;
                var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


                var x = d3.scaleTime()
                    .rangeRound([0, width]);

                var y = d3.scaleLinear()
                    .rangeRound([height, 0]);

                // Define Line
                var line = d3.line()
                    .x((d) => x(d[xAxisName]))
                    .y((d) => y(d[yAxisName]));


                x.domain(d3.extent(data, (d) => d[xAxisName]));
                y.domain([0, d3.max(data, (d) => d[yAxisName])]);

                // Attach Line  
                g.append("path")
                    .data([data])
                    .attr("class", "line")
                    .attr("d", line);

                // Attach X Axis
                g.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%x")));

                // Attach Y Axis
                g.append("g")
                    .call(d3.axisLeft(y));

            }
        };
    }]);
