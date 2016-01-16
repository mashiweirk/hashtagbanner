// Basic Income Banner Scripts

var bMouseIsDown = false,
  iLastX, iLastY,
  $save, $imgs,
  $convert, $imgW, $imgH, $URL,
  $sel;

var cnvs = document.getElementById('cnvs'),
    ctx = cnvs.getContext('2d'),
    mirror = document.getElementById('mirror');

var cw = $('.canvas__container').width();
$('.canvas__container').css({
    'height': cw + 'px'
});


cnvs.style.width = mirror.style.width = '100%';
cnvs.style.height = mirror.style.height = '100%';

cnvs.width = mirror.width = parent.innerHeight;
cnvs.height = mirror.height = parent.innerHeight;

col = '#34495e'	

// Default Photo and Banner
var img1 = loadImage('images/fb-bip-logo-large.png', updateInfo);
var img2 = loadImage('images/hashtag-basicincome-white.png', updateInfo);

var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = cnvs.toDataURL('image/png');
    button.href = dataURL;
});

function loadImage(src, onload) {
  var img = new Image();
  img.onload = onload;
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = src;

  return img;
};

function updateInfo(col) {

  ctx.drawImage(img1, 0, 0, cnvs.width, cnvs.height);
  ctx.fillStyle = col;
  ctx.globalAlpha = 0.6;
  ctx.fillRect(0, ((cnvs.height / 100) * 85), cnvs.width, ((cnvs.height / 100) * 15));
  ctx.globalAlpha = 1.0;
  ctx.drawImage(img2, 0, ((cnvs.height / 100) * 85), cnvs.width, ((cnvs.height / 100) * 15));
  //saveimage();
};

function saveimage() {
	var dataURL = cnvs.toDataURL('image/png');
    button.href = dataURL;
}

(function() {
  $('.btn-fb').on('click', function(e) {
	e.preventDefault();
	facebookLogin();
  });
})();