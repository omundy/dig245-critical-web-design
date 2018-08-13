var Mns = (function() {
	"use strict";

	// private
	var map,
		msaLayer = {}, // the map layer for all MSAs
		msaIndex = {}, // index of all MSA features for quick lookup

		tractLayer = {}, // reference to Topojson layer created by Leaflet
		tractTIDindex = {}, // reference to tracts by TID
		tractRIDindex = {}, // reference to tracts by RID

		lastMSAFeature = null, // reference last MSA on map to change style to default
		hideLastMSAFeatureTimeOut = null,
		MAP_DEBUG = false
		;

	var msaStyle = {
		"color": "#3690c0",
		"weight": 1,
		"opacity": 0.55
	};
	var tractStyle = {
		"color": "#3690c0",
		"weight": 1,
		"opacity": 0.75
	};
	var tractHighlightStyle = {
		//fillOpacity: 0.4,
		opacity: 1,
		weight: 2,
		color: "#ffffff" // stroke color
	};

	function testStyle(tid) {
		return {
			fillColor: "#000000",
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7
		};
	}






	/**
	 *	Create map
	 */
	function createMap() {
		if (MAP_DEBUG) console.log(" -> createMap()");

		if (map != null)
			map.remove();

		// create Leaflet map
		map = L.map('map', {
			minZoom: 4,
			maxZoom: 15,
			zoomControl: true
		}).setView([35.243, -80.395], 7);

		// Load the MSA topojson and add it to the map
		// from https://www.census.gov/geo/maps-data/data/cbf/cbf_msa.html
		let src = Site.rootDir + "data/cb_2013_us_cbsa_500k_m1s_mapshaper-quantized.topojson";
		d3.json(src, function(error, data) {
			if (error) return console.warn(error);

			let attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>';

			// add base map
			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				id: 'mapbox.light', // testing: 'mapbox.streets'
				opacity: 0.7,
				attribution: attribution,
				accessToken: 'pk.eyJ1Ijoib3dlbm11bmR5IiwiYSI6ImNpd3o4M3dvejAxMHkyeW1neTQxMzlxamkifQ.mRigBfiIBYYqOMAftwkvbQ'
			}).addTo(map);

			// add buttons to map
			L.easyButton('fa-arrows-alt fa-lg', function(btn, map) {
				Page.toggleFullscreen();
			}).addTo(map);
			L.easyButton('fa-location-arrow fa-lg', function(btn, map) {
				zoomToMSAonMap(Page.location.msa);
			}).addTo(map);

			// add msa layer to map
			msaLayer = new L.TopoJSON(data, {
				style: msaStyle,
				onEachFeature: onEachMSAFeature
			});

			// add layer to map
			msaLayer.addTo(map);
			// if an msa is set then zoom to it
			//if (prop(Page.location.msa)) zoomToMSAonMap(Page.location.msa, "createMap");

			// after map loads the first time, call dataChange
			dataChange("load", Page.location);
		});
	}


	/**************************************************************************
	 *																		  *
	 * 	MSAs															  	  *
	 *																		  *
	 **************************************************************************/

	/**
	 *	Zoom to the msa
	 */
	function zoomToMSAonMap(msa, from) {
		console.log(" -> Mns.zoomToMSAonMap()", msa, from, /*arguments.callee.caller.toString(), */ msa, msas[msa][0]);
		if (!prop(msaIndex[msa])) return;
		try {
			//if (MAP_DEBUG) console.log(" -> Mns.zoomToMSAonMap() msaIndex[msa] = ", msaIndex[msa], msaIndex[msa].bounds);
			if (map && prop(msaIndex[msa].bounds))
				map.fitBounds(msaIndex[msa].bounds);
		} catch (err) {
			// pass
			return console.error("Mns.zoomToMSAonMap() -> msas not loaded");
		}
	}

	/**
	 *	Set events, etc. for each MSA feature
	 */
	function onEachMSAFeature(feature, layer) {
		//if (MAP_DEBUG) console.log("Mns.onEachMSAFeature() feature = ",feature, " layer = ",layer)

		// reference to bounds of each MSA
		msaIndex[layer.feature.properties.GEOID] = {
			"bounds": layer.getBounds(),
			"msa": layer.feature.properties.GEOID
		};

		// store reference to feature
		if (feature.properties.GEOID == Page.location.msa) {
			//if (MAP_DEBUG) console.log(" -> !!!!!! store reference in lastMSAFeature", feature.properties.GEOID, Page.location.msa, lastMSAFeature);
			lastMSAFeature = layer;
		}

		// add popup
		var popupHTML = '<h6 class="text-center">' + feature.properties.NAME + '</h6>' +
			'<table>' +
			'<tr><td class="key">MSA Name:</td><td class="val">' + feature.properties.NAME + '</td></tr>' +
			'<tr><td class="key">MSA/GEOID:</td><td class="val">' + feature.properties.GEOID + '</td></tr>' +
			'</table>';
		layer.bindPopup(popupHTML, {
			closeButton: false,
			autoPan: false
		});

		layer.on({
			mouseover: highlightMSAFromMap,
			mouseout: resetMSAStyle,
			mousemove: moveMSAPopup,
			click: msaFeatureClicked
		});
	}
	// highlight an MSA on the map
	function highlightMSAFromMap(e) {
		var layer = e.target;
		var _msa = msaIndex[layer.feature.properties.GEOID].msa;
		//if (MAP_DEBUG) console.log("Mns.highlightMSAFromMap() layer = ",layer, " // msa = ",_msa)

		// don't do anything if this is the current msa (tracts are highlighted)
		if (_msa == Page.location.msa) return;

		// show info
		//info.update(layer.feature.properties);

		// if msa is not set then don't do this
		if (prop(Page.location.msa) && Page.location.msa != parseInt(_msa)) {
			layer.setStyle({
				fillOpacity: 0.4
			});
		}

		//layer.openPopup(); // centers popup
		var popup = e.target.getPopup(); // instead, set popup
		popup.setLatLng(e.latlng).openOn(map); // at position of mouse

		// track recently clicked layer
		lastMSAFeature = layer;

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}
	}
	// reset msa style
	function resetMSAStyle(e) {
		// don't do anything if this is the current msa (tracts are highlighted)
		if (prop(e) && prop(e.feature) && e.feature.properties.GEOID == Page.location.msa) return;

		if (MAP_DEBUG) console.log(" -> Mns.resetMSAStyle() -> ", lastMSAFeature, "e", e);

		if (prop(e)) {
			msaLayer.resetStyle(e.target);
			e.target.closePopup();
		} else if (lastMSAFeature != null) {
			msaLayer.resetStyle(lastMSAFeature);
			lastMSAFeature.closePopup();
		}
	}
	/**
	 *	When a user clicks on an MSA feature in the map
	 */
	function msaFeatureClicked(e) {
		var layer = e.target;
		// if this is an actual MSA feature && there is a GEOID (MSA)
		if (layer.feature.properties && layer.feature.properties.GEOID) {
			if (MAP_DEBUG) console.log("\n^^^^^ Mns.msaFeatureClicked() msa =", layer.feature.properties.GEOID);
			//if (MAP_DEBUG) console.log("layer.feature.properties",layer.feature.properties);
			// track recently clicked msa layer
			lastMSAFeature = layer;
			// reset any previous msas selected
			resetMSAStyle();
			let newLocation = {
				"msa": layer.feature.properties.GEOID,
				"scenario": Page.location.scenario,
				"data": Page.location.data
			};
			//if (Site.debug) console.log(p.toString(), newLocation);
			// update the MSA across the interface
			dataChange("map", newLocation);
		}
	}
	// follow mouse with popup
	function moveMSAPopup(e) {
		//e.target.closePopup();
		var popup = e.target.getPopup();
		popup.setLatLng(e.latlng).openOn(map);
	}
	// hide last msa feature (when we load tracts in its place)
	function hideLastMSAFeature() {
		if (MAP_DEBUG) console.log("hideLastMSAFeature() -> ", lastMSAFeature);
		if (prop(lastMSAFeature)) {
			//clearTimeout(hideLastMSAFeatureTimeOut);
			lastMSAFeature.setStyle({
				fillOpacity: 0.2
			});
		} //else
			//hideLastMSAFeatureTimeOut = setTimeout(hideLastMSAFeature, 1000); // check again in a second
	}




	/**************************************************************************
	 *																		  *
	 * 	TRACTS									  							  *
	 *																		  *
	 **************************************************************************/


	/**
	 *	Load geojson|topojson file
	 *	@param Int msa The msa to load
	 *	@param String src The url to remote file
	 */
	function loadTractGeoData(msa) {
		var src = Site.rootDir + "data/tracts/topojson_quantized_1e6/" + msa + "_tract.topojson";
		if (MAP_DEBUG) console.log(" -> loadTractGeoData()", msa, src);

		d3.json(src, function(error, data) { // use D3 to load JSON
			if (error) return console.warn(error); // return if error
			if (MAP_DEBUG) console.log("     -> d3.json", data); // testing
			// is there already a tract layer?
			if (tractLayer != {}) {
				if (MAP_DEBUG) console.log("     -> tractLayer != null = ", tractLayer);
				// map.eachLayer(function (layer) {
				// 	if (prop(layer.feature) && prop(layer.feature.properties) && prop(layer.feature.properties.TID))
				// 		if (MAP_DEBUG) console.log("layer.feature.properties",layer.feature.properties);
				// });
				map.removeLayer(tractLayer); // remove current layer from map
				tractLayer = {};
			}
			tractTIDindex = {}; // reset TID references
			tractRIDindex = {}; // reset RID references

			if (MAP_DEBUG) console.log("currentScenarioTIDs = ", currentScenarioTIDs);

			tractLayer = new L.TopoJSON(data, { // create new tractLayer, add data
				msa: msa, // for reference later
				style: initialTractStyle,
				onEachFeature: onEachTractFeature
			});
			tractLayer.addTo(map); // add layer to map
			// may not need this because msa already selected/zoomed
			//zoomToMSAonMap(msa, "loadTractGeoData");
			resetMSAStyle(); // make sure the MSA is not visible
			//restyleTractLayer()

			// hide the last msa
			hideLastMSAFeature();
			//if (MAP_DEBUG) console.log(" -> lastMSAFeature",lastMSAFeature);

			// bring to front
			if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
				tractLayer.bringToFront();
			}
		});
	}


	/**
	 *	Set initial tract style on load, hover
	 */
	function initialTractStyle(data) {
		var id, _tid, _rid, d, estOrMar;
		_tid = cleanTID(data.properties.TID);
		_rid = data.properties.RID;
		//if (MAP_DEBUG) console.log(" -> initialTractStyle() -> _tid = ", _tid, " // _rid = ", _rid, " // data = ", data);

		/*
				if (tractOrRegion == "t")
					id = _tid;
				else if (tractOrRegion == "r")
					id = _rid;
		*/

		// set default style
		var defaultStyle = {
			fillColor: "#000000",
			weight: 1,
			opacity: 0.5,
			color: 'white',
			fillOpacity: 0.7
		};
		// if we are showing estimate updateScale
		if (estimateOrMargin == "e") {
			// set color scale
			Color.updateScale();
		}

		// make sure _tid exists
		if (prop(currentScenario) && currentScenario[_tid]) {
			//if (MAP_DEBUG) console.log(" -> initialTractStyle() -> setting style based on data");

			let val = 0;

			// determine whether to store tract / region AND estimate / margin
			if (estimateOrMargin == "e") {
				val = currentScenario[_tid][tractOrRegion + "Est"];
				//if (MAP_DEBUG) console.log(" -> Mns.initialTractStyle() -> E", ", val = " + val, ", fillColor = " + Color.getScale(val));
				defaultStyle.fillColor = Color.getScale(val);
			} else if (estimateOrMargin == "m") {
				val = currentScenario[_tid][tractOrRegion + "CV"];
				//if (MAP_DEBUG) console.log(" -> Mns.initialTractStyle() -> M");
				// color by CV, but display MOE
				defaultStyle.fillColor = Color.cvColorScale(val);
			}

			/*
						// use TID (without "g") or RID as a reference with currentScenario to get estimate
						if (tractOrRegion == "t")
							d = currentScenario[_tid].tEst;
						else if (tractOrRegion == "r")
							d = currentScenario[_tid].rEst;

						// update style color
						defaultStyle.fillColor = blues(d);
			*/
		} // if no TID, currentScenario, or data found
		else {
			if (MAP_DEBUG) console.log(" -> Mns.initialTractStyle() -> NO DATA, RETURNING DEFAULT STYLE");
			// else just make default style transparent
			defaultStyle.fillColor = "#00000000";
		}
		// return style object
		return defaultStyle;
	}
	/**
	 *	Set properties, popup, events for each tract feature
	 */
	function onEachTractFeature(feature, layer) {
		//if (MAP_DEBUG) console.log(" -> onEachTractFeature() feature, layer", feature, layer)

		// add references to TID, RID to call it from the chart later
		tractTIDindex[feature.properties.TID] = layer;
		tractRIDindex[feature.properties.RID] = layer;

		// get the data for the feature
		var tractData = currentScenario[cleanTID(feature.properties.TID)];
		// if no data, return
		if (!prop(tractData)) return;

		// add popup
		var popupHTML = '<table class="">' +
			'<thead>' +
			'<tr><th class="key"></th><th class="val">Tract</th><th class="val">Region</th></tr>' +
			'</thead>' +
			'<tbody>' +
			'<tr><td class="key">ID</td><td class="val">' + tractData.TID + '</td><td class="val">' + tractData.RID + '</td></tr>' +
			'<tr><td class="key">Estimate</td><td class="val t">' + tractData.tEst + '</td><td class="val r">' + tractData.rEst + '</td></tr>' +
			'<tr><td class="key">Margin of Error</td><td class="val">±' + padFloat(tractData.tMar) + '</td><td class="val">±' + padFloat(tractData.rMar) + '</td></tr>' +
			'<tr><td class="key">CV</td><td class="val">' + padFloat(tractData.tCV) + '</td><td class="val">' + padFloat(tractData.rCV) + '</td></tr>' +
			'</tbody>' +
			'</table>';
		layer.bindPopup(popupHTML, {
			closeButton: false,
			autoPan: false
		});


		//console.log("onEachTractFeature()",feature,layer);
		layer.on({
			mouseover: highlightTractFromMap,
			mouseout: resetTractStyleFromMap,
			mousemove: moveTractPopup,
			click: zoomToTractFeature
		});
	}
	// highlight tract
	function highlightTractFromMap(e) {
		// reference to layer feature
		var layer = e.target;

		//if (MAP_DEBUG) console.log(" -> highlightTractFromMap() layer = ",layer)
		//if (MAP_DEBUG) console.log(" -> highlightTractFromMap() layer.feature = ",layer.feature)

		// slightly shift fill
		layer.setStyle(tractHighlightStyle);

		//layer.openPopup(); // centers popup
		var popup = e.target.getPopup(); // instead, set popup
		popup.setLatLng(e.latlng).openOn(map); // at position of mouse

		// temp commenting out
		//		highlightTractOnChart(layer.feature.properties);

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}
	}
	// reset tract
	function resetTractStyleFromMap(e) {
		var layer = e.target;
		//if (MAP_DEBUG) console.log("resetTractStyleFromMap()", layer.options);
		tractLayer.resetStyle(layer);
		layer.closePopup();

		// temp commenting out
		//		removeHighlightTractOnChart(layer.feature.properties); // resetStyle any tract styles
	}
	// zoom to a tract
	function zoomToTractFeature(e) {
		map.fitBounds(e.target.getBounds());
	}
	// zoom to a tract
	function zoomToTractFeatureFromChart(tid) {
		//console.log("tractTIDindex[tid]",tractTIDindex[tid]);
		map.fitBounds(tractTIDindex[tid]._bounds);
	}

	// highlight tract
	function highlightTractFromChart(tid) {
		if (!prop(tractTIDindex[tid])) return; // map hasn't loaded yet
		var layer = tractTIDindex[tid];
		//console.log("highlightTractFromChart() tid = ",tid, "layer = ",layer);
		//var style = testStyle(tid);
		layer.setStyle(tractHighlightStyle);
		layer.openPopup();

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}
	}
	// reset tract style to original
	function resetTractStyleFromChart(tid) {
		if (!prop(tractTIDindex[tid])) return; // map hasn't loaded yet
		var layer = tractTIDindex[tid];
		tractLayer.resetStyle(layer);
		layer.closePopup();
	}


	// follow mouse with popup
	function moveTractPopup(e) {
		//e.target.closePopup();
		var popup = e.target.getPopup();
		popup.setLatLng(e.latlng).openOn(map);
	}
	// update map after chart to give topojson time to load
	function updateMap() {
	//	return;
// not sure if i need this
		console.log("updateMap()");
		if (!prop(tractLayer.eachLayer)) return;

		tractLayer.eachLayer(function(layer) {
			if (MAP_DEBUG) console.log(" -> eachLayer()", layer.feature, layer);

			// reset properties, popup, events for each tract feature
			onEachTractFeature(layer.feature, layer);

			// reset layer style based on new data
			if (prop(layer.feature))
				layer.setStyle(initialTractStyle(layer.feature));
		});
	}

	function getLastMSAFeature() {
		return lastMSAFeature;
	}


	// initial set tractStyles to build choropleth map
	function setAllTractColors(data) {
		//	console.log("setAllTractColors()",data);


		// update the color scale for the map

	}
	// sets scales for tractStyles
	function setTractStyleScale(data) {
		console.log("setTractStyleScale()", data);

	}

	return {
		createMap: createMap,
		lastMSAFeature: function() {
			return getLastMSAFeature();
		},
		zoomToMSAonMap: function(msa, from) {
			zoomToMSAonMap(msa, from);
		},
		zoomToTractFeatureFromChart: function(tract){
			zoomToTractFeatureFromChart(tract);
		},
		loadTractGeoData: function(msa) {
			loadTractGeoData(msa);
		},
		updateMap: updateMap,
		setAllTractColors: function(data) {
			setAllTractColors(data);
		},
		resetTractStyleFromChart: function(tid) {
			resetTractStyleFromChart(tid);
		},
		highlightTractFromChart: function(tid) {
			highlightTractFromChart(tid);
		}
	};

}());


$(function() {


});
