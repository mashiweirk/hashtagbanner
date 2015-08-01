
window.fbAsyncInit = function () {
 
    FB.init({
        appId: '1632306423658276', // App ID (old: 675793779103244)
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
            console.log("Facebook connected.");
            // connected ... do we have needed permissions?
            FB.login(function(response) {

                getProfileImage();
            }, {scope: 'publish_actions,user_photos'});
        
          } else if (response.status === 'not_authorized') {
            console.log("Facebook not authorized.");
            //app not_authorized
            FB.login(function(response) {
                if (response && response.status === 'connected') {
                    getProfileImage();
                }
            }, {scope: 'publish_actions,user_photos'});
        
          } else {
            console.log("Facebook is ??");
            // not_logged_in to Facebook
            FB.login(function(response) {
                if (response && response.status === 'connected') {
                    getProfileImage();
                }
            }, {scope: 'publish_actions,user_photos'});
          }
    });

}

function uploadPhotoToFacebook() {    
    FB.api(
        "/me/photos",
        "POST",
        {
            "url": "http://basicincomeproject.org/wp-content/plugins/wp-banner-plugin/images/fb-bip-logo-large.png"
        },
        function (response) {
            if (response && !response.error) {

                window.open("http://www.facebook.com/photo.php?fbid=" + response.id + "&makeprofile=1", "_blank");
            } else {
                // handle error
                console.log("there was an error:\n %o", response);
            }
        }
    );
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