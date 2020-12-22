console.log("Hello");
alert("Hello");

function sendMail(contactform) {
    emailjs.send("gmail", "FoodWasteForm", {
            "from_name": contactform.name.value,
            "from_email": contactform.emailaddress.value,
            "form_request": contactform.requestsummary.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS!", response);

            },
            function(error) {
                console.log("FAILED...", error);
            },
        )
};