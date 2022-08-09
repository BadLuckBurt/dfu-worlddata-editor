let dfuShowcaseGenerator = {
	init: function() {
		this.modelRangesCount = 0;
		this.textureArchivesCount = 0;

		this.modelRangesWrapper = document.getElementById('model-ranges-wrapper');
		this.textureArchivesWrapper = document.getElementById('texture-archives-wrapper');
		this.downloadLinksList = document.getElementById('download-links');

		this.addModelRangeButton = document.getElementById('add-model-range');
		this.addModelRangeButton.addEventListener('click', function() {
			this.addModelRange();
		}.bind(this));

		this.addTextureArchiveButton = document.getElementById('add-texture-archive');
		this.addTextureArchiveButton.addEventListener('click', function() {
			this.addTextureArchive();
		}.bind(this));

		this.generateShowcaseButton = document.getElementById('generate-showcase-data');
		this.generateShowcaseButton.addEventListener('click', function() {
			this.generateShowcases();
		}.bind(this));
	},
	downloadJSON: function(showcaseType, index) {
		let jsonTemplate = this.getJSONTemplate();
		let showcaseData = this.generateJSONData(showcaseType, index);
		let fileName;
		if(showcaseType == 'model-range') {
			fileName = this.modelRanges[index].filename;
			jsonTemplate.RmbBlock.Misc3dObjectRecords = showcaseData;
		} else if(showcaseType == 'texture-archive') {
			fileName = this.textureArchives[index].filename;
			if(this.textureArchives[index].isNature && 2 == 3) {
				jsonTemplate.RmbBlock.FldHeader.GroundData.GroundScenery = showcaseData;
			} else {
				jsonTemplate.RmbBlock.MiscFlatObjectRecords = showcaseData;
			}
		}
		jsonTemplate.Name = fileName.toUpperCase() + '.RMB';
		jsonTemplate.RmbBlock.FldHeader.Name = fileName.toUpperCase() + '.RMB';
		fileName = fileName.toUpperCase() + '.RMB.json';
		let data = JSON.stringify(jsonTemplate, null, "\t");
		saveFile(data, fileName);
	},
	generateDownloadLinks: function() {
		let li, a, i;
		let df = document.createDocumentFragment();

		for(i = 0; i < this.modelRanges.length; i++) {
			a = document.createElement('a');
			a.href = '#';
			a.innerText = 'Download ' + this.modelRanges[i].filename + '.RMB.json';
			a.addEventListener('click', function(showcaseType, index) {
				this.downloadJSON(showcaseType, index);
			}.bind(this, 'model-range', i));

			li = document.createElement('li');
			li.appendChild(a);
			df.appendChild(li);
		}
		for(i = 0; i < this.textureArchives.length; i++) {
			a = document.createElement('a');
			a.href = '#';
			a.innerText = 'Download ' + this.textureArchives[i].filename + '.RMB.json';
			a.addEventListener('click', function(showcaseType, index) {
				this.downloadJSON(showcaseType, index);
			}.bind(this, 'texture-archive', i));

			li = document.createElement('li');
			li.appendChild(a);
			df.appendChild(li);
		}
		this.downloadLinksList.replaceChildren(df);

	},
	generateShowcases: function() {
		if(this.processModelRanges() && this.processTextureArchives()) {
			this.generateDownloadLinks();
		} else {
			alert('OH NYO! An error has occurred :3');
		}
	},
	generateJSONData: function(showcaseType, index) {
		let gap = 6.4 * 40;
		let i;
		let row = 0, column = 0;
		let record, showcaseData = [];
		if(showcaseType == 'model-range') {
			for(i = this.modelRanges[index].start; i <= this.modelRanges[index].end; i++) {
				record = this.getMisc3dObjectRecord();
				record.ModelId = i.toString();
				record.ModelIdNum = i;

				record.XPos = gap * column;
				record.YPos = 0;
				record.ZPos = (gap * row) * -1;

				column += 1;
				if(column == 16) {
					column = 0;
					row += 1;
				}
				showcaseData[showcaseData.length] = record;
			}
		} else if(showcaseType == 'texture-archive') {
			if(textureArchives[index].isNature) {
				for(i = 0; i < this.textureArchives[index].recordCount; i++) {
					record = this.getGroundSceneryRecord();
					record.TextureRecord = i;
					showcaseData[showcaseData.length] = record;
				}
			} else {
				for (i = 0; i < this.textureArchives[index].recordCount; i++) {
					record = this.getMiscFlatObjectRecord();

					record.TextureArchive = this.textureArchives[index].archive;
					record.TextureRecord = i;

					record.XPos = gap * column;
					record.YPos = -5;
					record.ZPos = (gap * row) * -1;

					column += 1;
					if (column == 16) {
						column = 0;
						row += 1;
					}
					showcaseData[showcaseData.length] = record;
				}
			}
		}
		return showcaseData;
	},
	getMiscFlatObjectRecord: function() {
		return {
			Position: 0,
			XPos: 0,
			YPos: 0,
			ZPos: 0,
			TextureArchive: 0,
			TextureRecord: 0,
			FactionID: 0,
			Flags: 0
		};
	},
	getMisc3dObjectRecord: function() {
		return {
			ModelId: "",
			ModelIdNum: 0,
			ObjectType: 13,
			XPos: 0,
			YPos: 0,
			ZPos: 0,
			XRotation: 0,
			YRotation: 0,
			ZRotation: 0
		}
	},
	getGroundSceneryRecord: function() {
		return {
			TextureRecord: -1
		};
	},
	processModelRanges: function() {
		let rows = this.modelRangesWrapper.querySelectorAll('.model-range-row');
		this.modelRanges = [];
		if(rows) {
			for (let i = 0; i < rows.length; i++) {
				let inputs = rows[i].querySelectorAll('input');
				this.modelRanges[i] = {
					filename: inputs[2].value,
					start: parseInt(inputs[0].value, 10),
					end: parseInt(inputs[1].value, 10)
				};
			}
		}
		return true;
	},
	processTextureArchives: function() {
		let rows = this.textureArchivesWrapper.querySelectorAll('.texture-archive-row');
		this.textureArchives = [];
		if(rows) {
			for (let i = 0; i < rows.length; i++) {
				let inputs = rows[i].querySelectorAll('input');
				this.textureArchives[i] = {
					filename: inputs[3].value,
					archive: parseInt(inputs[0].value, 10),
					recordCount: parseInt(inputs[1].value, 10),
					isNature: inputs[2].checked
				};
			}
		}
		return true;
	},
	addModelRange: function() {
		this.modelRangesCount += 1;
		let labelsDF = document.createDocumentFragment();
		let fieldsDF = document.createDocumentFragment();

		let inputId = 'model-range-start-' + this.modelRangesCount;
		let label = this.createLabel('Start:', inputId);
		let labelCell = this.createFormCell(label, '');
		labelsDF.appendChild(labelCell);

		let input = this.createInput('text','','[0-9]+', inputId);
		let fieldCell = this.createFormCell(input, '');
		fieldsDF.appendChild(fieldCell);

		inputId = 'model-range-end-' + this.modelRangesCount;
		label = this.createLabel('End:', inputId);
		labelCell = this.createFormCell(label, '');
		labelsDF.appendChild(labelCell);

		input = this.createInput('text','','[0-9]+', inputId);
		fieldCell = this.createFormCell(input, '');
		fieldsDF.appendChild(fieldCell);

		labelCell = this.createFormCell(document.createElement('span'), '');
		labelsDF.appendChild(labelCell);
		fieldCell = this.createFormCell(document.createElement('span'), '');
		fieldsDF.appendChild(fieldCell);

		inputId = 'model-range-filename-' + this.modelRangesCount;
		label = this.createLabel('Filename:', inputId);
		labelCell = this.createFormCell(label, '');
		labelsDF.appendChild(labelCell);

		input = this.createInput('text','','',inputId);
		fieldCell = this.createFormCell(input, '');
		fieldsDF.appendChild(fieldCell);

		let button = this.createButton('button', 'Remove');
		button.addEventListener('click', function(modelRangeId) {
			this.removeModelRange(modelRangeId);
		}.bind(this, this.modelRangesCount));
		fieldCell = this.createFormCell(button, 'form-row-end');
		fieldsDF.appendChild(fieldCell);

		let labelRow = this.createFormRow(labelsDF, 'fifth');
		let fieldRow = this.createFormRow(fieldsDF, 'fifth');

		let div = document.createElement('div');
		div.id = 'model-range-row' + this.modelRangesCount;
		div.className = 'model-range-row';
		div.appendChild(labelRow);
		div.appendChild(fieldRow);

		this.modelRangesWrapper.appendChild(div);
	},
	removeModelRange: function(modelRangeId) {
		let row = document.getElementById('model-range-row' + modelRangeId);
		row.parentNode.removeChild(row);
	},
	addTextureArchive: function() {
		this.textureArchivesCount += 1;
		let labelsDF = document.createDocumentFragment();
		let fieldsDF = document.createDocumentFragment();

		let inputId = 'texture-archive-' + this.textureArchivesCount;
		let label = this.createLabel('Archive:', inputId);
		let labelCell = this.createFormCell(label, '');
		labelsDF.appendChild(labelCell);

		let input = this.createInput('text','','[0-9]+', inputId);
		let fieldCell = this.createFormCell(input, '');
		fieldsDF.appendChild(fieldCell);

		inputId = 'texture-archive-record-count-' + this.modelRangesCount;
		label = this.createLabel('Record count:', inputId);
		labelCell = this.createFormCell(label, '');
		labelsDF.appendChild(labelCell);

		input = this.createInput('number','','[0-9]+', inputId);
		fieldCell = this.createFormCell(input, '');
		fieldsDF.appendChild(fieldCell);

		inputId = 'texture-archive-nature-' + this.textureArchivesCount;
		label = this.createLabel('Nature flats?', inputId);
		labelCell = this.createFormCell(label, '');
		labelsDF.appendChild(labelCell);

		input = this.createInput('checkbox',1, null, inputId);
		fieldCell = this.createFormCell(input, '');
		fieldsDF.appendChild(fieldCell);

		inputId = 'texture-archive-filename-' + this.modelRangesCount;
		label = this.createLabel('Filename:', inputId);
		labelCell = this.createFormCell(label, '');
		labelsDF.appendChild(labelCell);

		input = this.createInput('text','',null,inputId);
		fieldCell = this.createFormCell(input, '');
		fieldsDF.appendChild(fieldCell);

		let button = this.createButton('button', 'Remove');
		button.addEventListener('click', function(textureArchiveId) {
			this.removeTextureArchive(textureArchiveId);
		}.bind(this, this.textureArchivesCount));
		fieldCell = this.createFormCell(button, 'form-row-end');
		fieldsDF.appendChild(fieldCell);

		let labelRow = this.createFormRow(labelsDF, 'fifth');
		let fieldRow = this.createFormRow(fieldsDF, 'fifth');

		let div = document.createElement('div');
		div.id = 'texture-archive-row' + this.textureArchivesCount;
		div.className = 'texture-archive-row';
		div.appendChild(labelRow);
		div.appendChild(fieldRow);

		this.textureArchivesWrapper.appendChild(div);
	},
	removeTextureArchive: function(textureArchiveId) {
		let row = document.getElementById('texture-archive-row' + textureArchiveId);
		row.parentNode.removeChild(row);
	},
	createFormRow: function(content, className) {
		let el = document.createElement('div');
		el.className = 'form-row ' + className;
		el.appendChild(content);
		return el;
	},
	createFormCell: function(content, className) {
		let el = document.createElement('div');
		el.className = 'form-cell ' + className;
		el.appendChild(content);
		return el;
	},
	createLabel: function(text, targetId) {
		let el = document.createElement('label');
		el.innerHTML = text;
		el.htmlFor = targetId;
		return el;
	},
	createInput: function(inputType, value, pattern, id) {
		let el = document.createElement('input');
		el.id = id;
		el.name = id;
		el.type = inputType;
		el.value = value;
		if(pattern !== '') {
			el.pattern = pattern;
		}
		return el;
	},
	createButton: function(buttonType, text) {
		let el = document.createElement('button');
		el.type = buttonType;
		el.innerHTML = text;
		return el;
	},
	getJSONTemplate: function() {
		let groundData = this.getGroundData();
		let groundSceneryData = this.getGroundSceneryData();
		let automapData = this.getAutomapData();

		let jsonTemplate = {
			Position: 568483,
			Index: 4895,
			Name: "",
			Type: "Rmb",
			RmbBlock: {
				FldHeader: {
					NumBlockDataRecords: 0,
					NumMisc3dObjectRecords: 0,
					NumMiscFlatObjectRecords: 0,
					BlockPositions: [],
					BuildingDataList: [],
					BlockDataSizes: [],
					GroundData: {
						Header: [],
						GroundTiles: groundData,
						GroundScenery: groundSceneryData
					},
					AutoMapData: automapData,
					Name: "",
					OtherNames: []
				},
				SubRecords: [],
				Misc3dObjectRecords: [],
				MiscFlatObjectRecords: []
			},
			RdbBlock: {
				ModelReferenceList: null,
				ObjectRootList: null
			},
			RdiBlock: {
				Data: null
			}
		};
		//jsonTemplate.RmbBlock.FldHeader.GroundData.GroundTiles = groundData;
		//jsonTemplate.RmbBlock.FldHeader.AutoMapData = automapData;
		return jsonTemplate;
	},
	getGroundSceneryData: function() {
		let groundSceneryData = [];
		for(let i = 0; i < 256; i++) {
			groundSceneryData[i] = {
				TextureRecord: -1
			};
		}
		return groundSceneryData;
	},
	getGroundData: function() {
		let groundData = [];
		for(let i = 0; i < 256; i++) {
			groundData[i] = {
				TileBitfield: 2,
				TextureRecord: 2,
				IsRotated: false,
				IsFlipped: false
			}
		}
		return groundData;
	},
	getAutomapData: function() {
		let automapData = [];
		for(let i = 0; i < 4096; i++) {
			automapData[i] = 0;
		}
		return automapData;
	}
}

window.addEventListener('DOMContentLoaded', function() {
	dfuShowcaseGenerator.init();
});