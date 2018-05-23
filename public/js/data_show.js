function showDone() {

var done = document.getElementById("done");
var progress = document.getElementById("progress");

var div_progress = document.getElementById("in_progress");
var div_done = document.getElementById("finished");

div_done.style.display = "block";
done.style.display = "block";
progress.style.display = "none";
div_progress.style.display = "none";
}

function showProgress(){

var done = document.getElementById("done");
var progress = document.getElementById("progress");

var div_progress = document.getElementById("in_progress");
var div_done = document.getElementById("finished");

progress.style.display = "block";
div_progress.style.display = "block";
done.style.display = "none";
div_done.style.display = "none";

}