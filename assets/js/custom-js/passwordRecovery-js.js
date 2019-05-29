
$(document).ready(function () {


    $("#passwordRecovery-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },

        submitHandler: function (form) {
             /*Valid credentials:
             E-mail: amelavatres@gmail.com
            */
           var email=document.getElementById("email").value;
    
            if(email=="amelavatres@gmail.com"){
                toastr.info('Link for password recovery sent to your e-mail.');
                setTimeout(function () {
                     window.location = "setNewPassword.html";
                }, 1000);
            }
            else{
                toastr.error('Invalid e-mail. Please try again.');
            }
        }
    });
});


