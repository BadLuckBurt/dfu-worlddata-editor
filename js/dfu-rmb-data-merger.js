let dfuRMBDataMerger = {
	rmbJSON: null,
	fileInput: null,
	loadButton: null,
	merged: false,
	mergeButton: null,
	downloadButton: null,
	groundTilesCheck: null,
	automapCheck: null,
	misc3dCheck: null,
	miscFlatCheck: null,
	init: function() {
		this.fileInput = document.getElementById('json-upload-file');
		this.loadButton = document.getElementById('json-upload-button');
		this.loadButton.addEventListener('click', function() {
			this.loadJSON();
		}.bind(this));

		this.mergeButton = document.getElementById('merge-rmb-data');
		this.mergeButton.addEventListener('click', function() {
			this.mergeData(false);
		}.bind(this));

		this.downloadButton = document.getElementById('download-rmb-data');
		this.downloadButton.addEventListener('click', function() {
			this.mergeData(true);
		}.bind(this));

		this.groundTilesCheck = document.getElementById('rmb-ground-tiles');
		this.groundTilesCheck.addEventListener('click', function(el) {
			this.handleCheckClick(el);
		}.bind(this, this.groundTilesCheck));

		this.groundSceneryCheck = document.getElementById('rmb-ground-scenery');
		this.groundSceneryCheck.addEventListener('click', function(el) {
			this.handleCheckClick(el);
		}.bind(this, this.groundSceneryCheck));

		this.automapCheck = document.getElementById('rmb-automap-data');
		this.automapCheck.addEventListener('click', function(el) {
			this.handleCheckClick(el);
		}.bind(this, this.automapCheck));

		this.misc3dCheck = document.getElementById('rmb-misc-3d-object-records');
		this.misc3dCheck.addEventListener('click', function(el) {
			this.handleCheckClick(el);
		}.bind(this, this.misc3dCheck));

		this.miscFlatCheck = document.getElementById('rmb-misc-flat-object-records');
		this.miscFlatCheck.addEventListener('click', function(el) {
			this.handleCheckClick(el);
		}.bind(this, this.miscFlatCheck));
	},
	handleCheckClick: function(el) {
		let elID = el.id + '-replacement';
		document.getElementById(elID).disabled = !el.checked;
		return true;
	},
	mergeData: function(download) {
		let groundTiles, automapData, misc3dObjectRecords, miscFlatObjectRecords;
		if(this.rmbJSON == null) {
			alert('Please upload a JSON file first');
			return false;
		}
		let fileInput;
		let check = document.getElementById('rmb-ground-tiles').checked;
		if(check) {
			fileInput = document.getElementById('rmb-ground-tiles-replacement');
			if(fileInput.files.length == 0) {
				alert('Please add GroundTiles data or uncheck the GroundTiles option');
				return false;
			} else {
				this.readFile(fileInput, "setGroundTilesData");
			}
		}
		check = document.getElementById('rmb-ground-scenery').checked;
		if(check) {
			fileInput = document.getElementById('rmb-ground-scenery-replacement');
			if(fileInput.files.length == 0) {
				alert('Please add GroundTiles data or uncheck the GroundScenery option');
				return false;
			} else {
				this.readFile(fileInput, "setGroundSceneryData");
			}
		}
		check = document.getElementById('rmb-automap-data').checked;
		if(check) {
			fileInput = document.getElementById('rmb-automap-data-replacement');
			if(fileInput.files.length == 0) {
				alert('Please add AutoMap data or uncheck the AutoMap option');
				return false;
			} else {
				this.readFile(fileInput, "setAutomapData");
			}
		}
		check = document.getElementById('rmb-misc-3d-object-records').checked;
		if(check) {
			fileInput = document.getElementById('rmb-misc-3d-object-records-replacement');
			if(fileInput.files.length == 0) {
				alert('Please add Misc3dObjectRecords data or uncheck the Misc3dObjectRecords option');
				return false;
			} else {
				this.readFile(fileInput, "setMisc3dObjectRecordsData");
			}
		}
		check = document.getElementById('rmb-misc-flat-object-records').checked;
		if(check) {
			fileInput = document.getElementById('rmb-misc-flat-object-records-replacement');
			if(fileInput.files.length == 0) {
				alert('Please add MiscFlatObjectRecords data or uncheck the MiscFlatObjectRecords option');
				return false;
			} else {
				this.readFile(fileInput, "setMiscFlatObjectRecordsData");
			}
		}
		let text = JSON.stringify(this.rmbJSON, null, "\t");
		document.getElementById('dfu-rmb-data-merger-result').innerHTML = text;
		if(download == true) {
			saveFile(text, this.rmbJSON.Name + '.json');
		}
	},
	setMiscFlatObjectRecordsData: function(data) {
		let miscFlatObjectRecords = JSON.parse(data);
		this.rmbJSON.RmbBlock.MiscFlatObjectRecords = miscFlatObjectRecords.data;
		this.rmbJSON.NumMiscFlatObjectRecords = 0; //miscFlatObjectRecords.data.length;
	},
	setMisc3dObjectRecordsData: function(data) {
		let misc3dObjectRecords = JSON.parse(data);
		this.rmbJSON.RmbBlock.Misc3dObjectRecords = misc3dObjectRecords.data;
		this.rmbJSON.NumMisc3dObjectRecords = 0; //misc3dObjectRecords.data.length;
	},
	setGroundSceneryData: function(data) {
		let groundSceneryData = JSON.parse(data);
		this.rmbJSON.RmbBlock.FldHeader.GroundData.GroundScenery = groundSceneryData.data;
	},
	setGroundTilesData: function(data) {
		let groundTilesData = JSON.parse(data);
		this.rmbJSON.RmbBlock.FldHeader.GroundData.GroundTiles = groundTilesData.data;
	},
	setAutomapData: function(data) {
		let automapData = JSON.parse(data);
		this.rmbJSON.RmbBlock.FldHeader.AutoMapData = automapData.data;
	},
	readFile: function(input, targetFunction) {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			let file = input.files[0];
			if(file) {
				let fr = new FileReader();
				fr.onload = function(e) {
					let text = e.target.result;
					this[targetFunction](text);
				}.bind(this);
				fr.readAsText(file);
			}
		} else {
			alert('FileReader is not supported by your browser.');
		}
	},
	loadJSON: function () {
		event.preventDefault();
		event.stopPropagation();
		if(this.fileInput.files.length == 0) {
			alert('Please select a RDB JSON file to load');
			return false;
		}
		// Check for the various File API support.
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			let file = this.fileInput.files[0];
			if(file) {
				let fr = new FileReader();
				fr.onload = function(e) {
					let text = e.target.result;
					this.processJSON(text);
				}.bind(this);
				fr.readAsText(file);
			}
		} else {
			alert('FileReader is not supported by your browser.');
		}
		return false;
	},
	processJSON: function(rmb) {
		let rmbJSON = JSON.parse(rmb);
		this.rmbJSON = rmbJSON;
		document.getElementById('rmb-block-name').innerHTML = rmbJSON.Name;
	}
};

window.addEventListener('DOMContentLoaded', function() {
	dfuRMBDataMerger.init();
});