var Color = (function() {
	"use strict";

	var blues = d3.scaleOrdinal(d3.schemeBlues[9]),
		bluesDomain = [];

	function cvColorScale(cv) {
		var color, percent = cv * 100;
		// High Reliability: Small CVs, less than or equal to 12 percent, are flagged green to indicate
		// that the sampling error is small relative to the estimate and the estimate is reasonably reliable.
		if (percent <= 12)
			color = "#5f9a1c";
		// Medium Reliability: Estimates with CVs between 12 and 40 are flagged yellow—use with caution.
		else if (percent <= 40)
			color = "#ff9900";
		// Low Reliability: Large CVs, over 40 percent, are flagged red to indicate that the sampling error
		// is large relative to the estimate. The estimate is considered very unreliable.
		else if (percent > 40)
			color = "#ff0000";
		else
			color = "#000";
		//console.log("CV = ",cv,"percent = ",percent,"color = ",color)
		return color;
	}

	// return blue scale
	function getScale(n) {
		return blues(n);
	}

	// set blue scale
	function updateScale() {
		// experiments
		//accent = d3.scaleOrdinal(d3.schemeAccent);
		//blues = d3.scaleOrdinal(d3.schemeBlues[9]);
		//estExtent = d3.extent(currentScenarioArray, function(d) { return d.properties.pop_max; })


		// GLOBALS: currentScenarioArray, tractOrRegion,

		// create extent for estimate
		let estExtent = d3.extent(currentScenarioArray.map(function(item) {
			//console.log("tractOrRegion = ",tractOrRegion,item.value[tractOrRegion+"Est"]);
			return (item.value[tractOrRegion + "Est"]);
		}));
		// create extent for margin
		let marExtent = d3.extent(currentScenarioArray.map(function(item) {
			//console.log("tractOrRegion = ",tractOrRegion,item.value[tractOrRegion+"Est"]);
			return (item.value[tractOrRegion + "Mar"]);
		}));
		//console.log("updateColorScales() -> estExtent = ",estExtent,"marExtent = ",marExtent)

		// find midpoint between estExtents, use parseFloats so strings don't concat
		let estExtentMiddle = parseFloat(estExtent[0]) + ((parseFloat(estExtent[1]) - parseFloat(estExtent[0])) / 2);
		let marExtentMiddle = parseFloat(marExtent[0]) + ((parseFloat(marExtent[1]) - parseFloat(marExtent[0])) / 2);

		// a scale for the estimates
		blues =
			d3.scaleQuantile()
			.domain([estExtent[0], estExtent[1]])
			.range(d3.schemeBlues[9]);
		/*
				reds = d3.scaleQuantile()
					.domain([marExtent[0], marExtent[1]])
					.range(d3.schemeReds[9])
				;
				*/
	}

	// tests
	function getColorOrange(d) {
		return d > 8 ? '#800026' :
			d > 7 ? '#BD0026' :
			d > 6 ? '#E31A1C' :
			d > 5 ? '#FC4E2A' :
			d > 4 ? '#FD8D3C' :
			d > 3 ? '#FEB24C' :
			d > 2 ? '#FED976' :
			'#FFEDA0';
	}
	function getColor(d) {
		return d > 8 ? '#034e7b' :
			d > 7 ? '#034e7b' :
			d > 6 ? '#0570b0' :
			d > 5 ? '#3690c0' :
			d > 4 ? '#74a9cf' :
			d > 3 ? '#a6bddb' :
			d > 2 ? '#d0d1e6' :
			'#f1eef6';
	}


	return {
		updateScale: updateScale,
		getScale: function(n) {
			return getScale(n);
		},
		cvColorScale: function(val) {
			return cvColorScale(val);
		}
	};

}());
