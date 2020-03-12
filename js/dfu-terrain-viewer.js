const TILED_FLIPPED_HORIZONTALLY_FLAG = 0x80000000; //2147483648
const TILED_FLIPPED_VERTICALLY_FLAG   = 0x40000000; //1073741824
const TILED_FLIPPED_DIAGONALLY_FLAG   = 0x20000000; //536870912

var terrainViewer = {
	init: function() {
		this.overlay = document.getElementById('automap-overlay');
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
			var file = this.fileInput.files[0];
			if(file) {
				var fr = new FileReader();
				fr.onload = function(e) {
					var text = e.target.result;
					this.processJSON(text);
				}.bind(this);
				fr.readAsText(file);
			}
		} else {
			alert('FileReader is not supported by your browser.');
		}
	},
	processJSON: function(rmb) {
		var rmbJSON = JSON.parse(rmb);
		var src = 'images/RMB/' + rmbJSON.Name + '.png';
		this.overlay.addEventListener('error',function() {
			this.style.display = 'none';
		});
		this.overlay.addEventListener('load', function() {
			this.style.display = 'block';
		});
		this.overlay.src = src;
		//Store the tiles in this object for easy access
		this.tiles = rmbJSON.RmbBlock.FldHeader.GroundData.GroundTiles;
		this.viewGroundTiles();
	},
	clearGroundTiles: function() {
		while(this.grid.firstElementChild) {
			this.grid.removeChild(this.grid.firstElementChild);
		}
		return true;
	},
	viewGroundTiles: function() {
		if(this.clearGroundTiles()) {
			var df = document.createDocumentFragment();
			var img, src, transform;
			var index;
			var textureSet = this.textureSelect.value;
			if (textureSet == '') {
				textureSet = 'temperate';
				this.textureSelect.value = textureSet;
			}
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
			var template = this.getTiledTemplate();
			console.log(template);
			var text = JSON.stringify(template, null, "\t");
			document.getElementById('dfu-terrain-viewer-result').innerHTML = text;
		}
	},
	//Returns a template that matches Tiled's JSON format
	getTiledTemplate: function() {
		var template = { "height":16,
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
		var data = [];
		var id;
		//Convert the DFU values to Tiled's values
		for(var i = 0; i < this.tiles.length; i++) {
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
		template.tilesets[0].source = '..\/' + this.textureSelect.value + '.tsx';
		return template;
	}
};

function switchGridSize(size) {
	document.getElementById('grid').className = size;
}

function toggleAutomap() {
	var el = document.getElementById('automap-overlay');
	if(el.style.display == 'block') {
		el.style.display = 'none';
	} else {
		el.style.display = 'block';
	}
}

window.addEventListener('DOMContentLoaded', function() {
	terrainViewer.init();
});