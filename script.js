
document.addEventListener("DOMContentLoaded", function () {

  
    const pageName = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".site-nav a.nav-link");

    navLinks.forEach(function (link) {
        if (link.getAttribute("href") === pageName) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

   
    const themeButton = document.getElementById("themeButton");

    function updateThemeButton() {
        if (!themeButton) return;

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Light Mode";
            themeButton.setAttribute("aria-label", "Switch to light mode");
        } else {
            themeButton.textContent = "Dark Mode";
            themeButton.setAttribute("aria-label", "Switch to dark mode");
        }
    }

 
    try {
        if (localStorage.getItem("lesothoTheme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    } catch (error) {
       
    }

    updateThemeButton();

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            updateThemeButton();

            try {
                const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
                localStorage.setItem("lesothoTheme", currentTheme);
            } catch (error) {
              
            }
        });
    }

    const welcomeButton = document.getElementById("welcomeButton");
    const welcomeOutput = document.getElementById("welcomeOutput");

    if (welcomeButton && welcomeOutput) {
        welcomeButton.addEventListener("click", function () {
            welcomeOutput.textContent = "Thank you for visiting Discover Lesotho!";
        });
    }


    const bookingForm = document.getElementById("bookingForm");
    const bookingMessage = document.getElementById("bookingMessage");

    if (bookingForm && bookingMessage) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const numberOfVisitors = Number(document.getElementById("visitors").value);

            if (numberOfVisitors < 1) {
                bookingMessage.textContent = "Please enter at least one visitor.";
                return;
            }

            bookingMessage.textContent = "Thank you! Your booking enquiry has been received.";
            bookingForm.reset();
        });
    }

  
    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    if (contactForm && contactMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            contactMessage.textContent = "Thank you! Your message has been received.";
            contactForm.reset();
        });
    }
});
