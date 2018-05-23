function showCompanies() {
	var all = document.getElementsByClassName("all");
	all[0].style.display = "flex"
	var down =document.getElementsByClassName("down");
	down[0].style.display = "none";
	var up = document.getElementsByClassName("up");
	up[0].style.display = "block";
}

function hideCompanies() {
    var all = document.getElementsByClassName("all")[0];
    all.style.display = "none";
	var down = document.getElementsByClassName("down")[0];
	down.style.display = "block"
	var up = document.getElementsByClassName("up")[0];
	up.style.display = "none";
}