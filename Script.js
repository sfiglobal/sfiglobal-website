function SendMail() {

  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    Adddress: document.getElementById("Address").value 
  }
  
  emailjs.send("service_ocegbhk", "template_der5znm", params).then
  (function (res) { 
    alert("Success! + res.status");
  })
}