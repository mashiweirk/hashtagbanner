/* Project Global Varables */


// Define Global Varables
//var globObj = {};
var globTxt = {};
var globHTML = {};
var globColors = {};
var globImg = {
        name: "default",
        src: "https://basicincomeproject.org/images/fb-bip-logo-large.png"
    };
//var globContext = {};
var globMirror = {};

// Add Global Property (variable)
globColors = '#34495e';

globImg.name = "first upload";
globImg.src = loadImage('images/fb-bip-logo-large.png', updateInfo);

globTxt.intro = 'app introductions here';

globCanvas = document.getElementById('profileCanavas');
globContext = globCanvas.getContext('2d');
globMirror = document.getElementById('profileMirror');

globHTML = 'trees';

// Add Methods
alert(globImg.name);

// Set new image object to source varable
function loadImage(src, onload) {
		var img = new Image();
		img.onload = onload;
		img.setAttribute('crossOrigin', 'anonymous');
		img.src = src;
	  
		return img;
}

// default campaign
function updateInfo() {
    alert("updateInfo");
    //globCanvas.style.width = globMirror.style.width = '100%';
//globCanvas.style.height = globMirror.style.height = '100%';
		
//globCanvas.width = globMirror.width = parent.innerHeight;
//globCanvas.height = globMirror.height = parent.innerHeight;
    
		globContext.drawImage("https://basicincomeproject.org/images/fb-bip-logo-large.png", 0, 0, globCanvas.width, globCanvas.height);
		//globContext.fillStyle = globColors;
		//globContext.globalAlpha = 0.6;
		//globContext.fillRect(0, ((globCanvas.height / 100) * 85), globCanvas.width, ((globCanvas.height / 100) * 15));
		//globContext.globalAlpha = 1.0;
		//globContext.drawImage(img2, 0, ((globCanvas.height / 100) * 85), globCanvas.width, ((globCanvas.height / 100) * 15));
}