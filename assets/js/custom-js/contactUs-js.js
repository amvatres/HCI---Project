
$(document).ready(function () {


    $("#sendMessage").validate({
        email: {
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                maxlength: 255,
                
            }
        },

        submitHandler: function (form) {
             /*Valid credentials:
             E-mail: amelavatres@gmail.com
            */
           var email=document.getElementById("email").value;


            if(email=="amelavatres@gmail.com" ){
                toastr.info('Message sent. Thank you.');
                setTimeout(function () {
                     window.location = "home.html";
                }, 1000);
            }
            else{
                toastr.error('Invalid e-mail. Please try again.');
            }
        }
    });
});


