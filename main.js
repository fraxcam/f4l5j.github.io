/*Cookies*/
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 1000);


/*disabilitare drag immagini*/
window.ondragstart = function() {return false}


/*disabilitare tasti*/
document.onkeydown = function(blocco_tasti) {
  if(event.keyCode == 123)
{ return false; }
  if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'I'.charCodeAt(0)) { return false; }
  if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'C'.charCodeAt(0)) { return false; }
  if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'J'.charCodeAt(0)) { return false; }
  if(blocco_tasti.ctrlKey && blocco_tasti.keyCode == 'U'.charCodeAt(0))
{ return false; }
}

/*disabilitare mouse*/
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);


/*privata*/
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