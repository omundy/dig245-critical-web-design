/**
 *	Main.js - last file to load, starts everything
 *	@author Owen Mundy
 */



var msas = {}, // all the MSAs
	current = {
		"msa": "",
		"scenario": "",
		"data": ""
	}, // current scenario path
	currentScenario = {}, // current scenario data, once loaded
	currentScenarioTIDs = {},
	currentScenarioArray = [],
	tractOrRegion = "t",
	estimateOrMargin = "e";


/**
 *	Initialize page, get data
 */
$(function() {
	init();
});

function init() {
	console.log("init()");

	// get _metadata for menus
	d3.json(Site.rootDir + "data/msas.json", function(error, json) {
		if (error) return console.warn(error); // handle error
		msas = json; // update MSAs

		if (Site.debug) console.log(" -> msas loaded");
		if (Site.debug) $("#rawDataOutput").val("all MSAs: \n" + JSON.stringify(msas));

		// Table.resize(); // get initial table size
		// setTimeout(Table.resize, 1000); // and do it again once data is set

		// check url to see if we should display a page
		Page.initCheckUrlForScenario();
		// add listeners
		Menu.addListeners();
		Page.addListeners();
		// create MSA menu
		Menu.newMsaMenu(msas);
		// create map
		Mns.createMap();
		// create chart
		Chart.createChart();
	});
}




// 1. load msas
// 2. create MSA menu
// 3. check for current page
// 4. create Scenarios menu

/**
 *	Controls all changes to data displayed
 */
function dataChange(origin, newLocation, tractOrRegion, estimateOrMargin) {
	if (!prop(origin) || !prop(newLocation)) return; // origin required
	if (Site.debug) console.log("##################################################");
	if (Site.debug) console.log("dataChange() via", origin);
	if (Site.debug) console.log(" -> Page.location ", Page.location);
	if (Site.debug) console.log(" -> newLocation =", newLocation);

	// what should we update?
	let action = "",
		updateMSA = false,
		updateScenario = false,
		updateData = false;

	// if no msa then set default
	if (!prop(newLocation.msa) || newLocation.msa == "") {
		console.log(" -> -> no msa, picking random");
		let rMsa = randomProperty(msas);
		newLocation.msa = rMsa[0].msa;
		updateMSA = true;
	}
	// if no scenario, or it doesn't exist in msa
	if (!Data.msaScenarioAndDataExists(newLocation) || !prop(newLocation.scenario) || newLocation.scenario == "" ||
		!prop(newLocation.data) || newLocation.data == "") {
		console.log(" --------> no scenario || data, selecting first scenario| data instance");
		newLocation.scenario = msas[newLocation.msa][0].scenario;
		newLocation.data = msas[newLocation.msa][0].data[0];
		updateScenario = updateData = true;
	}

	// change has come from initial load
	if (origin == "load") {
		action = "load, get msa and first scenario";
		updateMSA = updateScenario = updateData = true;
	}
	// change has come from form or map, so look to see what is new
	else {
		// if new msa
		if (prop(newLocation.msa) && newLocation.msa != Page.location.msa)
			updateMSA = true;
		// if new scenario
		if (prop(newLocation.scenario) && newLocation.scenario != Page.location.scenario)
			updateScenario = true;
		// if new data
		if (prop(newLocation.data) && newLocation.data != Page.location.data)
			updateScenario = true;
	}
	console.log(" -> action = " + action, updateMSA, updateScenario, updateData);

	// save new location
	Page.setLocation(newLocation);
	// update selected MSA in dropdown
	Menu.setMsaMenu(Page.location.msa);
	// update url
	Page.updateUrl('add', newLocation);

	// if new msa
	if (updateMSA) {
		// zoom to MSA on map
		Mns.zoomToMSAonMap(Page.location.msa, "dataChange");
		// update scenario menu
		Menu.newScenarioMenu(Page.location.msa);
	}
	// load scenario data
	Data.getScenario(newLocation);
	// load scenario geo data
	Mns.loadTractGeoData(newLocation.msa);


}



/**
 *	Run after scenario data and tract geo data loads
 */
function dataChangeCallback(){
	// set color scale
	Color.updateScale();
	// update chart (and eventually map, from chart.js)
	Chart.updateChart();
	// resize chart once data is loaded
	Chart.resizeTable();
	// update meta
	Menu.updateDownloadLinkMeta();
}
