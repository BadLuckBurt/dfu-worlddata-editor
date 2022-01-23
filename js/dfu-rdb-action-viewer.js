var rdbActionViewer = {
	blockIndex: -1,
	blockNames: [
		"B0000000.RDB",
		"B0000001.RDB",
		"B0000002.RDB",
		"B0000003.RDB",
		"B0000004.RDB",
		"B0000005.RDB",
		"B0000006.RDB",
		"B0000007.RDB",
		"B0000008.RDB",
		"B0000009.RDB",
		"B0000010.RDB",
		"B0000011.RDB",
		"B0000012.RDB",
		"B0000013.RDB",
		"B0000014.RDB",
		"M0000000.RDB",
		"M0000001.RDB",
		"M0000002.RDB",
		"M0000003.RDB",
		"M0000004.RDB",
		"M0000005.RDB",
		"M0000006.RDB",
		"M0000007.RDB",
		"M0000008.RDB",
		"N0000000.RDB",
		"N0000001.RDB",
		"N0000002.RDB",
		"N0000003.RDB",
		"N0000004.RDB",
		"N0000005.RDB",
		"N0000006.RDB",
		"N0000007.RDB",
		"N0000008.RDB",
		"N0000009.RDB",
		"N0000010.RDB",
		"N0000011.RDB",
		"N0000012.RDB",
		"N0000013.RDB",
		"N0000014.RDB",
		"N0000015.RDB",
		"N0000016.RDB",
		"N0000017.RDB",
		"N0000018.RDB",
		"N0000019.RDB",
		"N0000020.RDB",
		"N0000021.RDB",
		"N0000022.RDB",
		"N0000023.RDB",
		"N0000024.RDB",
		"N0000025.RDB",
		"N0000026.RDB",
		"N0000027.RDB",
		"N0000028.RDB",
		"N0000029.RDB",
		"N0000030.RDB",
		"N0000031.RDB",
		"N0000032.RDB",
		"N0000033.RDB",
		"N0000034.RDB",
		"N0000035.RDB",
		"N0000036.RDB",
		"N0000037.RDB",
		"N0000038.RDB",
		"N0000039.RDB",
		"N0000040.RDB",
		"N0000041.RDB",
		"N0000042.RDB",
		"N0000043.RDB",
		"N0000044.RDB",
		"N0000045.RDB",
		"N0000046.RDB",
		"N0000047.RDB",
		"N0000048.RDB",
		"N0000049.RDB",
		"N0000050.RDB",
		"N0000051.RDB",
		"N0000052.RDB",
		"N0000053.RDB",
		"N0000054.RDB",
		"N0000055.RDB",
		"N0000056.RDB",
		"N0000057.RDB",
		"N0000058.RDB",
		"N0000059.RDB",
		"N0000060.RDB",
		"N0000061.RDB",
		"N0000062.RDB",
		"N0000063.RDB",
		"N0000064.RDB",
		"N0000065.RDB",
		"N0000066.RDB",
		"N0000067.RDB",
		"N0000068.RDB",
		"N0000069.RDB",
		"N0000070.RDB",
		"N0000071.RDB",
		"N0000072.RDB",
		"N0000073.RDB",
		"N0000074.RDB",
		"N0000075.RDB",
		"N0000076.RDB",
		"N0000077.RDB",
		"N0000078.RDB",
		"N0000079.RDB",
		"N0000080.RDB",
		"N0000081.RDB",
		"N0000082.RDB",
		"N0000083.RDB",
		"N0000084.RDB",
		"N0000085.RDB",
		"N0000086.RDB",
		"N0000087.RDB",
		"N0000088.RDB",
		"N0000089.RDB",
		"N0000090.RDB",
		"N0000091.RDB",
		"N0000092.RDB",
		"S0000000.RDB",
		"S0000001.RDB",
		"S0000002.RDB",
		"S0000003.RDB",
		"S0000004.RDB",
		"S0000005.RDB",
		"S0000006.RDB",
		"S0000020.RDB",
		"S0000021.RDB",
		"S0000022.RDB",
		"S0000040.RDB",
		"S0000041.RDB",
		"S0000042.RDB",
		"S0000043.RDB",
		"S0000060.RDB",
		"S0000061.RDB",
		"S0000062.RDB",
		"S0000069.RDB",
		"S0000070.RDB",
		"S0000071.RDB",
		"S0000080.RDB",
		"S0000081.RDB",
		"S0000082.RDB",
		"S0000100.RDB",
		"S0000101.RDB",
		"S0000120.RDB",
		"S0000121.RDB",
		"S0000140.RDB",
		"S0000141.RDB",
		"S0000160.RDB",
		"S0000161.RDB",
		"S0000180.RDB",
		"S0000181.RDB",
		"S0000200.RDB",
		"S0000201.RDB",
		"S0000202.RDB",
		"S0000203.RDB",
		"S0000204.RDB",
		"S0000205.RDB",
		"S0000999.RDB",
		"W0000000.RDB",
		"W0000001.RDB",
		"W0000002.RDB",
		"W0000003.RDB",
		"W0000004.RDB",
		"W0000005.RDB",
		"W0000006.RDB",
		"W0000007.RDB",
		"W0000008.RDB",
		"W0000009.RDB",
		"W0000010.RDB",
		"W0000011.RDB",
		"W0000012.RDB",
		"W0000013.RDB",
		"W0000014.RDB",
		"W0000015.RDB",
		"W0000016.RDB",
		"W0000017.RDB",
		"W0000018.RDB",
		"W0000019.RDB",
		"W0000020.RDB",
		"W0000021.RDB",
		"W0000022.RDB",
		"W0000023.RDB",
		"W0000024.RDB",
		"W0000025.RDB",
		"W0000026.RDB",
		"W0000027.RDB",
		"W0000028.RDB",
		"W0000029.RDB",
		"W0000029.RDB"
	],
	registerBlocksScript: null,
	flags: [],
	triggerFlags: [
		'None',
		'Collision01',
		'Direct',
		'Collision03',
		'Attack',
		'Direct6',
		'Multi trigger',
		'Collision',
		'Door'
	],
	axisFlags: [
		'None',
		'NegativeX',
		'PositiveX',
		'NegativeY',
		'PositiveY',
		'NegativeZ',
		'PositiveZ'
	],
	unknownModels: [],
	init: function() {
		this.fileInput = document.getElementById('json-upload-file');
		this.loadFileButton = document.getElementById('json-upload-button');
		this.loadFileButton.addEventListener('click', this.loadJSON.bind(this));

		this.flags[0] = 'None';
		this.flags[1] = 'Translation';
		this.flags[2] = 'PositiveX';
		this.flags[3] = 'NegativeX';
		this.flags[4] = 'PositiveY';
		this.flags[5] = 'NegativeY';
		this.flags[6] = 'PositiveZ';
		this.flags[7] = 'NegativeZ';
		this.flags[8] = 'Rotation';
		this.flags[9] = 'CastSpell';
		this.flags[11] = 'ShowText';
		this.flags[12] = 'ShowTextWithInput';
		this.flags[14] = 'Teleport';
		this.flags[16] = 'LockDoor';
		this.flags[17] = 'UnlockDoor';
		this.flags[18] = 'OpenDoor';
		this.flags[20] = 'CloseDoor';
		this.flags[21] = 'Hurt21';
		this.flags[22] = 'Hurt22';
		this.flags[23] = 'Hurt23';
		this.flags[24] = 'Hurt24';
		this.flags[25] = 'Hurt25';
		this.flags[26] = 'Poison';
		this.flags[27] = 'Unknown27';
		this.flags[28] = 'DrainMagicka';
		this.flags[29] = 'Dialogue';
		this.flags[30] = 'Activate';
		this.flags[31] = 'SetGlobalVar';
		this.flags[32] = 'Unknown32';
		this.flags[50] = 'Unknown50';
		this.flags[99] = 'DoorText';
		this.flags[100] = 'Unknown100';

		this.handleRDBScriptLoad();
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
	modelReferenceList: null,
	processJSON: function(rdb) {
		//var rdbJSON = JSON.parse(rdb);
		var rdbJSON = rdb;
		var rdbBlock = rdbJSON.RdbBlock;
		this.modelReferenceList = rdbBlock.ModelReferenceList;

		var i, j, k, objectRootList, rdbObjects, obj, actionObject, resource, actionResource, nextObject;
		objectRootList = rdbBlock.ObjectRootList;
		var actionObjects = [];
		var allObjects = [];
		var allObject;
		for(i = 0; i < objectRootList.length; i++) {
			rdbObjects = objectRootList[i].RdbObjects;
			if(rdbObjects == null) {
				continue;
			}
			for(j = 0; j < rdbObjects.length; j++) {
				obj = rdbObjects[j];
				if(obj.Type == 'Model') {

					/*
					 RdbBlock.ObjectRootList []
					    .RdbObjects []
					        .Type
					        .Resources.ModelResource
					            .ActionResource
					                .Axis
					                .Duration
					                .Flags
					                .Magnitude
					                .NextObjectIndex
					                .Position
					            .ModelIndex
					            .SoundIndex
					            .TriggerFlag_StartingLock
					            .XRotation
					            .YRotation
					            .ZRotation
					 */
					resource = obj.Resources.ModelResource;
					//if(resource.TriggerFlag_StartingLock > 0 || resource.ActionResource.Flags > 0) {
					if(resource.ActionResource.Flags > 0) {
						actionResource = resource.ActionResource;
						actionObject = {
							RdbObjectsIndex: i,
							ObjectIndex: j,
							Position: obj.Position,
							ModelId: this.modelReferenceList[resource.ModelIndex],
							TriggerFlag_StartingLock: resource.TriggerFlag_StartingLock,
							SoundIndex: resource.SoundIndex,
							ActionResource: resource.ActionResource,
						};
						if(actionResource.Axis < this.axisFlags.length) {
							actionObject.ActionResource.AxisDescription = this.axisFlags[actionResource.Axis];
						} else {
							actionObject.ActionResource.AxisDescription = "No valid axis.";
						}
						if(modelNames[actionObject.ModelId.ModelIdNum] != null) {
							actionObject.ModelDescription = modelNames[actionObject.ModelId.ModelIdNum];
						} else {
							this.unknownModels[this.unknownModels.length] = actionObject.ModelId.ModelIdNum;
							actionObject.ModelDescription = "No description";
						}

						if(resource.TriggerFlag_StartingLock > this.triggerFlags.length - 1) {
							actionObject.TriggerFlagDescription = 'Lock level';
						} else {
							actionObject.TriggerFlagDescription = this.triggerFlags[resource.TriggerFlag_StartingLock];
						}

						actionObject.ActionResource.FlagsDescription = this.flags[actionObject.ActionResource.Flags];
						if(resource.ActionResource.NextObjectIndex > -1) {
							nextObject = rdbObjects[resource.ActionResource.NextObjectIndex];
							if(nextObject.Resources.ModelResource == null) {
								continue;
							}
							actionObject.NextObject = {
								RdbObjectsIndex: i,
								ObjectIndex: resource.ActionResource.NextObjectIndex,
								Position: nextObject.Position,
								ModelId: this.modelReferenceList[nextObject.Resources.ModelResource.ModelIndex],
								TriggerFlag_StartingLock: nextObject.Resources.ModelResource.TriggerFlag_StartingLock,
								SoundIndex: nextObject.Resources.ModelResource.SoundIndex,
								ActionResource: nextObject.Resources.ModelResource.ActionResource
							};

							if(nextObject.Resources.ModelResource.TriggerFlag_StartingLock > this.triggerFlags.length - 1) {
								actionObject.NextObject.TriggerFlagDescription = 'Lock level';
							} else {
								actionObject.NextObject.TriggerFlagDescription = this.triggerFlags[nextObject.Resources.ModelResource.TriggerFlag_StartingLock];
							}
							actionObject.NextObject.ActionResource.FlagsDescription = this.flags[nextObject.Resources.ModelResource.ActionResource.Flags];
							if(nextObject.Resources.ModelResource.ActionResource.Axis < this.axisFlags.length) {
								actionObject.NextObject.ActionResource.AxisDescription = this.axisFlags[nextObject.Resources.ModelResource.ActionResource.Axis];
							} else {
								actionObject.NextObject.ActionResource.AxisDescription = "No axis description.";
							}

							if(modelNames[actionObject.NextObject.ModelId.ModelIdNum] != null) {
								actionObject.NextObject.ModelDescription = modelNames[actionObject.NextObject.ModelId.ModelIdNum];
							} else {
								this.unknownModels[this.unknownModels.length] = actionObject.NextObject.ModelId.ModelIdNum;
								actionObject.NextObject.ModelDescription = "No description";
							}
						}
						actionObjects[actionObjects.length] = actionObject;
					}
				} else if(obj.Type == 'Flat' && 2 == 3) {
					resource = obj.Resources.FlatResource;
					if(resource.Action > 0) {
						actionObject = {

						};
						actionObjects[actionObjects.length] = actionObject;
					}
				}

			}
		}
		return actionObjects;
		console.log(actionObjects);
		var df = document.createDocumentFragment();
		var action, html, actionRecord, nextAction;
		for(i = 0; i < actionObjects.length; i++) {
			action = document.createElement('div');
			action.className = 'dfu-rdb-action';
			/*
			 RdbObjectsIndex: i,
			 ObjectIndex: j,
			 Position: obj.Position,
			 ModelId: this.modelReferenceList[resource.ModelIndex],
			 TriggerFlag_StartingLock: resource.TriggerFlag_StartingLock,
			 TriggerFlagDescription: this.triggerFlags[resource.TriggerFlag_StartingLock],
			 SoundIndex: resource.SoundIndex,
			 ActionResource: resource.ActionResource,
			 */
			html = '<div class="label">RdbObjectsIndex</div><div class="value">' + actionObjects[i].RdbObjectsIndex + '</div>';
			html += '<div class="label">ObjectIndex</div><div class="value">' + actionObjects[i].ObjectIndex + '</div>';
			html += '<div class="label">Position</div><div class="value">' + actionObjects[i].Position + '</div>';
			html += '<div class="label">ModelId</div><div class="value">' + actionObjects[i].ModelId.ModelIdNum + '</div>';
			html += '<div class="label">Description</div><div class="value">' + actionObjects[i].ModelDescription + '</div>';
			html += '<div class="label">TriggerFlag_StartingLock</div><div class="value">' + actionObjects[i].TriggerFlag_StartingLock + '</div>';
			html += '<div class="label">Trigger description</div><div class="value">' + actionObjects[i].TriggerFlagDescription + '</div>';
			html += '<div class="label">SoundIndex</div><div class="value">' + actionObjects[i].SoundIndex + '</div>';
			html += '<div class="label">ObjectIndex</div><div class="value">' + actionObjects[i].ObjectIndex + '</div>';
			html += '<div class="label">ObjectIndex</div><div class="value">' + actionObjects[i].ObjectIndex + '</div>';
			html += '<div class="resource">ActionResource</div>';
			html += '<div class="label">Axis</div><div class="value">' + actionObjects[i].ActionResource.Axis + '</div>';
			html += '<div class="label">Duration</div><div class="value">' + actionObjects[i].ActionResource.Duration + '</div>';
			html += '<div class="label">Flags</div><div class="value">' + actionObjects[i].ActionResource.Flags + '</div>';
			html += '<div class="label">FlagsDescription</div><div class="value">' + actionObjects[i].ActionResource.FlagsDescription + '</div>';
			html += '<div class="label">Magnitude</div><div class="value">' + actionObjects[i].ActionResource.Magnitude + '</div>';
			html += '<div class="label">NextObjectIndex</div><div class="value">' + actionObjects[i].ActionResource.NextObjectIndex + '</div>';
			html += '<div class="label">NextObjectOffset</div><div class="value">' + actionObjects[i].ActionResource.NextObjectOffset + '</div>';
			html += '<div class="label">Position</div><div class="value">' + actionObjects[i].ActionResource.Position + '</div>';
			html += '<div class="label">PreviousObjectOffset</div><div class="value">' + actionObjects[i].ActionResource.PreviousObjectOffset + '</div>';

			action.innerHTML = html;
			df.appendChild(action);
			/*
			 Axis: 0
			 Duration: 0
			 Flags: 24
			 FlagsDescription: "Hurt24"
			 Magnitude: 0
			 NextObjectIndex: -1
			 NextObjectOffset: 0
			 Position: 10145
			 PreviousObjectOffset: 0
			 */
		}
		document.getElementById('dfu-rdb-actions').appendChild(df);
	},
	handleRDBScriptLoad: function(i) {
		let url;
		for(let i = 0; i < this.blockNames.length; i++) {
			//Keep loading scripts until the end of blockNames is reached
			url = 'js/RDB/' + this.blockNames[i];
			this.doRDBAjax(url);
		}
	},
	doRDBAjax: function(url) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(xhttp) {
			this.processRDBJson(xhttp);
		}.bind(this, xhttp);
		xhttp.open("GET", url, true);
		xhttp.send();
	},
	processRDBJson: function(xhttp) {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			this.blockIndex++;
			var rdb = xhttp.responseText;
			rdb = JSON.parse(rdb);
			this.generateBlockActionList(rdb);
			//console.log('Succes loading ' + rdb.Name);
		}
	},
	blockList: {
		border: [],
		crypt: [],
		normal: [],
		special: [],
		water: []
	},
	processedBlockNames: {
		border: [],
		crypt: [],
		normal: [],
		special: [],
		water: []
	},
	generateBlockActionList: function(rdb) {
		let actions = this.processJSON(rdb);
		if(actions.length > 0) {
			if (rdb.Name.includes('B0') !== false) {
				this.processedBlockNames.border[this.processedBlockNames.border.length] = rdb.Name;
				this.blockList.border[this.blockList.border.length] = actions;
			} else if (rdb.Name.includes('M0') !== false) {
				this.processedBlockNames.crypt[this.processedBlockNames.crypt.length] = rdb.Name;
				this.blockList.crypt[this.blockList.crypt.length] = actions;
			} else if (rdb.Name.includes('N0') !== false) {
				this.processedBlockNames.normal[this.processedBlockNames.normal.length] = rdb.Name;
				this.blockList.normal[this.blockList.normal.length] = actions;
			} else if (rdb.Name.includes('S0') !== false) {
				this.processedBlockNames.special[this.processedBlockNames.special.length] = rdb.Name;
				this.blockList.special[this.blockList.special.length] = actions;
			} else if (rdb.Name.includes('W0') !== false) {
				this.processedBlockNames.water[this.processedBlockNames.water.length] = rdb.Name;
				this.blockList.water[this.blockList.water.length] = actions;
			}
		}

		if(this.blockIndex >= this.blockNames.length - 1) {
			console.log(this.unknownModels);
			//console.log(this.processedBlockNames);
			//console.log(this.blockList);

			//Border blocks
			for(let i = 0; i < this.processedBlockNames.special.length; i++) {
				//this.printBlockData(this.processedBlockNames.normal[i], this.blockList.normal[i]);
				this.printTableData(this.processedBlockNames.special[i], this.blockList.special[i]);
			}
		}
	},
	printTableData: function(blockName, blocks) {
		let el = document.getElementById('dfu-rdb-actions');
		let df = document.createDocumentFragment();
		let div = document.createElement('div');
		div.className = 'block-actions';

		let blockNameEl = document.createElement('div');
		blockNameEl.className = 'block-name';
		blockNameEl.innerHTML = blockName;
		div.appendChild(blockNameEl);

		let actionEl;
		for(let i = 0; i < blocks.length; i++) {
			//if(i == 0) {
				//console.log(blocks[i]);
			//}
			actionEl = this.createEl('action');
			actionEl = this.fillActionEl(actionEl, i, blocks);
			div.appendChild(actionEl);
		}
		df.appendChild(div);
		el.append(df);
	},
	fillActionEl: function(actionEl, index, blocks) {
		let tmp, tmpLabel, tmpProperty, lnk, lnkLabel, lnkProperty;
		tmp = this.createEl('action-property');
		tmpLabel = this.createLabel('ModelId_' + blocks[index].Position, 'ModelId');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].ModelId.ModelIdNum
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-property');
		tmpLabel = this.createLabel('Description_' + blocks[index].Position, 'Description');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].ModelDescription;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-property');
		tmpLabel = this.createLabel('TriggerFlag_StartingLock_' + blocks[index].Position, 'TriggerFlag_StartingLock');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].TriggerFlag_StartingLock;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-property');
		tmpLabel = this.createLabel('TriggerFlagDescription_' + blocks[index].Position, 'TriggerFlagDescription');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].TriggerFlagDescription;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-property');
		tmpLabel = this.createLabel('SoundIndex_' + blocks[index].Position, 'SoundIndex');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].SoundIndex;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-resource');
		tmpLabel = this.createLabel('Axis_' + blocks[index].Position, 'Axis');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].ActionResource.Axis;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-resource');
		tmpLabel = this.createLabel('AxisDescription_' + blocks[index].Position, 'AxisDescription');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].ActionResource.AxisDescription;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-resource');
		tmpLabel = this.createLabel('Duration_' + blocks[index].Position, 'Duration');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].ActionResource.Duration;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-resource');
		tmpLabel = this.createLabel('Magnitude' + blocks[index].Position, 'Magnitude');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].ActionResource.Magnitude;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-resource');
		tmpLabel = this.createLabel('Flags' + blocks[index].Position, 'Flags');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].ActionResource.Flags;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		tmp = this.createEl('action-resource');
		tmpLabel = this.createLabel('FlagsDescription' + blocks[index].Position, 'FlagsDescription');
		tmpProperty = this.createEl('action-value');
		tmpProperty.innerHTML = blocks[index].ActionResource.FlagsDescription;
		tmp.appendChild(tmpLabel);
		tmp.appendChild(tmpProperty);
		actionEl.appendChild(tmp);

		let linkedActionEl;
		if(blocks[index].NextObject != null) {
			linkedActionEl = this.createEl('linked-action');
			for(let j = 0; j < blocks.length; j++) {
				if(blocks[j].ObjectIndex == blocks[index].NextObject.ObjectIndex) {
					linkedActionEl = this.fillActionEl(linkedActionEl, j, blocks);
					actionEl.appendChild(linkedActionEl);
					break;
				}
			}
		}

		return actionEl;
	},
	createEl: function(className) {
		let el = document.createElement('div');
		el.className = className;
		return el;
	},
	createLabel: function(id, text) {
		let el = document.createElement('label');
		el.for = id;
		el.innerHTML = text;
		return el;
	},
	printBlockData: function(blockName, blocks) {
		let el = document.getElementById('dfu-rdb-action-viewer-result');
		let text = blockName + "\n\n";

		for(let i = 0; i < blocks.length; i++) {
			text += "RdbObjectsIndex: " + blocks[i].RdbObjectsIndex + "\n";
			text += "ObjectIndex: " + blocks[i].ObjectIndex + "\n";
			text += "Position: " + blocks[i].Position + "\n";
			text += "ModelId: " + blocks[i].ModelId.ModelIdNum + "\n";
			text += "Description: " + blocks[i].ModelDescription + "\n";
			text += "TriggerFlag_StartingLock: " + blocks[i].TriggerFlag_StartingLock + "\n";
			text += "Trigger description: " + blocks[i].TriggerFlagDescription + "\n";
			text += "SoundIndex: " + blocks[i].SoundIndex + "\n";
			text += "--- ACTION RESOURCE ---\n";
			text += "\tAxis: " + blocks[i].ActionResource.Axis + "\n";
			text += "\tDuration: " + blocks[i].ActionResource.Duration + "\n";
			text += "\tMagnitude: " + blocks[i].ActionResource.Magnitude + "\n";
			text += "\tFlags: " + blocks[i].ActionResource.Flags + "\n";
			text += "\tFlagsDescription: " + blocks[i].ActionResource.FlagsDescription + "\n";
			text += "\tNextObjectIndex: " + blocks[i].ActionResource.NextObjectIndex + "\n";
			text += "\tNextObjectOffset: " + blocks[i].ActionResource.NextObjectOffset + "\n";
			text += "\tPosition: " + blocks[i].ActionResource.Position + "\n";
			text += "\tPreviousObjectOffset: " + blocks[i].ActionResource.PreviousObjectOffset + "\n";
			text += "--- END ACTION RESOURCE ---\n\n";
		}
		el.innerHTML += text;
	}
};

window.addEventListener('DOMContentLoaded', function() {
	rdbActionViewer.init();
});