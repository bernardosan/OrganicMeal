document.addEventListener('DOMContentLoaded', function() {
    const ctaForm = document.querySelector(".cta-form");
  
    let fullnameInput = document.getElementById("full-name");
    let fullnameLabel = document.querySelector('label[for="full-name"]');
    let fullnameHelper = document.getElementById("full-name-helper");
  
    let emailInput = document.getElementById("email");
    let emailLabel = document.querySelector('label[for="email"]');
    let emailHelper = document.getElementById("email-helper");
  
  
    // Event listener for form submission
    ctaForm.addEventListener('submit', function(event) {
        // Prevent default form submission to avoid page refresh
        event.preventDefault();

        var flag_error = false;
  
        // Check email format
        if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
            emailInput.classList.add('correct');
            emailInput.classList.remove('error');
            emailHelper.classList.remove('visible');
        } else {
            emailInput.classList.remove('correct');
            emailInput.classList.add('error');
            emailHelper.classList.add('visible');
            flag_error = true;
        }
  
        // Check fullname length
        const fullname = fullnameInput.value.trim();
        if (fullname.length >= 6) {
            fullnameInput.classList.add('correct');
            fullnameInput.classList.remove('error');
            fullnameHelper.classList.remove('visible');
        } else {
            fullnameInput.classList.remove('correct');
            fullnameInput.classList.add('error');
            fullnameHelper.classList.add('visible');
            flag_error = true;
        }

        if(flag_error == false){
            alert("Registro realizado!")
        }
    });
  });
  