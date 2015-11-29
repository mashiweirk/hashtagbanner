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

    var blob;
    
    document.getElementById("btn-upload").className = document.getElementById("btn-upload").className.replace( /(?:^|\s)active(?!\S)/g , ' disabled' )
    document.getElementById("btn-upload").className += " hide";
    
    // Create donate button
    var node = document.getElementById("donate");
    var htmlp = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
    '<input type="hidden" name="cmd" value="_s-xclick">' +
    '<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHXwYJKoZIhvcNAQcEoIIHUDCCB0wCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYC8MPekozh4XukBAW2MsticlIJ7f5423JLkTqw02hVwOVaIpanqrPyaJUbnFsSwe1dlGjnA0Wi/3Cvp7DSxBkWDe0F1SCVFwRq4k/G5uzuKGTeFnHztJ/d6lm+VMwKjisxERdsIVUxmRXgHB+YFNanCSJfA7x295W54k7otzhL8DTELMAkGBSsOAwIaBQAwgdwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIFFlbigMMGymAgbhrr2jVPPV1RVj638aCaTB5ssUFDv+NzBogieI9oUnBn8fozlMVNpxOXR9khjJCANQhmt7Te6uOJmU+RXGO0z8yFHBsQjWg60ZLZS8PUnmv+lIqxScl9qGKQ+yC8rGH3v190PoLgT6XfO6tCqtTmGcbDVtnFFgMhitig96j8tO/WanGdw+INhov9eUU7Lmr6xIe4IupsNIpyW+i/2unvSVklO04wBJdavj5oUBs/WutshtgT0s321CMoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTUwODA1MDEzNjQ4WjAjBgkqhkiG9w0BCQQxFgQUPVvxd3fXJT24uABkbe0QXKZPjeEwDQYJKoZIhvcNAQEBBQAEgYBbqMr8qeSqiS5DehxZrzICuzpeLS7grV2CU3TSGXV9AI1RgHvyGzIw35tVVeoYjSmgruPY00j9VMLJUJRUCQCa2Hr3G/VxXHRV7wGTY4SSlzmEKHULM6QWsryjZT8mRWb+x40SIxy7gPnV8vFLuza0uyvRGIgvGtF3zrGR0yFOUw==-----END PKCS7-----">' +
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
                //TODO: switched to mobile FB to avoid croping , need device browser recognition or no cropping.
                window.open("http://m.facebook.com/photo.php?fbid=" + data.id + "&makeprofile=1", "_blank");
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
                document.getElementById("btn-upload").className = document.getElementById("btn-upload").className.replace( /(?:^|\s)disabled(?!\S)/g , ' active' )
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
