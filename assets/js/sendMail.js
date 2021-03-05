//sends the email to the used email in EmailJS passing the arguments to the email template

function SubmitForm(contactForm) {
  emailjs.send("service_zbsju9a", "foodwastetemplate", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "message": contactForm.request.value
  })
    //if the information is succesfully submited an alert will be displayed 
    .then(
      function (response) {
        console.log("SUCCESS", response);
        alert('You are the coolest, thank you for contacting us!');
        window.location.href="https://santiagoyanezferreiro.github.io/ZeroFoodWaste/";
        
      },
      function (error) {
        console.log("FAILED", error);
      },
  );
   
  return false; // To block from loading a new page
}
