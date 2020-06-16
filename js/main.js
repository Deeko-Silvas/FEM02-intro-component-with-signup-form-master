var btn = document.querySelector("button");
var form = document.querySelector("form");
var email = document.getElementById("email");

// adds submitted class to form if not valid to show feedback messages
// and add exmample email to email input
btn.onclick = function() {
    if (!form.reportValidity()) {
        form.classList.add("submitted");
        if (!email.reportValidity()) {
            email.placeholder = "email@example.com"
        }
    } else {
        form.classList.remove("submitted");
    }
}

// removes standard validation messages from form
form.addEventListener( "invalid", 
function( event ) {
    event.preventDefault();
}, true );





