var objPeople = [
	{ // Object @ 0 index
		username: "orgoglio",
		password: "bresciano"
	},/*
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}
*/
]
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert("Salve e Benvenuto nella sezione test");
      window.open ("lollo/index.html");
			return
		}
	}
	alert("ACCESSO NEGATO");
}
