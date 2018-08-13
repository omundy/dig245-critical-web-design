var Chart = (function() {
	"use strict";

	var limit = 20, // data limit for testing
		svgHeight = 20, // height for all svg elements
		loaded = false,
		CHART_DEBUG = false;

	var margin,
		sizes,
		width, height,
		svgRatio = 0.67,
		svgStroke = 1.5,
		barHV = 8;

	// table
	var table, theadtr, tbody,
		rows, yScale, xScale, xMin, xMax, xExtent;

	// resize chart elements based on browser size
	d3.select(window).on('resize', resizeTable);



	function resizeTable() {
		// get sizes
		sizes = {
			"chartContainer": $("#chart-container").width(),
			"chart": $("#chart").width(),
			"table": $("table").width(),
			"thSVG": $(".thSVG").width(),
			"svgCell": $(".svgCell").width(),
		};

		//console.log("\nTable.resizeTable() sizes = ", sizes, "sizes.chartContainer = "+ sizes.chartContainer," ratio = "+svgRatio);

		// expand table
		$("table").width(sizes.chartContainer);

		// resize headers to match data in colums
		$(".thTID").width($(".tid").width());
		$(".thRID").width($(".rid").width());
		$(".thEST").width($(".est").width());
		$(".thMAR").width($(".err").width());

		// resize SVG headers/cells
		$(".thSVG").width(sizes.chartContainer * svgRatio);
		$(".thSVG svg").width(sizes.chartContainer * svgRatio);
		$(".svgCell").width(sizes.chartContainer * svgRatio);
		$(".svgCell svg").width(sizes.chartContainer * svgRatio);

		// update SVG sizes in chart
		if (prop(loaded) && loaded == true) {
			//console.log("currentScenarioArray0", currentScenarioArray);
			updateChart();
			updateChartScales();
		}

		// set svg properties
		margin = {
			top: 0,
			right: 10,
			bottom: 0,
			left: 10
		};
		width = (sizes.thSVG - margin.left - margin.right);
		height = (svgHeight - margin.top - margin.bottom);

	}
	resizeTable(); // get initial table sizes
	//setTimeout (resizeTable,1000); // and do it again once data is set



	function createChart() {
		if (CHART_DEBUG) console.log(" -> createChart()");
		// references to table
		table = d3.select('#chart table');
		theadtr = table.select('thead tr');
		tbody = table.select('tbody');
		// add svg to thSVG for xAxis
		theadtr.select('.thSVG').append("svg").attr("height", svgHeight);
	}


	/**
	 * 	Build HTML table inside the SVG chart. Update comes later.
	 */
	function enterChart() {
		//if (CHART_DEBUG) console.log("enterChart() -> currentScenarioArray = ",currentScenarioArray);


		//************ INIT TABLE ************

		// set the update selection:
		rows = tbody.selectAll('tr')
			.data(currentScenarioArray);

		// set the enter selection:
		var rowsEnter = rows.enter()
			.append('tr');

		// add a td for each column
		rowsEnter.append('td').attr("class", "tid");
		rowsEnter.append('td').attr("class", "rid");
		rowsEnter.append('td').attr("class", "est");
		rowsEnter.append('td').attr("class", "err");



		//************ INIT SVG BOXPLOT ************

		// append svg cell
		var svg = rowsEnter.append('td')
			.attr('class', 'svgCell')
			.append('svg')
			.attr("width", width)
			.attr("height", height);

		// append horizontal bar to svg
		svg.append('rect').attr("class", "svgBar svgBarHorz");
		svg.append('rect').attr("class", "svgBar svgBarVertLeft");
		svg.append('rect').attr("class", "svgBar svgBarVertRight");

		// append triangle to svg
		var tri = d3.symbol()
			.type(d3.symbolTriangle)
			.size(15);
		svg.append('path')
			.attr('d', tri)
			.attr("class", "svgTri")
			.attr('fill', "black");

	}




	/**
	 * 	Build / Update HTML table inside the SVG chart
	 */
	function updateChart() {
		//console.log("currentScenarioArray1", currentScenarioArray);
		enterChart();

		//if (CHART_DEBUG) console.log("updateChart() -> currentScenario = ",currentScenario)
		//if (CHART_DEBUG) console.log("updateChart() -> currentScenarioArray = ",currentScenarioArray)

		Color.updateScale();
		updateChartScales();

		// update class on each row
		var rows = tbody.selectAll('tr')
			.data(currentScenarioArray)
			.attr("class", function(d, i) {
				return "g" + d.value.TID; // need "g" because numbers can't be a class
			});


		// select all columns by class, (re)bind the data
		d3.selectAll(".tid")
			.data(currentScenarioArray)
			.classed("button_sliding_bg_left", true)
			.attr("current_source", current.data)
			.attr("row", function(d, i) {
				return i;
			})
			.attr("title", function(d, i) {
				return reformatTID(d.value.TID);
			})
			.text(function(d, i) {
				return /* i; */ reformatTID(d.value.TID).substring(7); /* remove "state.county." */
			})
			.attr("style", function(d) {
				//console.log(".tid -> ",d.value[tractOrRegion+"Est"],Color.getScale(d.value[tractOrRegion+"Est"])); /**/

				saveOriginalRowColor("g" + d.value.TID);
				var c = getOriginalRowColor("g" + d.value.TID); // default (white)
				if (tractOrRegion == "t") {
					c = d3.color(Color.getScale(d.value.tEst)); // create color
					c.opacity = 0.5; // set opacity
				}
				return "background: " + c; // set bg color
			});
		d3.selectAll(".rid")
			.data(currentScenarioArray)
			.classed("button_sliding_bg_right", true)
			.attr("current_source", current.data)
			.attr("row", function(d, i) {
				return i;
			})
			.text(function(d) {
				return d.value.RID;
			})
			.attr("style", function(d) {
				//console.log(".rid -> ",d.value[tractOrRegion+"Est"],Color.getScale(d.value[tractOrRegion+"Est"])); /**/

				var c = getOriginalRowColor("g" + d.value.TID); // default (white)
				if (tractOrRegion == "r") {
					c = d3.color(Color.getScale(d.value.rEst)); // create color
					c.opacity = 0.5; // set opacity
				}
				return "background: " + c; // set bg color
			});
		d3.selectAll(".est")
			.data(currentScenarioArray)
			.attr("row", function(d, i) {
				return i;
			})
			.text(function(d) {
				return padFloat(d.value[tractOrRegion + "Est"]);
			});
		d3.selectAll(".err")
			.data(currentScenarioArray)
			.attr("row", function(d, i) {
				return i;
			})
			.text(function(d) {
				return "±" + padFloat(d.value[tractOrRegion + "Mar"]);
			})
			.attr("style", function(d) {
				return "color: " + Color.cvColorScale(d.value[tractOrRegion + "CV"]); // set bg color
			});


		d3.selectAll(".svgCell")
			.data(currentScenarioArray)
			.attr("row", function(d, i) {
				return i;
			});


		// transitions über alles! (used by the selects below)
		var t = d3.transition().duration(600);

		// select svgs by class, rebind data, and set transitions
		d3.selectAll(".svgBarHorz")
			.data(currentScenarioArray).transition(t)
			.attr("x", function(d, i) {
				return xScale(d.value[tractOrRegion + "MarMin"]);
			})
			.attr("y", height / 2)
			.attr("width", function(d, i) {
				return xScale(d.value[tractOrRegion + "MarMax"]) - xScale(d.value[tractOrRegion + "MarMin"]);
			})
			.attr("height", svgStroke);
		d3.selectAll(".svgBarVertLeft")
			.data(currentScenarioArray).transition(t)
			.attr("x", function(d, i) {
				return xScale(d.value[tractOrRegion + "MarMin"]);
			})
			.attr("y", 7)
			.attr("width", svgStroke)
			.attr("height", barHV);
		d3.selectAll(".svgBarVertRight")
			.data(currentScenarioArray).transition(t)
			.attr("x", function(d, i) {
				return xScale(d.value[tractOrRegion + "MarMax"]);
			})
			.attr("y", 7)
			.attr("width", svgStroke)
			.attr("height", barHV);
		d3.selectAll(".svgTri")
			.data(currentScenarioArray).transition(t)
			.attr('transform', function(d, i) {
				return "translate(" + xScale(d.value[tractOrRegion + "Est"]) + "," + barHV * 2 + ") ";
			});


		// set all map colors
		//console.log("currentScenarioArray2", currentScenarioArray);
		Mns.setAllTractColors(currentScenarioArray);





		//************ INTERACTION ************

		function selectRow(r) {
			//d3.selectAll("td.tid").classed("highlight", true);
		}

		// highlight tracts on map from table rows
		d3.selectAll("tbody tr")
			.on("mouseover", function(d) {
				Mns.highlightTractFromChart("g" + d.value.TID);
			})
			.on("mouseout", function(d) {
				Mns.resetTractStyleFromChart("g" + d.value.TID);
			})
			.on("click", function(d) {
				//console.log("d.value.TID",d.value.TID);
				Mns.zoomToTractFeatureFromChart("g" + d.value.TID);
			});

		// estimate / error toggle buttons
		// d3.selectAll(".est")
		// 	.on("click", selectEST);
		// d3.selectAll(".err")
		// 	.on("click", selectMAR);




		//************ FINAL ************

		// remove rows not needed
		rows.exit().remove();



		Mns.updateMap(); // update map after chart to give topojson time to load
		highlightHeaders(); // update headers

		//console.log("currentScenarioArray3", currentScenarioArray);
		createAxes(currentScenarioArray, yScale, xScale, tractOrRegion + "Mar", tractOrRegion + "Est");
	}

	/*
	 *	Create axes and labels
	 *	@param {Array} data - the array of objects
	 *	@param {Function} yScale - returns a scale
	 *	@param {Function} xScale - returns a scale
	 *	@param {Float} err - "tMar" or "regionError" from above
	 *	@param {Float} est - "tractEst" or "regionEst" from above
	 */
	function createAxes(data, yScale, xScale, err, est) {
		//console.log("create_axes()", data, yScale, xScale, err, est);

		// keep tick labels from overlapping
		var ticks = 5;
		if (parseFloat(data[0].value[est]) > 1000) ticks = 4;


		//************ TOP AXIS (NUMBERS) ************

		// set X/Y axes functions
		var xAxis = d3.axisTop()
			.scale(xScale)
			.ticks(ticks)
			.tickSizeInner(-height)
			.tickSizeOuter(0)
			.tickPadding(10);
		// add X axis properties
		d3.select(".thSVG svg").append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(" + 0 + "," + (25) + ")");
		// update axis
		d3.select(".x.axis").transition().duration(500).call(xAxis);



		//************ BACKGROUND TICKS ************

		var xAxisTicks = d3.axisTop()
			.scale(xScale)
			.ticks(ticks)
			.tickSizeInner(-height)
			.tickSizeOuter(1000) // hide outer ticks way off screen
			.tickPadding(10);
		//xAxisTicks.selectAll("text").remove();

		d3.selectAll(".svgCell svg")
			.attr("class", "x3 axis3 ")
		//.attr("transform", "translate(" + 0 + ","+ 0 +")")
		;
		d3.selectAll(".x3.axis3")
			.transition().duration(500)
			.call(xAxisTicks);

	}


	/**
	 * 	Reformat Tract ID with periods to make it more readable
	 *	reference: https://www.census.gov/geo/reference/geoidentifiers.html
	 *	So... 18105000901 => 18.105.000901 [state.county.tract]
	 */
	function reformatTID(str) {
		str = str.substr(0, 2) + // state
			"." + str.substr(2, 3) + // county
			"." + str.substr(5);
		return str;
	}



	/**
	 * Set the header styles based on current state(s)
	 * @return {[type]} [description]
	 */
	function highlightHeaders() {

		var activeClass = "btn-outline-secondary",
			inactiveClass = "btn-light";

		if (tractOrRegion == "t") {
			$('.thTID button').removeClass(inactiveClass).addClass(activeClass);
			$('.thRID button').removeClass(activeClass).addClass(inactiveClass);
		} else {
			$('.thTID button').removeClass(activeClass).addClass(inactiveClass);
			$('.thRID button').removeClass(inactiveClass).addClass(activeClass);
		}
		if (estimateOrMargin == "e") {
			$('.thEST button').removeClass(inactiveClass).addClass(activeClass);
			$('.thMAR button').removeClass(activeClass).addClass(inactiveClass);
		} else {
			$('.thEST button').removeClass(activeClass).addClass(inactiveClass);
			$('.thMAR button').removeClass(inactiveClass).addClass(activeClass);
		}
	}
	$('.thTID button').on('click', function() {
		selectTID();
	});
	$('.thRID button').on('click', function() {
		selectRID();
	});
	$('.thEST button').on('click', function() {
		toggleEstimateOrMargin("e");
	});
	$('.thMAR button').on('click', function() {
		toggleEstimateOrMargin("m");
	});

	function toggleEstimateOrMargin(state) {
		if (state == estimateOrMargin) return; // if same, exit
		estimateOrMargin = state; // update
		console.log("estimateOrMargin", estimateOrMargin);
		Mns.updateMap();
		updateChart();
		highlightHeaders();
	}

	function selectEST() {
		console.log("selectEST() -> estimateOrMargin=", estimateOrMargin);
		if (estimateOrMargin == "e") return; // if same, exit
		toggleEstimateOrMargin("e");
	}

	function selectMAR() {
		console.log("selectMAR() -> estimateOrMargin=", estimateOrMargin);
		if (estimateOrMargin == "m") return; // if same, exit
		toggleEstimateOrMargin("m");
	}




	function saveOriginalRowColor(_tid) {
		var _row = d3.select("." + _tid); // reference
		_row.attr("original-bg-color", _row.style("background")); // save current bg color
	}

	function getOriginalRowColor(_tid) {
		var _row = d3.select("." + _tid); // reference
		return _row.attr("original-bg-color"); // return original bg color
	}


	function highlightTractOnChart(properties) {
		var _row = d3.select("." + properties.TID); // reference
		saveOriginalRowColor(properties.TID);
		if (prop(properties.TID))
			_row.style("background", "rgba(0,0,0,.1)");
	}

	function removeHighlightTractOnChart(properties) {
		var _row = d3.select("." + properties.TID); // reference
		if (prop(properties.TID))
			_row.style("background", getOriginalRowColor(properties.TID)); // set it to saved bg color
	}
	/**
	 * Change selection on chart/map to show TRACTS
	 */
	function selectTID(d) {
		//console.log("selectTID() -> d,i",d,i);

		// switch to display tract data in boxplot
		if (tractOrRegion == "r") {
			tractOrRegion = "t"; // change to tracts
			// update classes
			d3.selectAll(".tid").classed("highlight", true);
			d3.selectAll(".rid").classed("highlight", false);
			// update classes on map popup
			d3.selectAll(".t").style("font-weight", "bold");
			d3.selectAll(".r").style("font-weight", "normal");
			selectTIDorRID(d);
		}

	}

	function resetTID(d) {
		if (prop(d))
			Mns.resetTractStyleFromChart("g" + d.value.TID);
	}
	/**
	 * Change selection on chart/map to show REGIONS
	 */
	function selectRID(d) {
		//console.log("selectRID() -> tractOrRegion = ",tractOrRegion);

		// switch to display region data in boxplot
		if (tractOrRegion == "t") {
			tractOrRegion = "r"; // change to tracts

			d3.selectAll("td.tid").classed("highlight", false);
			d3.selectAll("td.rid").classed("highlight", true);
			// update classes on map popup
			d3.selectAll(".t").style("font-weight", "bold");
			d3.selectAll(".r").style("font-weight", "normal");
			selectTIDorRID(d);
		}
	}

	function resetRID(d) {
		if (prop(d))
			Mns.resetTractStyleFromChart("g" + d.value.TID);
	}

	/**
	 * Change selection on chart/map to show TRACTS / REGIONS
	 */
	function selectTIDorRID(d) {
		Mns.updateMap(); // update map
		updateChart(); // update chart
		// (always) highlight tract on map after map update
		if (prop(d))
			Mns.highlightTractFromChart("g" + d.value.TID);
		highlightHeaders();
	}

	function resetTIDorRID(d) {
		if (prop(d))
			Mns.resetTractStyleFromChart("g" + d.value.TID);
	}






	/**
	 * 	Build / Update HTML table inside the SVG chart
	 */
	function updateChartScales() {
		//if (CHART_DEBUG)
		console.log("updateChartScales()");

		// Y-SCALE: based on number of data
		yScale = d3.scaleLinear()
			.domain([0, currentScenarioArray.length])
			.range([margin.top, height - margin.bottom]);

		// X-SCALE: using tract MOE min/max to show difference
		xMin = d3.min(currentScenarioArray, function(d) {
			return parseFloat(d.value[tractOrRegion + "MarMin"]);
		});
		xMax = d3.max(currentScenarioArray, function(d) {
			return parseFloat(d.value[tractOrRegion + "MarMax"]);
		});
		xExtent = [xMin, xMax];
		//if (CHART_DEBUG) console.log(xExtent);
		xScale = d3.scaleLinear()
			.domain(xExtent).nice()
			.range([margin.left, width - margin.right]);
	}




	return {
		createChart: createChart,
		updateChart: updateChart,
		updateChartScales: updateChartScales,
		resizeTable: resizeTable
	};

}());
