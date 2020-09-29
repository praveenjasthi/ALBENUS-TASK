function myfunction() {}

var validation = true;

document
    .getElementById("submit-button")
    .addEventListener("click", function(e) {
        e.preventDefault();

        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmpassword = document.getElementById("confirmpassword").value;
        var number = document.getElementById("number").value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (
            firstname != "" &&
            lastname != "" &&
            email != "" &&
            password != "" &&
            confirmpassword != "" &&
            number != ""
        ) {
            if (firstname == "" || firstname.length <= 3 || firstname.length > 10) {
                document.getElementById("message1").innerHTML =
                    "Name should be 3-10 char";

                return false;
            } else if (
                lastname == "" ||
                lastname.length <= 3 ||
                lastname.length > 10
            ) {
                document.getElementById("message2").innerHTML =
                    "Name should be 3-10 char";

                return false;
            } else if (
                password == "" ||
                password.length < 8 ||
                password.length > 15
            ) {
                document.getElementById("message4").innerHTML = "cannot be empty";
                return false;
            } else if (confirmpassword == "" || password != confirmpassword) {
                document.getElementById("message5").innerHTML =
                    " passwords not matching";

                return false;
            } else if (number == "" || isNaN(number) || number.length != 10) {
                document.getElementById("message6").innerHTML = "cannot be empty";

                return false;
            } else if (email == "") {
                document.getElementById("message3").innerHTML = "cannot be empty";
                return false;
            } else {
                alert("all are working fine");
                document.getElementById("form").reset();
            }
        } else {
            alert("Please enter all values");
        }
    });