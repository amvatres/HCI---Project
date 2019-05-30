$('#datepicker').datepicker({
    uiLibrary: 'bootstrap'
});

function goBack() {
    window.history.back();
}
$(document).ready(function () {


    $("#paymentForm").validate({
        credit_card: {
            credit_card: {
                required: true
            },
            code: {
                required: true
            }
        },

        submitHandler: function (form) {
             /*Valid credentials:
             Credit card: 123456789123
             Code: 123
            */
           var credit_card=document.getElementById("credit_card").value;
           var code=document.getElementById("code").value;


            if(credit_card=="123456789123" && code=="123"){
                toastr.info('Ticket bought. Online version will be sent to your e-mail.');
                setTimeout(function () {
                     window.location = "concert.html";
                }, 1000);
            }
            else{
                toastr.error('Invalid payment information. Please try again.');
            }
        }
    });
});


