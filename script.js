// responsive menu toggle
let togglemenu = document.querySelector(".toggle_btn");
let togglebtnicon = document.querySelector(".toggle_btn i");
let dropdownmenu = document.querySelector(".dropdown_menu");

togglemenu.onclick = function () {
  dropdownmenu.classList.toggle("open");
  let isOpen = dropdownmenu.classList.contains("open");

  togglebtnicon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
// validation for form
function validateForm() {
  console.log("validate form init");
  let fullName = document.querySelector("#full_name").value;
  let fullNameSize = fullName.length;
  console.log(fullNameSize);

  let phoneNumber = document.querySelector("#phone_number").value;
  let phoneNumberSize = phoneNumber.length;

  let message = document.querySelector("#your_message").value;
  let messageSize = message.length;

  let emailId = document.querySelector("#email_id").value;
  let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (fullNameSize <= 3) {
    document.querySelector(".error_message").innerText =
      "Name is required with minium 4 characters!!";
  } else if (!emailId.match(emailFormat)) {
    document.querySelector(".error_message").innerText =
      "This is not valid email id";
  } else if (phoneNumberSize !== 10) {
    document.querySelector(".error_message").innerText =
      "Phone number should be 10 digit";
  } else if (messageSize <= 10) {
    document.querySelector(".error_message").innerText =
      "Message is required with minium 10 characters!!";
  } else {
    console.log("not matching...");
    document.querySelector(".error_message").innerText = "";
    document.querySelector(".success_message").innerText =
      "Submit Successfully";
  }
}
