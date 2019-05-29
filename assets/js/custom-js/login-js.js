
$(document).ready(function () {


    $("#login-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5,
                
            }
        },

        submitHandler: function (form) {
             /*Valid credentials:
             E-mail: amelavatres@gmail.com
             Password: DinoMerlin123#
            */
           var email=document.getElementById("email").value;
           var password=document.getElementById("password").value;


            if(email=="amelavatres@gmail.com" && password=="DinoMerlin123#"){
                toastr.success('Log In successful.');
                setTimeout(function () {
                     window.location = "home.html";
                }, 1000);
            }
            else{
                toastr.error('Invalid credentials. Please try again.');
            }
        }
    });
});


