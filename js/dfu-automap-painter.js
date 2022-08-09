let automapPainter = {
	paintTypes: [
		{type: 12, name: 'guildhall'},
		{type: 15, name: 'temple'},
		{type: 1, name: 'alchemist'},
		{type: 3, name: 'armorer'},
		{type: 4, name: 'bank'},
		{type: 6, name: 'bookseller'},
		{type: 7, name: 'clothing store'},
		{type: 9, name: 'gem store'},
		{type: 10, name: 'general store'},
		{type: 11, name: 'library'},
		{type: 13, name: 'pawn shop'},
		{type: 14, name: 'weapon smith'},
		{type: 16, name: 'tavern'},
		{type: 2, name: 'house for sale'},
		{type: 5, name: 'town4'},
		{type: 8, name: 'furniture store'},
		{type: 17, name: 'palace'},
		{type: 18, name: 'house 1'},
		{type: 19, name: 'house 2'},
		{type: 20, name: 'house 3'},
		{type: 21, name: 'house 4'},
		{type: 22, name: 'house 5 (hedge)'},
		{type: 23, name: 'house 6'},
		{type: 24, name: 'town23'},
		{type: 25, name: 'ship'},
		{type: 117, name: 'special 1'},
		{type: 224, name: 'special 2'},
		{type: 250, name: 'special 3'},
		{type: 251, name: 'special 4'},
		{type: 0, name: 'blank'},
		{type: 'default', name: 'default?'}
	],
	rmbName: '',
	init: function() {
		this.paint = false;
		this.fileInput = document.getElementById('json-upload-file');
		this.loadButton = document.getElementById('json-upload-button');
		this.loadButton.addEventListener('click', function() {
			this.loadJSON();
		}.bind(this));
		this.currentPaintType = 0;
		this.currentPaintName = 'blank';
		this.gridControls = document.getElementById('grid-controls');
		this.gridControls.addEventListener('click', function(event) {
			if(event.target.classList.contains('paint-type')) {
				this.setPaintType(event.target.getAttribute('data-type'), event.target.title);
			}
		}.bind(this));
		this.createGridControls();
		this.grid = document.getElementById('grid');
		this.gridWrapper = this.grid.querySelector('.grid-wrapper');
		this.generateGridCells([]);
		this.grid.addEventListener('click', function(event) {
			//event.preventDefault();
			this.paintCell(event, true);
		}.bind(this));
		this.grid.addEventListener('mousedown',function(event) {
			//event.preventDefault();
			this.paint = true;
		}.bind(this));
		this.grid.addEventListener('mouseup', function(event) {
			//event.preventDefault();
			this.paint = false;
		}.bind(this));
		this.grid.addEventListener('mousemove', function(event) {
			if(this.paint) {
				this.paintCell(event, false);
			}
		}.bind(this));
		this.grid.addEventListener('contextmenu', function(event) {
			if(event.target.classList.contains('cell')) {
				event.preventDefault();
				this.setPaintType(event.target.getAttribute('data-type'), event.target.title);
				return false;
			}
			return false;
		}.bind(this));
		this.generateAutomapButton = document.getElementById('generate-automap');
		this.generateAutomapButton.addEventListener('click', function() {
			this.generateAutomap();
		}.bind(this));
		this.downloadAutomapButton = document.getElementById('download-automap');
		this.downloadAutomapButton.addEventListener('click', function () {
			this.downloadAutomap();
		}.bind(this));
		this.result = document.getElementById('dfu-automap-generator-result');
	},
	setPaintType: function(type, title) {
		let current = this.gridControls.querySelector('.color-' + this.currentPaintType);
		current.classList.remove('active');
		current = this.gridControls.querySelector('.color-' + type);
		current.classList.add('active');
		this.currentPaintType = type;
		this.currentPaintName = title;
	},
	paintCell: function(event, clicked) {
		if(event.target.classList.contains('cell')) {
			let cell = event.target;
			let currentType = cell.getAttribute('data-type');
			if(currentType == this.currentPaintType) {
				return false;
			}
			let colorClass = 'color-' + this.currentPaintType;
			cell.title = this.currentPaintName;
			cell.setAttribute('data-type', this.currentPaintType.toString());
			cell.classList.add(colorClass);
			colorClass = 'color-' + currentType;
			cell.classList.remove(colorClass);
		}
	},
	loadJSON: function() {
		event.preventDefault();
		event.stopPropagation();
		if(this.fileInput.files.length == 0) {
			alert('Please select a RMB JSON file to load');
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
	processJSON: function(rmb) {
		let rmbJSON = JSON.parse(rmb);
		this.rmbName = rmbJSON.Name;
		let automapData = rmbJSON.RmbBlock.FldHeader.AutoMapData;
		this.generateGridCells(automapData);
	},
	generateAutomap: function() {
		let result = this.getAutomapText();
		this.result.innerHTML = result;
	},
	downloadAutomap: function() {
		let result = this.getAutomapText();
		saveFile(result, this.rmbName + "_automap.json");
	},
	getAutomapText: function() {
		let automap = [];
		let tiles = this.gridWrapper.querySelectorAll('.cell');
		let result = "{data:[\n";
		let r = 1;
		for (let i = 0; i < tiles.length; i++) {
			if(r == 1) {
				result += "\t\t";
			}
			result += tiles[i].getAttribute('data-type').padStart(3,' ');
			if (i < tiles.length-1)
				result += ',';
			if (r++ == 64) {
				result += "\n";
				r = 1;
			}
		}
		result += "\t]}";
		return result;
	},
	createGridControls: function() {
		let df, el;
		df = document.createDocumentFragment();
		for(let i = 0; i < this.paintTypes.length; i++) {
			el = document.createElement('div');
			el.title = this.paintTypes[i].type.toString() + ': ' + this.paintTypes[i].name;
			el.setAttribute('data-type',this.paintTypes[i].type);
			el.classList.add('color-' + this.paintTypes[i].type);
			el.classList.add('paint-type');
			if(this.currentPaintType == this.paintTypes[i].type) {
				el.classList.add('active');
			}
			df.appendChild(el);
		}
		while(this.gridControls.firstElementChild) {
			this.gridControls.removeChild(this.gridControls.firstElementChild);
		}
		this.gridControls.appendChild(df);
	},
	generateGridCells: function(cellTypes) {
		let cell;
		let df = document.createDocumentFragment();
		let length = 64 * 64;
		for(let i = 0; i < length; i++) {
			cell = document.createElement('div');
			cell.classList.add('cell');
			if(cellTypes.length == length) {
				cell.classList.add('color-' + cellTypes[i]);
				cell.setAttribute('data-type', cellTypes[i]);
				cell.title = this.getPaintName(cellTypes[i]);
			} else {
				cell.classList.add('color-0');
				cell.setAttribute('data-type','0');
				cell.title = '0: blank';
			}
			df.appendChild(cell);
		}
		while(this.gridWrapper.firstElementChild) {
			this.gridWrapper.removeChild(this.gridWrapper.firstElementChild);
		}
		this.gridWrapper.appendChild(df);
	},
	getPaintName: function(type) {
		for(let i = 0; i < this.paintTypes.length; i++) {
			if(this.paintTypes[i].type == type) {
				return type + ': ' + this.paintTypes[i].name;
			}
		}
		return 'error: paint type not found';
	}
};

function switchGridSize(half) {
	let el = document.getElementById('grid');
	if(half) {
		el.classList.add('half');
	} else {
		el.classList.remove('half');
	}
}

function toggleRevealAll() {
	document.getElementById('grid').classList.toggle('reveal-all');
}

window.addEventListener('DOMContentLoaded', function() {
	automapPainter.init();
});