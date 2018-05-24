var modal = document.getElementById('myModal');
var modal_div = document.getElementById('modal-content');

var sign_in = document.getElementById('modal-signin');

var subscribe = document.getElementById('modal-subscribe');

var exit = document.getElementsByClassName("close");

document.getElementById("sign_in").onclick = function() {
    modal.style.display = "block";
    sign_in.style.display = "block";
    subscribe.style.display = "none";
}

for (var i = 0; i < 2; i++)
{
    exit[i].onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
     if (event.target == modal || event.target == modal_div) {
         modal.style.display = "none";
         document.getElementById("get_passwd").style.display="none";
    }
}

document.getElementById('user_create').onclick = function() {
    sign_in.style.display = "none";
    subscribe.style.display = "block";
}

document.getElementById('user_connect').onclick = function() {
	console.log("AOSDiAOSDIOASDI");
    modal.style.display = "block";
    sign_in.style.display = "block";
    subscribe.style.display = "none";
}
