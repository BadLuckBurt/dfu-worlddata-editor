const TILED_FLIPPED_HORIZONTALLY_FLAG = 0x80000000; //2147483648
const TILED_FLIPPED_VERTICALLY_FLAG   = 0x40000000; //1073741824
const TILED_FLIPPED_DIAGONALLY_FLAG   = 0x20000000; //536870912

let rmbBuilder = {
	sceneryTextureSet: 'temperate_flora',
	init: function() {

		this.fileInput = document.getElementById('json-upload-file');
		this.grid = document.getElementById('grid').querySelector('.grid-wrapper');
		this.tiles = null;

		this.loadButton = document.getElementById('json-upload-button');
		this.loadButton.addEventListener('click', function() {
			this.loadJSON();
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
					console.log(text);
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
		//let src = 'images/RMB/' + rmbJSON.Name + '.png';
		//this.overlay.addEventListener('error',function() {
			//this.style.display = 'none';
		//});
		//this.overlay.addEventListener('load', function() {
			//this.style.display = 'block';
		//});
		//this.overlay.src = src;
		//Store the tiles in this object for easy access
		this.tiles = rmbJSON.RmbBlock.FldHeader.GroundData.GroundTiles;
		//this.scenery = rmbJSON.RmbBlock.FldHeader.GroundData.GroundScenery;
		this.viewGroundTiles();
		//this.viewScenery();
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
			//let textureSet = this.textureSelect.value;
			//if (textureSet == '') {
				textureSet = 'temperate';
				//this.textureSelect.value = textureSet;
			//}
			//this.sceneryTextureSet = textureSet + '_flora';
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
			//let template = this.getTiledTemplate();

			//let text = JSON.stringify(template, null, "\t");
			//this.tiledText = text;
			//document.getElementById('dfu-terrain-viewer-result').innerHTML = text;
		}
	},
}

function switchGridSize(size) {
	document.getElementById('grid').className = size;
}

window.addEventListener('DOMContentLoaded', function() {
	rmbBuilder.init();
});