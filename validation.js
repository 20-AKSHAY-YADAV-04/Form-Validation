let form = document.getElementById("form");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let EmailAddress = document.getElementById("EmailAddress");
var MobileNumber= document.getElementById("MobileNumber");
var MobileNumber= document.getElementById("MobileNumber");
var Qualification= document.getElementById("Qualification");
var checkHobbies= document.getElementsByName("checkHobbies");
var CommentBox= document.getElementById("CommentBox");
let btnSubmit = document.getElementById("btnSubmit");


document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  formValidationFields();
});


function formValidationFields()
{
  firstNameValidation();
  lastNameValidation();
  emailAddressValidation();
  mobileNumberValidation();
  qualificationValidation();
  hobbiesValidation();
  commentBoxValidation();
}

function firstNameValidation()
{
  firstNameValue = FirstName.value.trim();
  validFirstName = /^[A-Za-z]+$/;
  if (firstNameValue == "")
  {
    document.getElementById("firstNameError").innerText ="First Name is required";
  }
  else if (!validFirstName.test(firstNameValue))
  {
    document.getElementById("firstNameError").innerText ="First Name Must be Only String Without White Spaces";
  }
  else
  {
    document.getElementById("firstNameError").innerText = "";
    return true;
  }
}

function lastNameValidation()
{
  lastNameValue = LastName.value.trim();
  validLastName = /^[A-Za-z]+$/;
  if(lastNameValue == "" )
  {
    document.getElementById("lastNameError").innerText ="Last Name is required";
  }
  else if (!validLastName.test(lastNameValue))
  {
    document.getElementById("lastNameError").innerText ="Last Name Must be Only String Without White Spaces";
  }
  else
  {
    document.getElementById("lastNameError").innerText = "";
    return true;
  }
}
function emailAddressValidation()
{
  emailValue = EmailAddress.value.trim();
  validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailValue=="")
  {
    document.getElementById("emailAddressError").innerText ="Email cannot be blank";
  }
  else if(!validEmailAddress.test(emailValue))
  {
    document.getElementById("emailAddressError").innerText ="Your Entered Email is Not Valid";
  }
  else
  {
    document.getElementById("emailAddressError").innerText = "";
    return true;
  }

}

function mobileNumberValidation()
{
  mobileNumberValue = MobileNumber.value.trim();
  if(mobileNumberValue=="")
  {
    document.getElementById("mobileNumberError").innerText = "Mobile Number is required";
  }
  else if(mobileNumberValue.length!=10)
  {
    document.getElementById("mobileNumberError").innerText="Mobile Number must have 10 digits";
  }
  else
  {
    document.getElementById("mobileNumberError").innerText = "";
    return true;
  }
}

function qualificationValidation()
{
  QualificationValue = Qualification.value.trim();
  if (QualificationValue === "Select Qualification")
  {
    document.getElementById("qualificationError").innerText = "Please Select";
  }
  else
  {
    document.getElementById("qualificationError").innerText="";
    return true
  }
}

function hobbiesValidation()
{
  if (checkHobbies == null) 
  {
    document.getElementById("hobbiesError").innerText  = "Please Choose Minimum One or More Hobbies";
  }
  else
  {
    document.getElementById("hobbiesError").innerText="";
    return true
  }
}

function commentBoxValidation()
{
  CommentBoxValue = CommentBox.value.trim();
  if (CommentBoxValue == "")
  {
    document.getElementById("commentError").innerText = "Please Write Your Commen";
  }
  else
  {
    document.getElementById("commentError").innerText="";
    return true
  }
}