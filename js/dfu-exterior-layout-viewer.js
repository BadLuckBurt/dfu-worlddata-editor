var layoutRenderer = {
	init: function() {

		this.fileInput = document.getElementById('json-upload-file');
		this.loadFileButton = document.getElementById('json-upload-button');
		this.loadFileButton.addEventListener('click', this.loadJSON.bind(this));

		this.exterior.rotationDivider = 5.68888888888889;
		this.exterior.gridWrapper = document.getElementById('exterior-grid');

		this.interior.rotationDivider = 5.68888888888889;
		this.interior.gridWrapper = document.getElementById('interior-grid');

		this.interior.layerSelect = document.getElementById('interior-grid-layer');
		this.interior.layerSelect.addEventListener('change',function() {
			var index = parseInt(this.layerSelect.value,10);
			this.changeLayer(index);
		}.bind(this.interior));
	},
	//Loads the JSON file the user has specified
	loadJSON: function () {
		event.preventDefault();
		event.stopPropagation();
		if(this.fileInput.files.length == 0) {
			alert('Please select a RMB JSON file to load');
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
		this.exterior.render(rmbJSON.RmbBlock.SubRecords, true);
	},
	render: function(records, renderInterior) {
		this.exterior.render(records, renderInterior);
	},
	exterior: {
		realWidth: 4096,
		realHeight: 4096,
		width: 512,
		height: 512,
		render: function(records, renderInterior) {
			this.scale = this.realWidth / this.width;

			var exterior, x, z, width, length, yRotation, modelId, div, layer, r, g, b, id;

			while(this.gridWrapper.firstElementChild) {
				this.gridWrapper.removeChild(this.gridWrapper.firstElementChild);
			}

			layer = document.createElement('div');
			layer.className = 'layer';

			for (var i = 0; i < records.length; i++) {
				exterior = records[i].Exterior;

				r = 16 * exterior.Block3dObjectRecords[0].ObjectType;
				g = r;
				b = r;

				div = document.createElement('div');
				id = records[i].XPos + '-' + records[i].ZPos;
				modelId = exterior.Block3dObjectRecords[0].ModelId;
				x = Math.floor((records[i].XPos - modelSizes[modelId].center.X) / this.scale);
				z = Math.floor((records[i].ZPos - modelSizes[modelId].center.Z) / this.scale);
				yRotation = Math.ceil(records[i].YRotation / this.rotationDivider);

				div.id = 'exterior-' + id;
				div.title = 'Index: ' + i + ' - modelID: ' + modelId;
				let descriptionIndex = modelIds.indexOf('' + modelId);
				if(descriptionIndex > -1) {
					div.title += ' | ' + modelNames[descriptionIndex];
				}
				//div.style.top = (this.height - z).toString() + 'px';
				div.style.top = z.toString() + 'px';
				div.style.left = x.toString() + 'px';
				div.style.transform = 'rotate(' + yRotation.toString() + 'deg)';
				div.style.backgroundColor = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
				width = Math.floor(modelSizes[modelId].size.X / this.scale);
				length = Math.floor(modelSizes[modelId].size.Z / this.scale);
				div.style.width = width.toString() + 'px';
				div.style.height = length.toString() + 'px';

				if(renderInterior) {
					div.addEventListener('click', function(id) {
						this.swapInterior(id);
					}.bind(layoutRenderer.interior, id));
					layoutRenderer.interior.render(id, records[i].Interior);
				}

				layer.appendChild(div);
			}
			this.gridWrapper.appendChild(layer);
			this.gridWrapper.style.width = this.width + 'px';
			this.gridWrapper.style.height = this.height + 'px';
			if(renderInterior) {
				layoutRenderer.interior.swapInterior(id);
			}
		}

	},
	interior: {
		currentInterior: '0',
		layers: [
			{
				id: 'first_floor',
				name: 'First floor',
				layoutYMax: 0,
				layoutYMin: -192,
				objectYMin: 0,
				objectYMax: 128
			},
			{
				id: 'second_floor',
				name: 'Second floor',
				layoutYMax: -192,
				layoutYMin: -321,
				objectYMin: 128,
				objectYMax: 256
			},
			{
				id: 'third_floor',
				name: 'Third floor',
				layoutYMax: -321,
				layoutYMin: -999,
				objectYMin: 256,
				objectYMax: 512
			}
		],
		realWidth: 1024,
		realHeight: 1024,
		width: 512,
		height: 512,
		changeLayer: function(index) {
			if(this.currentInterior === '0') {
				alert('Please select an interior first');
				return false;
			}
			var id = 'interior-' + this.currentInterior;
			var gridLayers = document.querySelectorAll('#' + id + ' .layer');
			for(var i = 0; i < gridLayers.length; i++) {
				if(i == index) {
					gridLayers[i].style.display = 'block';
				} else {
					gridLayers[i].style.display = 'none';
				}
			}
		},
		swapInterior: function(id) {
			var checkId = 'interior-' + id;
			var layerCount = 0;
			var interiors = this.gridWrapper.querySelectorAll('.grid');
			for(var i = 0; i < interiors.length; i++) {
				if(interiors[i].id == checkId) {
					interiors[i].style.display = 'block';
					layerCount = interiors[i].childElementCount;
					this.currentInterior = id;
				} else {
					interiors[i].style.display = 'none';
				}
			}
			this.refreshLayers(layerCount);
			this.changeLayer(0);
		},
		refreshLayers: function(layerCount) {
			var df, option;
			df = document.createDocumentFragment();
			for(var i = 0; i < layerCount; i++) {
				option = document.createElement('option');
				option.value = i;
				option.innerHTML = this.layers[i].name;
				df.appendChild(option);
			}
			while(this.layerSelect.firstElementChild) {
				this.layerSelect.removeChild(this.layerSelect.firstElementChild);
			}
			this.layerSelect.appendChild(df);

		},
		render: function(exteriorId, interior) {
			this.scale = this.realWidth / this.width;

			var x, z, y, width, length, yRotation, modelId, div, span, r, g, b;
			var layer, layers, layerIndex, wrapper;
			wrapper = document.createElement('div');
			wrapper.id = 'interior-' + exteriorId;
			wrapper.className = 'grid';
			wrapper.style.display = 'none';
			layers = [];
			for(var i = 0; i < interior.Block3dObjectRecords.length; i++) {
				y = interior.Block3dObjectRecords[i].YPos;
				//Objects
				if(interior.Block3dObjectRecords[i].ObjectType != 13) {
					if(y >= this.layers[0].objectYMin && y <= this.layers[0].objectYMax) {
						layerIndex = 0;
					} else if(y >= this.layers[1].objectYMin && y <= this.layers[1].objectYMax) {
						layerIndex = 1;
					} if(y >= this.layers[2].objectYMin && y <= this.layers[2].objectYMax) {
						layerIndex = 2;
					}
					//Interior structure models
				} else {

					if(y <= this.layers[0].layoutYMax && y > this.layers[0].layoutYMin) {
						layerIndex = 0;
					} else if(y <= this.layers[1].layoutYMax && y > this.layers[1].layoutYMin) {
						layerIndex = 1;
					} else if(y <= this.layers[2].layoutYMax && y > this.layers[2].layoutYMin) {
						layerIndex = 2;
					}
				}

				if(!layers[layerIndex]) {
					layers[layerIndex] = document.createElement('div');
					layers[layerIndex].className = 'layer';
					layers[layerIndex].id = 'layer-' + exteriorId + '-' + layerIndex;
				}

				modelId = interior.Block3dObjectRecords[i].ModelId;

				div = document.createElement('div');
				div.title = modelId;
				let descriptionIndex = modelIds.indexOf('' + modelId);
				if(descriptionIndex > -1) {
					div.title += ' | ' + modelNames[descriptionIndex];
				}
				div.setAttribute('data-y',interior.Block3dObjectRecords[i].YPos);

				var top, left;
				x = interior.Block3dObjectRecords[i].XPos;
				z = interior.Block3dObjectRecords[i].ZPos;
				top = Math.floor((this.height / 2) - ((z + modelSizes[modelId].center.Z) / this.scale));
				left = Math.floor((this.width / 2) - ((x + modelSizes[modelId].center.X) / this.scale));

				div.style.top = top.toString() + 'px';
				div.style.left = left.toString() + 'px';

				yRotation = Math.ceil(interior.Block3dObjectRecords[i].YRotation / this.rotationDivider);

				div.style.transform = 'rotate(' + yRotation.toString() + 'deg)';

				r = 16 * interior.Block3dObjectRecords[i].ObjectType;
				g = r;
				b = g;

				div.style.backgroundColor = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';

				width = Math.floor(Math.ceil(modelSizes[modelId].size.X) / this.scale);
				length = Math.floor(Math.ceil(modelSizes[modelId].size.Z) / this.scale);
				div.style.width = width.toString() + 'px';
				div.style.height = length.toString() + 'px';

				span = document.createElement('span');
				span.innerHTML = modelId;
				//div.appendChild(span);

				div.addEventListener('click', function() {
					var clipboard = document.getElementById('clipboard');
					clipboard.innerHTML = this.title;

					clipboard.select();
					clipboard.setSelectionRange(0, 99999); /*For mobile devices*/

					document.execCommand("copy");
				});
				layers[layerIndex].appendChild(div);
			}

			for(var index = 0; index < layers.length; index++) {
				wrapper.appendChild(layers[index]);
			}
			this.gridWrapper.appendChild(wrapper);
			this.gridWrapper.style.width = this.width + 'px';
			this.gridWrapper.style.height = this.height + 'px';
		}
	}
};

window.addEventListener('DOMContentLoaded',function() {
	layoutRenderer.init();
});