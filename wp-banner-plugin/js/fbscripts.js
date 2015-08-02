var myFBCanvasID = 0;
var access_token = "";

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
                access_token = FB.getAuthResponse()['accessToken'];
                getProfileImage();
            }, {scope: 'publish_actions,user_photos'});
        
          } else if (response.status === 'not_authorized') {
            console.log("Facebook not authorized.");
            //app not_authorized
            FB.login(function(response) {
                if (response && response.status === 'connected') {
                    access_token = FB.getAuthResponse()['accessToken'];
                    getProfileImage();
                }
            }, {scope: 'publish_actions,user_photos'});
        
          } else {
            console.log("Facebook is ??");
            // not_logged_in to Facebook
            FB.login(function(response) {
                if (response && response.status === 'connected') {
                    access_token = FB.getAuthResponse()['accessToken'];
                    getProfileImage();
                }
            }, {scope: 'publish_actions,user_photos'});
          }
    });

}

function uploadPhotoToFacebook() {
    var cnvs = document.getElementById('cnvs'), ctx = cnvs.getContext('2d'), mirror = document.getElementById('mirror');
    var mimeType = 'image/png';
    var imageData = cnvs.toDataURL(mimeType);

    var blob;
    try {
        var byteString = atob(imageData.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        blob = new Blob([ab], {type: 'image/png'});

    } catch (e) {
        console.log(e);
    }

    var fd = new FormData();

    fd.append("access_token", access_token);
    fd.append("source", blob);

    try{
       $.ajax({
            url:"https://graph.facebook.com/" + myFBCanvasID + "/photos?access_token=" + access_token,
            type:"POST",
            data:fd,
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                console.log("success " + data);
                //TODO: open this as a popup window... on desktops, this will create an ADDITIONAL popup that offers to set the photo as the profile photo
                window.open("http://www.facebook.com/photo.php?fbid=" + data.id + "&makeprofile=1", "_blank");
            },
            error:function(shr,status,data){
                console.log("error " + data + " Status " + shr.status);
            },
            complete:function(){
                console.log("Ajax Complete");
            }
        });

    } catch(e){
        console.log(e);
    }    
}

function getProfileImage() {
            var $photo = $('.photo'),
                $btn = $('.btn-fb'),
                $fbPhoto = $('img.fb-photo');
        
            //uploading
            $btn.text('Uploading...');     
            
            FB.api('/me', function(response){
                myFBCanvasID = response.id;
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