var rdbActionViewer = {
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
		var rdbJSON = JSON.parse(rdb);

		var rdbBlock = rdbJSON.RdbBlock;
		//RdbBlock.ModelReferenceList []
		//  ModelIdNum
		//  Description
		this.modelReferenceList = rdbBlock.ModelReferenceList;

		var i, j, k, objectRootList, rdbObjects, obj, actionObject, resource, actionResource, nextObject;
		objectRootList = rdbBlock.ObjectRootList;
		var actionObjects = [];
		var objectPositions = [
			10155,
			15450,
			12387,
			12445,
			14798,
			14750,
			29264,
			24302,
			17005,
			17063,
			10427,
			12871,
			10485,
			10427,
			15344
		];
		for(i = 0; i < objectRootList.length; i++) {
			rdbObjects = objectRootList[i].RdbObjects;
			if(rdbObjects == null) {
				continue;
			}
			for(j = 0; j < rdbObjects.length; j++) {
				obj = rdbObjects[j];
				if(obj.Type == 'Model') {
					/*
					 10155 - next object offset = 15450
					 12387 - next object offset = 12445
					 14798 - next object offset = 14750
					 29264 - next object offset = 24302
					 17005 - next object offset = 17063
					 10427 - next object offset = 12871
					 10485 - next object offset = 10427
					 15344 - next object offset = 10485
					 */

					if(objectPositions.indexOf(obj.Position) > -1 && 2 == 3) {
						console.log('RdbObjects index: ' + i.toString() + ' - object index: ' + j.toString() + ' - object position: ' + obj.Position.toString());
					}
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
					if(resource.TriggerFlag_StartingLock > 0 || resource.ActionResource.Flags > 0) {
						actionResource = resource.ActionResource;
						actionObject = {
							RdbObjectsIndex: i,
							ObjectIndex: j,
							Position: obj.Position,
							ModelId: this.modelReferenceList[resource.ModelIndex],
							TriggerFlag_StartingLock: resource.TriggerFlag_StartingLock,
							TriggerFlagDescription: this.triggerFlags[resource.TriggerFlag_StartingLock],
							SoundIndex: resource.SoundIndex,
							ActionResource: resource.ActionResource,
						};
						actionObject.ActionResource.FlagsDescription = this.flags[actionObject.ActionResource.Flags];
						if(resource.ActionResource.NextObjectIndex > -1) {
							nextObject = rdbObjects[resource.ActionResource.NextObjectIndex];
							actionObject.NextObject = {
								RdbObjectsIndex: i,
								ObjectIndex: resource.ActionResource.NextObjectIndex,
								Position: nextObject.Position,
								ModelId: this.modelReferenceList[nextObject.Resources.ModelResource.ModelIndex],
								TriggerFlag_StartingLock: nextObject.Resources.ModelResource.TriggerFlag_StartingLock,
								TriggerFlagDescription: this.triggerFlags[nextObject.Resources.ModelResource.TriggerFlag_StartingLock],
								SoundIndex: nextObject.Resources.ModelResource.SoundIndex,
								ActionResource: nextObject.Resources.ModelResource.ActionResource
							};
							actionObject.NextObject.ActionResource.FlagsDescription = this.flags[nextObject.Resources.ModelResource.ActionResource.Flags];
						}
						//if(actionObject.TriggerFlag_StartingLock == 2 || actionObject.TriggerFlag_StartingLock == 0) {
							actionObjects[actionObjects.length] = actionObject;
						//}
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
	}
};

window.addEventListener('DOMContentLoaded', function() {
	rdbActionViewer.init();
});