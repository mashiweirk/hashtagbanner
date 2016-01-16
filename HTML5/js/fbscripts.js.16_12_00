
window.fbAsyncInit = function () {
 
    FB.init({
        appId: '675793779103244', // App ID
        channelUrl: 'http://basicincomeproject.org/fb/channel.html', // Channel File
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse XFBML
        fileUpload: true
    });
 
};

function facebookLogin() {
 
    FB.getLoginStatus(function(response) {
 
          if (response.status === 'connected') {
            // connected
            getProfileImage();
 
          } else if (response.status === 'not_authorized') {
            //app not_authorized
            FB.login(function(response) {
                if (response && response.status === 'connected') {
                    getProfileImage();
                }
            });
 
          } else {
            // not_logged_in to Facebook
            FB.login(function(response) {
                if (response && response.status === 'connected') {
                    getProfileImage();
                }
            });
          }
    });

}

function getProfileImage() {

		    var $photo = $('.photo'),
		    	$btn = $('.btn-fb'),
				$fbPhoto = $('img.fb-photo');
		
		    //uploading
		    $btn.text('Uploading...');     
            
            FB.api('/me', function(response){
                var myFBCanvasID = response.id;
                img1 = loadImage('http://graph.facebook.com/' + myFBCanvasID + '/picture?width=' + cnvs.width + '&height=' + cnvs.height, updateInfo);
                $btn.addClass('hide');
            });
		    
}

// Load the SDK Asynchronously
(function (d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));