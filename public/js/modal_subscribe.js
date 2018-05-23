/*Switch from Sign up and Sign in Modal*/
var sign_in = document.getElementById('modal-signin');
var subscribe = document.getElementById('modal-subscribe');
document.getElementById('user_create').onclick = function() {
    sign_in.style.display = "none";
    subscribe.style.display = "block";
    document.getElementById('drag_drop').style.display = "none";
    document.getElementById("down_Upload").style.display = "block";
	document.getElementById("up_Upload").style.display = "none";
}

document.getElementById('user_connect').onclick = function() {
    sign_in.style.display = "block";
    subscribe.style.display = "none";
    document.getElementById("get_passwd").style.display="none";
}

/*Show/Hide Upload file drag and drop*/
function showUpload() {
	document.getElementById("drag_drop").style.display = "block";
	document.getElementById("down_Upload").style.display = "none";
	document.getElementById("up_Upload").style.display = "block";
}

function hideUpload() {
   document.getElementById("drag_drop").style.display = "none";
	document.getElementById("down_Upload").style.display = "block";
	document.getElementById("up_Upload").style.display = "none";
}

/*Show/Hide forgotten password form*/

document.getElementById("get_passwd").style.display="none";
function showPasswd() {
	var form = document.getElementById("get_passwd");

	if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
