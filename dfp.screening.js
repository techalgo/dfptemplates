/*
 * Screening DFP template 
 * v.0.1 20171028
 *
 *
 * licence: MIT Licence
 * Copyright 2017 Techalgo.com

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
 *
 */
 
var DFPTMPL = DFPTMPL || {};

// variables
DFPTMPL.html5banner = '[%HTML5BANNER%]'
DFPTMPL.size = '[%BANNERSIZE%]';
DFPTMPL.background = '[%BACKGROUND%]';
DFPTMPL.pos = '[%BGPOSITION%]';
DFPTMPL.click = '%%CLICK_URL_ESC%%';
DFPTMPL.clickurl = '[%CLICKURL%]';
DFPTMPL.cash = '%%CACHEBUSTER%%';

// objects
(function(){
	
	var Q = {};
	
	/*
	 * When creative ready
	 */
	
	Q.onReady = function(e){
		
		Q.setBg();
		
		if(DFPTMPL.html5banner) Q.createHtml5banner();
		
	}
	
	
	Q.setBg = function(){
		
		var pos; (DFPTMPL.pos == 'FIXED') ? pos = 'fixed' : pos = 'scroll';
		
		var b = document.body;
		
		var css = "transparent url('" + DFPTMPL.background + "') no-repeat " + pos + " top center";
		
		b.style.background = css;
		
	}
	
	
	/*
	 * Get Banner
	 */	
	Q.createHtml5banner = function(){

		var size = DFPTMPL.size.split('X');
		
		var w = size[0]; var h = size[1];
		
		var ban = document.createElement("div");
		
		ban.style.width = w + "px";
		
		ban.style.height = h + "px";
		
		ban.style.margin = 'auto';
		
		/* get parent */
		
		var scriptTag = document.getElementsByTagName('script');
		
		scriptTag = scriptTag[scriptTag.length - 1];
		
		var parentTag = scriptTag.parentNode;
		
		parentTag.appendChild(ban);
		
		/* iframe */
		
		var ifr = document.createElement("iframe");
		
		ifr.style.width = w + "px";
		
		ifr.style.height = h + "px";
		
		ifr.style.border = 'none';
		
		ifr.setAttribute('scrolling','no');
		
		/* redir */
		
		var redir = '?redir=' + DFPTMPL.click + DFPTMPL.clickurl;
		
		ifr.src = DFPTMPL.html5banner + redir;
		
		ban.appendChild(ifr);
		
	}

	

	/*
	 * Listen
	 */
	
	document.addEventListener("DFPTMPL_READY", function(e) { Q.onReady(e.detail) });
	
	
	/*
	 * Assign properties to object 
	 */
	
	Object.assign(DFPTMPL, Q);
	
})();


// custom event

DFPTMPL.ready = new CustomEvent("DFPTMPL_READY", { detail: { isReady: true }});

document.dispatchEvent(DFPTMPL.ready);