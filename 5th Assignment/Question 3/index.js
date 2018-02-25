function jsonCallback(json){
	$("button").click(function(){
		for (var i = 0; i <= json.length; i++) {
		document.getElementById("result").innerHTML += json[i].name + " email: " + "<a href='#'>"+ json[i].email +"</a><br>";
	} 
	});
	
}

$.ajax({
	url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
	dataType: "jsonp"
});



