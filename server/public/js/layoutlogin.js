 // Login Page Flipbox control
 $('.login-content [data-toggle="flip"]').click(function () {
    $('.login-box').toggleClass('flipped');
    return false;
});
var check = function () {
    if (document.getElementById('password').value ==
        document.getElementById('password-confirm').value) {
        document.getElementById('message-confirm').style.color = 'green';
        document.getElementById('message-confirm').innerHTML = 'matching';
        return true;
    } else {
        document.getElementById('message-confirm').style.color = 'red';
        document.getElementById('message-confirm').innerHTML = 'not matching';
        return false;
    }
};
$(document).ready(function(){
    $("#ftco-loader").removeClass('show');
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Vui lòng điền vào ô trống");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
});