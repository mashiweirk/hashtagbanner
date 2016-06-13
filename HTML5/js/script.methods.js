/* Basic Income Project JS Functions */
// Basic Income Banner Scripts
/*
var cnvs = document.getElementById('profileArea'),
    ctx = cnvs.getContext('2d'),
    mirror = document.getElementById('profileMirror');

var cw = $('.canvas__container').width();
$('.canvas__container').css({
    'height': cw + 'px'
});
*/


//col = '#34495e';

// Default Photo and Banner
//var img1 = loadImage('images/fb-bip-logo-large.png', updateInfo);
//var img2 = loadImage('images/hashtag-basicincome-white.png', updateInfo);

/*
var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = cnvs.toDataURL('image/png');
    button.href = dataURL;
});
*/
/*
function loadImage(src, onload) {
  var img = new Image();
  img.onload = onload;
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = src;

  return img;
};
*/
/*
function updateInfo(col) {

  ctx.drawImage(img1, 0, 0, cnvs.width, cnvs.height);
  ctx.fillStyle = col;
  ctx.globalAlpha = 0.6;
  ctx.fillRect(0, ((cnvs.height / 100) * 85), cnvs.width, ((cnvs.height / 100) * 15));
  ctx.globalAlpha = 1.0;
  ctx.drawImage(img2, 0, ((cnvs.height / 100) * 85), cnvs.width, ((cnvs.height / 100) * 15));
  //saveimage();
};
*/
/*
function saveimage() {
	var dataURL = cnvs.toDataURL('image/png');
    button.href = dataURL;
};
*/
/*
//resize profile function
(function resizeProfile() {
    var profileArea = document.getElementById('profileArea');
    var newWidth = parent.innerWidth;
    var newHeight = parent.innerHeight;
    var profileCanvas = document.getElementById('profileCanvas');

    profileCanvas.width = newWidth;
    profileCanvas.height = newHeight;
	ctx = profileArea.getContext('2d');
    profileMirror = document.getElementById('profileMirror');
	profileArea.style.width = mirror.style.width = '100%';
	profileArea.style.height = mirror.style.height = '100%';
	profileArea.width = mirror.width = parent.innerHeight;
	profileArea.height = mirror.height = parent.innerHeight;

});

// Selecte Campaign Content
function changeCampaign(selected) {
	var p = document.getElementById("DynamicContent");
    remElement(p);
	
/*
	var emlementContent = document.getElementById("campaign");
    var htmlContent = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
    '<input type="hidden" name="cmd" value="_s-xclick">' +
    '<input type="submit" value="Donate" name="submit" title="PayPal - The safer, easier way to pay online!" class="btn btn-lg btn-donate">' +
    '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
    '</form>' +
    '<p>Please support the Basic Income cause by donating and by sharing this page with your friends.</p><br/>';
    
    node.innerHTML = htmlContent;
*//*
};

function loadImage(src, onload) {
  var img = new Image();
  img.onload = onload;
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = src;

  return img;
};

function updateInfo(col) {

		// Set defauly and profile photo
		ctx.drawImage(img1, 0, 0, profileArea.width, profileArea.height);

		// Create pattern and don't repeat! 
		var ptrn = ctx.createPattern(img2,'no-repeat');
		ctx.fillStyle = ptrn;
		ctx.globalAlpha = 0.7;
		ctx.fillRect(0, 0, profileArea.width, profileArea.height);

		ctx.fillStyle = col;

/* // #basicincome style
  ctx.drawImage(img1, 0, 0, profileArea.width, profileArea.height);
  ctx.fillStyle = col;
  ctx.globalAlpha = 0.6;
  ctx.fillRect(0, ((profileArea.height / 100) * 85), profileArea.width, ((profileArea.height / 100) * 15));
  ctx.globalAlpha = 1.0;
  ctx.drawImage(img2, 0, ((profileArea.height / 100) * 85), profileArea.width, ((profileArea.height / 100) * 15));
  //saveimage();
*//*
};
*//*
function saveimage() {
	dataURL = profileArea.toDataURL('image/png');
    button.href = dataURL;
};

function addElement(parentId, elementTag, elementId, html) {
	// Adds an element to the document
	p = document.getElementById(parentId);
	newElement = document.createElement(elementTag);
	newElement.setAttribute('id', elementId);
	newElement.innerHTML = html;
	p.appendChild(newElement);
};
*/

/*
function remElement() {
	// Removes an element from the document
	//var element = document.getElementById(elementId);
	alert(globText.intro);
	//element.parentNode.removeChild(element);
}
/*
ul.onclick = function(event) {
    var target = getEventTarget(event);
    alert("default selected");
};
*/
/*
(function() {
  $('.btn-fb').on('click', function(e) {
	e.preventDefault();
	facebookLogin();
  });
  $('li').on('click', function(e) {
	e.preventDefault();
	alert('$globTxt.title');
  });
})();
*/