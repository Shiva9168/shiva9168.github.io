document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("myLinks");

    // Dark Mode
    let darkmode = document.querySelector('#darkmode');

    // Check if user preference is already saved in local storage
    let isDarkMode = localStorage.getItem('isDarkMode');

    // If user preference is saved, update the UI accordingly
    if (isDarkMode) {
    if (isDarkMode === 'true') {
        darkmode.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.remove('active');
    }
    }

    // Toggle dark mode
    darkmode.onclick = () => {
    if (darkmode.classList.contains('fa-moon')) {
        darkmode.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.add('active');
        // Save the user's preference in local storage
        localStorage.setItem('isDarkMode', 'true');
    } else {
        darkmode.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.remove('active');
        // Save the user's preference in local storage
        localStorage.setItem('isDarkMode', 'false');
    }
    };

    // Add event listener for the hamburger menu icon
    menuIcon.addEventListener("click", function() {
        // Toggle the 'active' class for the menu
        navLinks.classList.toggle("active");
        
        // Toggle the 'active' class for the hamburger icon
        this.classList.toggle("active");

        // Toggle between the hamburger (fa-bars) and xmark (fa-xmark) icons
        if (this.classList.contains("active")) {
            this.classList.remove("fa-bars");
            this.classList.add("fa-xmark");
        } else {
            this.classList.remove("fa-xmark");
            this.classList.add("fa-bars");
        }
    });

    // Hide the dropdown when clicking outside (only on mobile)
    document.addEventListener("click", function(event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target) && window.innerWidth <= 768) {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("active");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars"); // Revert back to the hamburger icon
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get hCaptcha response
        const hcaptchaResponse = hcaptcha.getResponse();
        if (!hcaptchaResponse) {
            alert("Please complete the hCaptcha before submitting.");
            return;
        }

        // Honeypot check
        const honeypot = document.getElementById("itsasecret").value;
        if (honeypot) {
            alert("Bot submission detected. Please try again later.");
            form.reset();
            hcaptcha.reset();
            return;
        }

        // Gather form data
        const formData = new FormData(form);
        formData.append("h-captcha-response", hcaptchaResponse);

        // Send form data using fetch
        try {
            const response = await fetch("https://formsubmit.co/b1158234038ead0ec8276ceea8d7fc3b", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Message sent successfully!");
                form.reset();
                hcaptcha.reset();
            } else {
                alert("An error occurred while sending the message.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while sending the message.");
        }
    });
});
