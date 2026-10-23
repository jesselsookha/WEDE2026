// ============================================================
// process.js
// JavaScript for the Workshop Registration form.
// ============================================================


// ============================================================
// Step 1 — Let JavaScript find the form
// ============================================================
let form = document.getElementById("registrationForm");


// ============================================================
// Step 2 — Listen for the form submission
// ============================================================
form.addEventListener("submit", function (event) {

    event.preventDefault();


    // ========================================================
    // Step 3 — Read the values from the form
    // ========================================================
    let studentName   = document.getElementById("studentName").value;
    let studentNumber = document.getElementById("studentNumber").value;
    let email         = document.getElementById("email").value;
    let workshop      = document.getElementById("workshop").value;


    // ========================================================
    // Step 4 — Validate the input
    // ========================================================
    let response = document.getElementById("response");

    if (studentName === "" || studentNumber === "" || email === "") {

        response.innerHTML =
            "<span class='error'>Please fill in all fields before registering.</span>";

        return;

    }


    // ========================================================
    // Step 5 — Process the information
    // ========================================================
    let registrationNumber =
        "REG-" + studentNumber + "-" + Date.now();

    let message =
        "Thank you, " + studentName + ".\n" +
        "You have registered for " + workshop + ".\n" +
        "A confirmation has been sent to " + email + ".";

    console.log(registrationNumber);
    console.log(message);


    // ========================================================
    // Step 6 — Build the acknowledgement URL
    // ========================================================

    // file acknowledgement.html > 40-workshop-acknowledgement.html
    let url =
        "acknowledgement.html" +
        "?name="         + encodeURIComponent(studentName) +
        "&student="      + encodeURIComponent(studentNumber) +
        "&email="        + encodeURIComponent(email) +
        "&workshop="     + encodeURIComponent(workshop) +
        "&registration=" + encodeURIComponent(registrationNumber);

    console.log(url);


    // ========================================================
    // Step 7 — Navigate to the acknowledgement page
    // ========================================================
    window.location.href = url;

});

/*
                    index.html
                        |
                  user fills in form
                        │
                        ▼
                    process.js
                        │
              READ → VALIDATE → PROCESS
                        │
                        ▼
            acknowledgement.html?name=...
                        │
                        ▼
              acknowledgement.html
                        │
                 READ URL PARAMETERS
                        │
                        ▼
                     DISPLAY
*/