var NameModel = new Model();

registerListeners();

NameModel.loadData();

function addName() {
	var name = document.getElementById("nameInput").value;

	var NameItem = new Name(name);

	NameModel.addNewName(NameItem);
}

function registerListeners() {
	NameModel.addNewListener(updateName);
}

function updateName(){
	var historyName = document.getElementById('history');

	// Clear the content
	while(historyName.firstChild){
		historyName.removeChild(historyName.firstChild);
	}

	NameModel.allNames.forEach(function (element) {
		var list = $("#NameList");

		// list.innerHTML = element.name + "<br>";
		list.html(element.name + "<br>");
		historyName.innerHTML += element.name + "<br>";
	});
}
