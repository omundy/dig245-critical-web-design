var Menu = (function() {
	"use strict";

	/**
	 *	Build new MSA menu
	 */
	function newMsaMenu(msas) {
		if (Site.debug) console.log(" -> Menu.newMsaMenu()");
		// default option
		var str = "<option val=''></option>";
		// loop through msas
		for (var key in msas) {
			// skip loop if the property is from prototype
			if (!msas.hasOwnProperty(key)) continue;
			//if (Site.debug) console.log(key,data[key])
			// add MSAs to select options
			str += optionHTML(key, key + " - " + msas[key][0].description);
		}
		$("#msa_select_box").append(str).trigger('chosen:updated'); // update select
	}
	// generic return option
	function optionHTML(val, text) {
		return "<option value='" + val + "'>" + text + "</option>";
	}

	/**
	 *	Set state of the MSA menu
	 */
	function setMsaMenu(msa) {
		$("#msa_select_box").val(msa).trigger('chosen:updated');
	}

	/**
	 *	Build new scenario menu based on MSA selection
	 */
	function newScenarioMenu(msa) {
		if (Site.debug) console.log(" -> Menu.newScenarioMenu()", msa);
		if (Site.debug) $("#rawDataOutput").val(msa + ": \n" + JSON.stringify(msas[msa])); // testing
		//if (Site.debug) console.log("msas[msa][0]",msas[msa][0])

		// use msa to update the scenario box
		var str = "<option val=''></option>";

		// for each scenario
		for (var i = 0, l = msas[msa].length; i < l; i++) {
			//if (Site.debug) console.log( msas[msa][i]);

			// get scenario
			var scenarioDetails = msas[msa][i].scenario;

			// add optiongroup with scenario
			str += "<optgroup label='" + dataDefinitions[scenarioDetails] + "'>";

			// for each data type
			for (var j = 0; j < msas[msa][i].data.length; j++) {
				//if (Site.debug) console.log( msas[msa][i].data[j]);

				var data = msas[msa][i].data[j];

				// add scenario
				str += optionHTML(scenarioDetails + "-" + data, dataDefinitions[data]);
			}
			str += "</optgroup>";
		}

		// update options
		$("#scenario_select_box").html(str).trigger('chosen:updated');

		// if scenario/data then set it
		if (prop(Page.location.scenario) && prop(Page.location.data)) {
			//if (Site.debug) console.log("scenario",current.scenario +"-"+ current.data);
			$("#scenario_select_box").val(Page.location.scenario + "-" + Page.location.data).trigger('chosen:updated');
		}
		// otherwise open it for input
		else {
			$('#scenario_select_box').trigger('chosen:open');
		}


	}


	function addListeners() {

		// define chosen() options
		$("#msa_select_box").chosen({
			search_contains: true, // start search anywhere in the word
			disable_search_threshold: 10,
			no_results_text: "Oops, nothing found!",
			width: "95%"
		});
		$("#scenario_select_box").chosen({
			search_contains: true,
			disable_search_threshold: 10,
			no_results_text: "Oops, nothing found!",
			width: "95%"
		});

		// on chosen() change events
		$('#msa_select_box').on('change', function(evt, params) {
			//if (Site.debug) console.log("params.selected", params.selected);
			let newLocation = {
				"msa": params.selected,
				"scenario": Page.location.scenario,
				"data": Page.location.data
			};
			//if (Site.debug) console.log(p.toString(), newLocation);
			dataChange("menu", newLocation);
		});
		$('#scenario_select_box').on('change', function(evt, params) {
			//if (Site.debug) console.log("params.selected", params.selected);
			// split the params from the dropdown
			var p = params.selected.split("-");
			if (p.length == 2) {
				let newLocation = {
					"msa": Page.location.msa,
					"scenario": p[0],
					"data": p[1]
				};
				//if (Site.debug) console.log(p.toString(), newLocation);
				dataChange("menu", newLocation);
			}
		});

	}

	function updateDownloadLink(msa){
		if (isNaN(msa)) return;
		let url = "https://github.com/co-ncrn/co-ncrn.github.io/tree/master/msa_data/"+msa;
		$(".download_link").attr("href",url);
	}
	function updateDownloadLinkMeta(){
		let str = " [ "+
			//"" + Page.location.msa + ":" + Page.location.scenario + ":" + Page.location.data +
			Data.getNumberTracts() + " tracts / " +
			Data.getNumberRegions() + " regions" +
			//", numberChartTIDs="+ d3.selectAll(".tid").size() +
			//"; tractOrRegion=" + tractOrRegion +
			//"; estimateOrMargin=" + estimateOrMargin
			" ] ";
		$(".download_link_meta").html(str);
	}

	function updateShareLinks(title,url){
		let fb = "https://www.facebook.com/dialog/share?app_id=833996433457830&display=page&href="+ url +"&redirect_uri="+ url,
			tw = "https://twitter.com/intent/tweet?url="+ url +"&text="+ title +"&via=seth_sp @dacfo @owenmundy&hashtags=ACS,census,data,maps,marginoferror",
			go = "https://plus.google.com/share?url="+ url;

		$(".share_link_fb").attr("href",fb).attr("title",title);
		$(".share_link_tw").attr("href",tw).attr("title",title);
		$(".share_link_go").attr("href",go).attr("title",title);
	}




	return {
		setMsaMenu: function(msa) {
			setMsaMenu(msa);
		},
		newMsaMenu: function(msas) {
			newMsaMenu(msas);
		},
		updateShareLinks: function(title,url) {
			updateShareLinks(title,url);
		},
		newScenarioMenu: function(msa, scenario, data) {
			newScenarioMenu(msa, scenario, data);
		},
		addListeners: addListeners,
		updateDownloadLink: function(msa) {
			updateDownloadLink(msa);
		},
		updateDownloadLinkMeta:updateDownloadLinkMeta
	};

})();
