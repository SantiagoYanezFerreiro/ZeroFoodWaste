function formSubmit(contactForm) {
  emailjs.send("gmail", "foodwastetemplate", {
      "from_name": contactForm.name.value,
      "from_email":contactForm.email.value,
      "message": contactForm.request.value
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}
