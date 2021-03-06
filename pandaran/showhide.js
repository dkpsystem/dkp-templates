
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
	var headerimg = dge("L" + menu);
	var ob = dge("M" + menu);

	if (jq(headerimg).hasClass("MenuClosed")) {
		jq(ob).slideDown(300);
		jq(headerimg).removeClass("MenuClosed").addClass("MenuOpen");
		setCookie(menu, true, 365);
	} else {
		jq(ob).css("height",jq(ob).height() + "px");
		jq(ob).slideUp(300);
		jq(headerimg).removeClass("MenuOpen").addClass("MenuClosed");
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
					var Cat = dge("L" + parts[0]);
					var Menu = dge("M" + parts[0]);
					jq(Cat).removeClass("MenuOpen").addClass("MenuClosed");
					jq(Menu)
						.css("height",jq(Menu).height() + "px")
						.hide();
				}
		}
	}
}


