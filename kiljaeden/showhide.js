
function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
	expires = expires * 1000 * 60 * 60 * 24 * 60;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+"="+escape( value ) +
	( ( expires ) ? ";expires="+expires_date.toGMTString() : "" ) + //expires.toGMTString()
	( ( path ) ? ";path=" + path : "" ) +
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}


function toggleMenu2(menu) {
	var headerimg = "L" + menu;
	var menucontents = "M" + menu;
	var ob = document.getElementById(menucontents).style;
	var status = "";

	if (ob.display == 'none') {
		ob.display = 'block';
		document.getElementById(headerimg).style.background="url(http://dkpfiles.com/dkp-templates/kiljaeden/Menu-HeadOpen2.gif)";
		setCookie(menu, true, 365);
	} else {
		ob.display = 'none';
		document.getElementById(headerimg).style.background="url(http://dkpfiles.com/dkp-templates/kiljaeden/Menu-HeadClosed2.gif)";
		setCookie(menu, false, 365);
	}
}

function readCookies(e) {
	var sections = document.cookie.split(/;\s*/);
	for(i=0;i<sections.length;i++)
	{
		var parts = sections[i].split(/=/);
		if(parts[0])
		{
			if(parts[1]!='true')
				if(dge("M" + parts[0]))
				{
					dge("L" + parts[0]).style.background="url(http://dkpfiles.com/dkp-templates/kiljaeden/Menu-HeadClosed2.gif)";
					dge("M" + parts[0]).style.display="none";
				}
		}
	}
}

if(window.addEventListener)
	window.addEventListener("load",readCookies,false);
else if(window.attachEvent)
	window.attachEvent("onload",readCookies);
