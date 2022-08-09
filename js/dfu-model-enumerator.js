let dfuModelEnumerator = {
	startIdEl: null,
	modelNamesEl: null,
	modelIdsEl: null,
	enumerateButton: null,
	renameResultEl: null,
	init: function() {
		this.startIdEl = document.getElementById('dfu-model-starting-id');
		this.modelNamesEl = document.getElementById('dfu-model-names');
		this.modelIdsEl = document.getElementById('dfu-model-ids');
		this.renameResultEl = document.getElementById('dfu-rename-models-result');
		this.modelQuotesEl = document.getElementById('dfu-models-quotes');

		this.enumerateButton = document.getElementById('dfu-enumerate-button');
		this.enumerateButton.addEventListener('click', function() {
			this.enumerateModels();
		}.bind(this));
	},
	enumerateModels: function() {
		let startID = this.startIdEl.value;
		let models = this.modelNamesEl.value.split("\n");
		let ids = [];
		let rename = [];
		if(startID == 0) {
			alert('Please set the starting ID');
			return false;
		}
		if(models.length == 0) {
			alert('Please enter a list of model names to be enumerated');
			return false;
		}
		for(let i = 0; i < models.length; i++) {
			if(models[i] == '') {
				continue;
			} else {
				models[i] = models[i].replace('.fbx','');
			}
			ids[ids.length] = startID;
			rename[rename.length] = 'rename "' + models[i] + '.prefab" "' + startID + '.prefab"';
			models[i] = '"' + models[i] + '"';
			startID++;
		}
		this.modelIdsEl.value = ids.join(",\n");
		this.renameResultEl.value = rename.join("\n");
		this.modelQuotesEl.value = models.join(",\n");
	}
}

window.addEventListener('DOMContentLoaded', function() {
	dfuModelEnumerator.init();
});