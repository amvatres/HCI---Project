
$(document).ready(function () {

    /**
     * Custom validator for contains at least one upper-case letter.
     */
    $.validator.addMethod("atLeastOneUppercaseLetter", function (value, element) {
        return this.optional(element) || /[A-Z]+/.test(value);
    }, "Must have at least one uppercase letter.");

    /**
     * Custom validator for contains at least one number.
     */
    $.validator.addMethod("atLeastOneNumber", function (value, element) {
        return this.optional(element) || /[0-9]+/.test(value);
    }, "Must have at least one number.");

    /**
     * Custom validator for contains at least one symbol.
     */
    $.validator.addMethod("atLeastOneSymbol", function (value, element) {
        return this.optional(element) || /[!@#$%^&*()]+/.test(value);
    }, "Must have at least one special character.");

    $("#registration-form").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5,
                atLeastOneUppercaseLetter: true,
                atLeastOneNumber: true,
                atLeastOneSymbol: true
            },
            password_repeat: {
                required: true,
                equalTo: "#password"
            }
        },

        submitHandler: function (form) {
             /*Valid credentials:
             Name and Surname: Amela Vatreš
             E-mail: amelavatres@gmail.com
             Password: DinoMerlin123#
            */
           var name=document.getElementById("name").value;
           var email=document.getElementById("email").value;
           var password=document.getElementById("password").value;


            if(name=="Amela Vatreš" && email=="amelavatres@gmail.com" && password=="DinoMerlin123#"){
                toastr.success('Registration successful.');
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


