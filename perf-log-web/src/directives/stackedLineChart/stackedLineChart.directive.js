angular.module('perfLog')
    .directive('stackedLineChart', ['commitmentCSV', 'stackedAreaChartTSV', function(commitmentCSV, stackedAreaChartTSV) {
        return {
            restrict: 'E',
            replace: false,
            scope: {},
            templateUrl: 'directives/stackedLineChart/stackedLineChart.html',
            link: function(scope, element, attrs) {
                var csv = commitmentCSV;
                var tsv = stackedAreaChartTSV;

                var svg = d3.select("svg#stacked-line-chart");
                var margin = { top: 20, right: 20, bottom: 30, left: 50 };
                var width = svg.attr("width") - margin.left - margin.right;
                var height = svg.attr("height") - margin.top - margin.bottom;

                var parseDate = d3.timeParse("%Y %b %d");

                var x = d3.scaleTime().range([0, width]);
                var y = d3.scaleLinear().range([height, 0]);
                var z = d3.scaleOrdinal(d3.schemeCategory10);

                var stack = d3.stack();

                var area = d3.area()
                    .x(function(d, i) { return x(d.data.date); })
                    .y0(function(d) { return y(d[0]); })
                    .y1(function(d) { return y(d[1]); });

                var g = svg.append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                var data = d3.tsvParse(tsv, type);


                var keys = data.columns.slice(1);

                x.domain(d3.extent(data, function(d) { return d.date; }));
                z.domain(keys);
                stack.keys(keys);

                var layer = g.selectAll(".layer")
                    .data(stack(data))
                    .enter().append("g")
                    .attr("class", "layer");

                layer.append("path")
                    .attr("class", "area")
                    .style("fill", function(d) { return z(d.key); })
                    .attr("d", area);

                layer.filter(function(d) { return d[d.length - 1][1] - d[d.length - 1][0] > 0.01; })
                    .append("text")
                    .attr("x", width - 6)
                    .attr("y", function(d) { return y((d[d.length - 1][0] + d[d.length - 1][1]) / 2); })
                    .attr("dy", ".35em")
                    .style("font", "10px sans-serif")
                    .style("text-anchor", "end")
                    .text(function(d) { return d.key; });

                g.append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));

                g.append("g")
                    .attr("class", "axis axis--y")
                    .call(d3.axisLeft(y).ticks(10, "%"));


                function type(d, i, columns) {
                    d.date = parseDate(d.date);
                    for (var i = 1, n = columns.length; i < n; ++i) d[columns[i]] = d[columns[i]] / 100;
                    return d;
                }
            }
        };
    }]);
