function Model() {
	this.allNames = new Array();
	this.changeListeners = new Array();

	this.addNewName = function(name) {
		this.allNames.push(name);
		this.saveData();
		this.notifyChange();
	}

	this.notifyChange = function() {
		this.changeListeners.forEach(function (changeListener) {
			changeListener();
		});
	}

	this.addNewListener = function(newListener) {
		this.changeListeners.push(newListener);
	}

	this.saveData = function() {
		localStorage.setItem('persons', JSON.stringify(this.allNames));
	}

	this.loadData = function () {
		var personsJSON = localStorage.getItem('persons');
		if (personsJSON) {
			this.allNames = JSON.parse(personsJSON);
			this.notifyChange();
		}
	}
}