let dfuRMBDataMerger = {
	rmbJSON: null,
	fileInput: null,
	loadButton: null,
	mergeButton: null,
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
			this.mergeData();
		}.bind(this));

		this.groundTilesCheck = document.getElementById('rmb-ground-tiles');
		this.groundTilesCheck.addEventListener('click', function(el) {
			this.handleCheckClick(el);
		}.bind(this, this.groundTilesCheck));

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
		let textareaID = el.id + '-replacement';
		if(el.checked) {
			document.getElementById(textareaID).disabled = false;
		} else {
			document.getElementById(textareaID).disabled = true;
		}
		return true;
	},
	mergeData: function() {
		let groundTiles, automapData, misc3dObjectRecords, miscFlatObjectRecords;
		if(this.rmbJSON == null) {
			alert('Please upload a JSON file first');
			return false;
		}
		let check = document.getElementById('rmb-ground-tiles').checked;
		if(check) {
			groundTiles = document.getElementById('rmb-ground-tiles-replacement').value;
			if(groundTiles == '') {
				alert('Please add GroundTiles data or uncheck the GroundTiles option');
				return false;
			} else {
				groundTiles = '{"data":[' + groundTiles.replaceAll("'",'"') + ']}';
				groundTiles = JSON.parse(groundTiles);
				this.rmbJSON.RmbBlock.FldHeader.GroundData.GroundTiles = groundTiles.data;
			}
		}
		check = document.getElementById('rmb-automap-data').checked;
		if(check) {
			automapData = document.getElementById('rmb-automap-data-replacement').value;
			if(automapData == '') {
				alert('Please add AutoMap data or uncheck the AutoMap option');
				return false;
			} else {
				automapData = '{"data":[' + automapData.replaceAll("'",'"') + ']}';
				automapData = JSON.parse(automapData);
				this.rmbJSON.RmbBlock.FldHeader.AutoMapData = automapData.data;
			}
		}
		check = document.getElementById('rmb-misc-3d-object-records').checked;
		if(check) {
			misc3dObjectRecords = document.getElementById('rmb-misc-3d-object-records-replacement').value;
			if(misc3dObjectRecords == '') {
				alert('Please add Misc3dObjectRecords data or uncheck the Misc3dObjectRecords option');
				return false;
			} else {
				misc3dObjectRecords = '{"data":[' + misc3dObjectRecords + ']}';
				misc3dObjectRecords = JSON.parse(misc3dObjectRecords);

				this.rmbJSON.RmbBlock.Misc3dObjectRecords = misc3dObjectRecords.data;
				this.rmbJSON.NumMisc3dObjectRecords = misc3dObjectRecords.data.length;
			}
		}
		check = document.getElementById('rmb-misc-flat-object-records').checked;
		if(check) {
			miscFlatObjectRecords = document.getElementById('rmb-misc-flat-object-records-replacement').value;
			if(miscFlatObjectRecords == '') {
				alert('Please add MiscFlatObjectRecords data or uncheck the MiscFlatObjectRecords option');
				return false;
			} else {
				miscFlatObjectRecords = '{"data":[' + miscFlatObjectRecords + ']}';
				miscFlatObjectRecords = JSON.parse(miscFlatObjectRecords);
				this.rmbJSON.RmbBlock.MiscFlatObjectRecords = miscFlatObjectRecords.data;
				this.rmbJSON.NumMiscFlatObjectRecords = miscFlatObjectRecords.data.length;
			}
		}
		let text = JSON.stringify(this.rmbJSON, null, "\t");
		document.getElementById('dfu-rmb-data-merger-result').innerHTML = text;
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