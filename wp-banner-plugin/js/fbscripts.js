var myFBCanvasID = 0;
var access_token = "";

window.fbAsyncInit = function () {
 
    FB.init({
        appId: '675793779103244', // App ID (old: 675793779103244)
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
    var uploadButton = document.getElementById("btn-upload");

    var blob;
    
    uploadButton.className = uploadButton.className.replace( /(?:^|\s)active(?!\S)/g , ' disabled' );
    
    // Create donate button
    var node = document.getElementById("donate");
    var htmlp = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
    '<input type="hidden" name="cmd" value="_s-xclick">' +
    '<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">' +
    '<input type="submit" value="Donate" name="submit" title="PayPal - The safer, easier way to pay online!" class="btn btn-lg btn-donate">' +
    '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
    '</form>' +
    '<p>Please support the Basic Income cause by donating and by sharing this page with your friends.</p><br/>';
    
    node.innerHTML = htmlp;
    
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
        uploadButton.innerHTML = "Uploading...";
       $.ajax({
            url:"https://graph.facebook.com/" + myFBCanvasID + "/photos?access_token=" + access_token,
            type:"POST",
            data:fd,
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                console.log("success " + data);
                windowOptions = "_blank";
                subDomain = "www";
                getParams = "&makeprofile=1";
                if (mobileCheck() === true) {
                    windowOptions = "";
                    subDomain = "m";
                    getParams = "&prof";
                }
                uploadButton.innerHTML = "Success!";
                linkUrl = "http://" + subDomain + ".facebook.com/photo.php?fbid=" + data.id + getParams;
                uploadButton.href = linkUrl;
                uploadButton.innerHTML = "Set as my profile photo.";
                uploadButton.className = uploadButton.className.replace( /(?:^|\s)disabled(?!\S)/g , ' active' );
                window.open(linkUrl, options);
            },
            error:function(shr,status,data){
                uploadButton.innerHTML = "Error: " + data;
                console.log("error " + data + " Status " + shr.status);
            },
            complete:function(){
                console.log("Ajax Complete");
                // create a clear-waiting status here
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
                document.getElementById("btn-upload").className = document.getElementById("btn-upload").className.replace( /(?:^|\s)disabled(?!\S)/g , ' active' )
            });
		    
}

function mobileCheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
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