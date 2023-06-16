//javascript version


// function init() {
//     var user = document.getElementById("user");
//     var check = document.getElementById("password2")
//     var form = document.getElementById("form")
//     var buttonPopup = document.getElementById("rulePassword")

//     buttonPopup.addEventListener("click", showPopup)
//     check.addEventListener("keyup", checkPass)

//     form.addEventListener("submit", verifyPassword)
//     user.addEventListener("mouseover", show);
//     user.addEventListener("mouseout", hide);



// }
// function showPopup(){
//   var popup =document.getElementById("popup")
//   console.log("click")
//   if (popup.style.display === "none") {
//     popup.style.display = "inline";
//   } else {
//     popup.style.display = "none";
//   }

// }

// function show() {
//     var tooltip = document.getElementById("sidTip");
//     tooltip.style.display = "inline";
// }

// function hide() {
//     var tooltip = document.getElementById("sidTip");
//     tooltip.style.display = "none";
// }

// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password1");

// togglePassword.addEventListener("click", function () {
//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);
// });

// const form = document.querySelector("form");
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
// });




// function checkPass() {
//     if (document.getElementById('password1').value ==
//       document.getElementById('password2').value) {
//       document.getElementById('message').style.color = 'green';
//       document.getElementById('message').innerHTML = 'matching';
//     } else {
//       document.getElementById('message').style.color = 'red';
//       document.getElementById('message').innerHTML = 'not matching';
//     }
//   }
//   function verifyPassword() {  
//     var pw = document.getElementById("password1").value;  
     
//     if(pw == "") {  
//        document.getElementById("message1").innerHTML = "Null!";  
//        return false;  
//     }  
      
//     if(pw.length < 8) {  
//        document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
//        return false;  
//     }  
     
//     if(pw.length > 15) {  
//        document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
//        return false;  
//     } else {  
//        alert("Password is correct");  
//     }  
//   }  
// window.onload = init;



//Jquery version
$(document).ready(function() {
  var user = $("#user");
  var check = $("#password2");
  var form = $("#form");
  var buttonPopup = $("#rulePassword");

  buttonPopup.on("click", showPopup);
  check.on("keyup", checkPass);

  form.on("submit", verifyPassword);
  user.on("mouseover", show);
  user.on("mouseout", hide);

  function showPopup() {
    var popup = $("#popup");
    console.log("click");
    if (popup.css("display") === "none") {
      popup.css("display", "inline");
    } else {
      popup.css("display", "none");
    }
  }

  function show() {
    var tooltip = $("#sidTip");
    tooltip.css("display", "inline");
  }

  function hide() {
    var tooltip = $("#sidTip");
    tooltip.css("display", "none");
  }

  var togglePassword = $("#togglePassword");
  var password = $("#password1");

  togglePassword.on("click", function() {
    var type = password.attr("type") === "password" ? "text" : "password";
    password.attr("type", type);
  });

  form.on("submit", function(e) {
    e.preventDefault();
  });

  function checkPass() {
    if ($("#password1").val() === $("#password2").val()) {
      $("#message").css("color", "green");
      $("#message").html("matching");
    } else {
      $("#message").css("color", "red");
      $("#message").html("not matching");
    }
  }

  function verifyPassword() {
    var pw = $("#password1").val();

    if (pw === "") {
      $("#message1").html("Null!");
      return false;
    }

    if (pw.length < 8) {
      $("#message1").html("**Password length must be at least 8 characters");
      return false;
    }

    if (pw.length > 15) {
      $("#message1").html("**Password length must not exceed 15 characters");
      return false;
    } else {
      alert("Password is correct");
    }
  }
});
