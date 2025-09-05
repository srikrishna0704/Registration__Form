
    // Create form
    let form = document.createElement("form");

    // --- Name Field ---
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Full Name: ";
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));

    // --- Email Field ---
    let emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: ";
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));

    // --- Password Field ---
    let passLabel = document.createElement("label");
    passLabel.textContent = "Password: ";
    let passInput = document.createElement("input");
    passInput.type = "password";
    passInput.id = "password";
    form.appendChild(passLabel);
    form.appendChild(passInput);
    form.appendChild(document.createElement("br"));

    // --- DOB Field ---
    let dobLabel = document.createElement("label");
    dobLabel.textContent = "Date of Birth: ";
    let dobInput = document.createElement("input");
    dobInput.type = "date";
    dobInput.id = "dob";
    form.appendChild(dobLabel);
    form.appendChild(dobInput);
    form.appendChild(document.createElement("br"));

    // --- Submit Button ---
    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Register";
    submitBtn.type = "button"; // avoid default submit
    form.appendChild(submitBtn);

    // Append form to body
    document.body.appendChild(form);

    // --- Event Handling ---
    submitBtn.addEventListener("click", function() {
      let name = nameInput.value.trim();
      let email = emailInput.value.trim();
      let password = passInput.value.trim();
      let dob = dobInput.value;

      if (name === "" || email === "" || password === "" || dob === "") {
        alert("All fields are required!");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Enter a valid email address.");
        return;
      }

      alert("Registration Successful!\n\nName: " + name +
            "\nEmail: " + email +
            "\nDOB: " + dob);
    });
 
