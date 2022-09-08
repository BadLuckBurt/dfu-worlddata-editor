const TILED_FLIPPED_HORIZONTALLY_FLAG = 0x80000000; //2147483648
const TILED_FLIPPED_VERTICALLY_FLAG   = 0x40000000; //1073741824
const TILED_FLIPPED_DIAGONALLY_FLAG   = 0x20000000; //536870912

let terrainViewer = {
	sceneryIndex: 0,
	sceneryTextureSet: 'temperate_flora',
	tiledText: '',
	sceneryText: '',
	filename: '',
	init: function() {
		this.overlay = document.getElementById('automap-overlay');

		this.sceneryOverlay = document.getElementById('scenery-overlay');
		this.sceneryOverlay.addEventListener('click', function(evt) {
			evt.stopPropagation();
			evt.preventDefault();
			let img = evt.target;
			let index = parseInt(img.title,10);
			if(this.sceneryIndex > 0) {
				img.src = 'images/terrain/' + this.sceneryTextureSet + '/' + this.sceneryIndex + '-0.png';
				this.scenery[index].TextureRecord = this.sceneryIndex;
			} else {
				img.src = 'images/terrain/none.png';
				this.scenery[index].TextureRecord = -1;
			}

		}.bind(this));
		this.scenery = null;

		this.sceneryItemsEl = document.getElementById('scenery-items');
		this.sceneryItemsEl.addEventListener('click', function(evt) {
			evt.stopPropagation();
			evt.preventDefault();

			this.sceneryIndex = parseInt(evt.target.title,10);
			let sceneryItems = this.sceneryItemsEl.querySelectorAll('img');
			for(let i = 0; i < sceneryItems.length; i++) {
				sceneryItems[i].classList.remove('selected');
			}
			evt.target.classList.add('selected');
		}.bind(this));

		this.fileInput = document.getElementById('json-upload-file');
		this.grid = document.getElementById('grid').querySelector('.grid-wrapper');
		this.tiles = null;

		this.loadButton = document.getElementById('json-upload-button');
		this.loadButton.addEventListener('click', function() {
			this.loadJSON();
		}.bind(this));

		this.textureSelect = document.getElementById('texture-set-select');
		this.textureSelect.addEventListener('change', function() {
			this.viewGroundTiles();
		}.bind(this));

		this.downloadTiledButton = document.getElementById('dfu-download-tiled-data');
		this.downloadTiledButton.addEventListener('click', function() {
			this.downloadTiledData();
		}.bind(this));

		this.downloadSceneryButton = document.getElementById('dfu-download-scenery-data');
		this.downloadSceneryButton.addEventListener('click', function() {
			this.downloadSceneryData();
		}.bind(this));
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
				this.filename = file.name.replace('.json','');
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
		//console.log(rmbJSON);
		let src = 'images/RMB/' + rmbJSON.Name + '.png';
		this.overlay.addEventListener('error',function() {
			this.style.display = 'none';
		});
		this.overlay.addEventListener('load', function() {
			this.style.display = 'block';
		});
		this.overlay.src = src;
		//Store the tiles in this object for easy access
		this.tiles = rmbJSON.RmbBlock.FldHeader.GroundData.GroundTiles;
		this.scenery = rmbJSON.RmbBlock.FldHeader.GroundData.GroundScenery;
		this.viewGroundTiles();
		this.viewScenery();
	},
	clearGroundTiles: function() {
		while(this.grid.firstElementChild) {
			this.grid.removeChild(this.grid.firstElementChild);
		}
		return true;
	},
	viewGroundTiles: function() {
		if(this.clearGroundTiles()) {
			let df = document.createDocumentFragment();
			let img, src, transform;
			let index;
			let textureSet = this.textureSelect.value;
			if (textureSet == '') {
				textureSet = 'temperate';
				this.textureSelect.value = textureSet;
			}
			this.sceneryTextureSet = textureSet + '_flora';
			for (index = 0; index < this.tiles.length; index++) {
				img = document.createElement('img');
				src = 'images/terrain/' + textureSet + '/' + this.tiles[index].TextureRecord.toString() + '-0.png';
				img.src = src;
				transform = '';
				if (this.tiles[index].IsRotated && this.tiles[index].IsFlipped) {
					transform = 'rotate(90deg)';
				} else if (this.tiles[index].IsRotated) {
					transform = 'rotate(-90deg)';
				} else if (this.tiles[index].IsFlipped) {
					transform = 'rotate(180deg)';
					//transform += ' transform: scaleX(-1);';
				}
				img.style.transform = transform;
				df.appendChild(img);
			}
			this.grid.appendChild(df);
			let template = this.getTiledTemplate();

			let text = JSON.stringify(template, null, "\t");
			this.tiledText = text;
			//document.getElementById('dfu-terrain-viewer-result').innerHTML = text;
		}
	},
	downloadTiledData: function() {
		saveFile(this.tiledText, this.filename + '_tiles.json');
	},
	downloadSceneryData: function() {
		let data = {data: this.scenery};
		let sceneryText = JSON.stringify(data, null, "\t");
		saveFile(sceneryText, this.filename + '_scenery.json');
	},
	clearScenery: function() {
		while(this.sceneryOverlay.firstElementChild) {
			this.sceneryOverlay.removeChild(this.sceneryOverlay.firstElementChild);
		}
		return true;
	},
	viewScenery: function() {
		if(this.clearScenery()) {
			this.generateSceneryItems();
			let df, img;
			df = document.createDocumentFragment();
			let index = 0;
			for(let y = 0; y < 16; y++) {
				for(let x = 0; x < 16; x++) {
					index = (y * 16) + x;
					img = document.createElement('img');
					img.title = index.toString();
					if(this.scenery[index].TextureRecord > 0) {
						img.src = 'images/terrain/' + this.sceneryTextureSet + '/' + this.scenery[index].TextureRecord + '-0.png';
					} else {
						img.src = 'images/terrain/none.png';
					}
					df.appendChild(img);
				}
			}
			this.sceneryOverlay.appendChild(df);
		}
	},
	generateSceneryItems: function() {
		let df, img;
		df = document.createDocumentFragment();
		for(let i = 0; i < 32; i++) {
			img = document.createElement('img');
			img.title = i.toString();
			img.src = 'images/terrain/' + this.sceneryTextureSet + '/' + i + '-0.png';
			df.appendChild(img);
		}
		this.sceneryItemsEl.replaceChildren(df);
	},
	//Returns a template that matches Tiled's JSON format
	getTiledTemplate: function() {
		let template = { "height":16,
			"infinite":false,
			"layers":[
				{
					"data":null,
					"height":16,
					"id":1,
					"name":"terrain",
					"opacity":1,
					"type":"tilelayer",
					"visible":true,
					"width":16,
					"x":0,
					"y":0
				}],
			"nextlayerid":43,
			"nextobjectid":1,
			"orientation":"orthogonal",
			"renderorder":"left-down",
			"tiledversion":"1.2.5",
			"tileheight":64,
			"tilesets":[
				{
					"firstgid":1,
					"source": null
				}],
			"tilewidth":64,
			"type":"map",
			"version":1.2,
			"width":16
		};
		let data = [];
		let id;
		//Convert the DFU values to Tiled's values
		for(let i = 0; i < this.tiles.length; i++) {
			id = this.tiles[i].TextureRecord + 1;
			if(this.tiles[i].IsFlipped && this.tiles[i].IsRotated) {
				//console.log('Flipped and rotated id ' + id);
				id = id + (TILED_FLIPPED_HORIZONTALLY_FLAG + TILED_FLIPPED_DIAGONALLY_FLAG);
				//console.log(id);
			} else if(this.tiles[i].IsFlipped) {
				//console.log('Flipped id ' + id);
				id = id + (TILED_FLIPPED_HORIZONTALLY_FLAG + TILED_FLIPPED_VERTICALLY_FLAG);
				//console.log(id);
			} else if(this.tiles[i].IsRotated) {
				//console.log('Rotated id ' + id);
				id = id + (TILED_FLIPPED_HORIZONTALLY_FLAG - TILED_FLIPPED_DIAGONALLY_FLAG);
				//console.log(id);
			}
			data[i] = parseInt(id,10);
		}
		template.layers[0].data = data;
		template.tilesets[0].source = '..\/blb-dfu-tiled\/' + this.textureSelect.value + '.tsx';
		return template;
	}
};

function switchGridSize(size) {
	document.getElementById('grid').className = 'grid ' + size;
}

function toggleAutomap() {
	let el = document.getElementById('automap-overlay');
	if(el.style.display == 'block') {
		el.style.display = 'none';
	} else {
		el.style.display = 'block';
	}
}

window.addEventListener('DOMContentLoaded', function() {
	terrainViewer.init();
});