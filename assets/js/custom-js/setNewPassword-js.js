
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

    $("#setNewPassword-form").validate({
        rules: {
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
             Password: DinoMerlin321#
            */
           var password=document.getElementById("password").value;


            if(password=="DinoMerlin321#"){
                toastr.success('Password successfully changed.');
                setTimeout(function () {
                     window.location = "home.html";
                }, 1000);
            }
            else{
                toastr.error('Password is not changed.');
            }
        }
    });
});


