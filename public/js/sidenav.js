function openNav() {
    document.getElementById("sidenav").style.width = "170px";
    document.getElementById("particles-js").style.width = "170px";
    document.getElementById("closeNav").style.display = "block";
    document.getElementById("openNav").style.display = "none";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "65px";
    document.getElementById("particles-js").style.width = "65px";
    document.getElementById("closeNav").style.display = "none";
    document.getElementById("openNav").style.display = "block";
}

function responsive() {
	var w = window.outerWidth;
	var h = window.outerHeight;
	if ( w > 500 )
	{
		 document.getElementById("sidenav").style.width = "225px";
		 document.body.style.marginLeft = "225px";
		 document.getElementById("particles-js").style.width = "225px";
		 document.getElementById("particles-js").display = "block";
   		 document.getElementById("closeNav").style.display = "none";
   		 document.getElementById("openNav").style.display = "none";

	}

	if (w < 500)
	{
		 document.getElementById("sidenav").style.width = "65px";
		 document.body.style.marginLeft = "65px";
   		 document.getElementById("openNav").style.display = "block";
	}
}