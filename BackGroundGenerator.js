var firstcolor=document.getElementById("color1");
var secondcolor=document.getElementById("color2");
var css=document.querySelector("h3");
var body=document.getElementsByTagName('body')[0];
console.log(body);
function changebackground(){
	body.style.background = "linear-gradient(to right," + firstcolor.value +","+secondcolor.value;
	// css.innerHTML="linear-gradient(to right," + firstcolor.value +","+secondcolor.value+ ")";
	css.textContent = body.style.background +";";
}
// firstcolor.addEventListener("input",changebackground);
// secondcolor.addEventListener("input",changebackground);