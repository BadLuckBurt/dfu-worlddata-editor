let dfuLocationBuildingStripper = {
	buildingTypes: null,
	fileInput: null,
	loadButton: null,
	stripButton: null,
	selectAllInput: null,
	locationJSON: null,
	init: function() {
		this.buildingTypes = buildingTypes;
		this.fileInput = document.getElementById('json-upload-file');

		this.loadButton = document.getElementById('json-upload-button');
		this.loadButton.addEventListener('click', function() {
			this.loadJSON();
		}.bind(this));

		this.stripButton = document.getElementById('strip-buildings');
		this.stripButton.addEventListener('click', function() {
			this.stripBuildings();
		}.bind(this));

		this.selectAllInput = document.getElementById('select-all-buildings');
		this.selectAllInput.addEventListener('click',function() {
			let inputs = document.querySelectorAll('#dfu-building-type-selection input');
			let checked = this.selectAllInput.checked;
			for(let i = 0; i < inputs.length; i++) {
				inputs[i].checked = checked;
			}
		}.bind(this));

		this.generateBuildingTypeInputs();
	},
	generateBuildingTypeInputs: function() {
		let df, el, label, input;
		df = document.createDocumentFragment();
		for(let buildingType in this.buildingTypes) {
			el = this.createEl('row');
			label = this.createLabel(this.buildingTypes[buildingType].type);
			label.htmlFor = 'input_' + this.buildingTypes[buildingType].type;
			input = document.createElement('input');
			input.type = 'checkbox';
			input.value = this.buildingTypes[buildingType].type;
			input.id = 'input_' + this.buildingTypes[buildingType].type;
			input.name = 'input_' + this.buildingTypes[buildingType].type;
			el.appendChild(input);
			el.appendChild(label);
			df.appendChild(el);
		}
		document.getElementById('dfu-building-type-selection').replaceChildren(df);
	},
	loadJSON: function() {
		event.preventDefault();
		event.stopPropagation();
		//No file selected
		if(this.fileInput.files.length == 0) {
			alert('Please select a location JSON file to load');
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
	},
	processJSON: function(location) {
		this.locationJSON = JSON.parse(location);

	},
	stripBuildings: function() {
		let inputs = document.querySelectorAll('#dfu-building-type-selection input:checked');
		if(inputs.length == 0) {
			alert('No BuildingTypes selected, nothing will be removed');
		}
		let values = [];
		let buildings = [];
		let i;
		for(i = 0; i < inputs.length; i++) {
			values[values.length] =inputs[i].value;
		}
		for(i = 0; i < this.locationJSON.Exterior.Buildings.length; i++) {
			if(values.indexOf(this.locationJSON.Exterior.Buildings[i].BuildingType) == -1) {
				buildings[buildings.length] = this.locationJSON.Exterior.Buildings[i];
			}
		}
		this.locationJSON.Exterior.BuildingCount = buildings.length;
		this.locationJSON.Exterior.Buildings = buildings;

		let text = JSON.stringify(this.locationJSON, null, "\t");
		document.getElementById('dfu-location-building-stripper-result').innerHTML = text;
	},
	createEl: function(className) {
		let el = document.createElement('div');
		el.className = className;
		return el;
	},
	createLabel: function(text) {
		let el = document.createElement('label');
		el.innerHTML = text;
		return el;
	}
}

window.addEventListener('DOMContentLoaded', function() {
	dfuLocationBuildingStripper.init();
});