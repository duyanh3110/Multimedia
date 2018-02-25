function AddPerson()
{
  var input = document.getElementById("PersonInput").value;
  var list = document.getElementById("result");

  list.innerHTML += input + "<br>";
}
