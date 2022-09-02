let form = document.getElementById("form");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let EmailAddress = document.getElementById("EmailAddress");
var MobileNumber= document.getElementById("MobileNumber");
var Qualification= document.getElementById("Qualification");
var checkHobbies= document.getElementsByName("checkHobbies");
var CommentBox= document.getElementById("CommentBox");
let checkboxes = document.getElementsByName("Hobbies");
let Gender = document.querySelector("input[name = gender]:checked");

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

  if(firstNameValidation()==true && 
    lastNameValidation()==true && 
    emailAddressValidation() == true && 
    mobileNumberValidation()==true && 
    qualificationValidation()==true && 
    hobbiesValidation()==true && 
    commentBoxValidation()==true )
  {
    tableDataShow();
    return true;
  }
  else
  {
    return false;
  }
};

// First Name Validation Function
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
};

// Last Name Validation Function
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
};

// Email Address Validation Function
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
};

// Mobile Number Validation Function
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
};

// Qualification Validation Function
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
};

// Hobbies Validation Function
function hobbiesValidation()
{
  var checked = 0;
  var chkHobbies = document.getElementById("checkHobbies");
  var chks = chkHobbies.getElementsByTagName("input");
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked)
    {
      checked++;
    }
  }
  if (checked == "")
  {
    document.getElementById("hobbiesError").innerText = "Please Select Atleast One or Two hobbiesError";
  }
  else 
  {
    document.getElementById("hobbiesError").innerText = "";
    return true;
  }
};

// CommentBox Validation Function
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
};

// Show Data Function
tableDataShow = () => {
  let chk = [];
  for (let key in checkboxes) {
    if (checkboxes[key].checked == true) {
      chk.push(checkboxes[key].value);
    }
  }
  console.log(chk)
  document.querySelector("#showData").innerHTML += `
    <tr class="text-center rounded-3">
      <th>${FirstName.value}</th>
      <td>${LastName.value}</td>
      <td>${EmailAddress.value}</td>
      <td>${MobileNumber.value}</td>
      <td>${Qualification.value}</td>
      <td>${Gender.value}</td>
      <td>${chk.toString()}</td>
      <td>${CommentBox.value}</td>
    </tr>
  `;
  form.reset();
};