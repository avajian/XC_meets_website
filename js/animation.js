
//open and close nav functionality
function openNav() {
    document.getElementById("sidenav").style.width = "150px";
  }
  

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

//show more rows in team section
document.addEventListener("DOMContentLoaded", function() {
    function setupShowMore(hiddenClass, buttonId) {
        const hiddenRows = document.querySelectorAll(hiddenClass);
        const showMoreButton = document.getElementById(buttonId);

        if (hiddenRows.length > 0) {
            showMoreButton.style.display = "block";
        }

        showMoreButton.addEventListener("click", function() {
            hiddenRows.forEach(row => row.style.display = "table-row");
            showMoreButton.style.display = "none";
        });
    }

    setupShowMore(".hidden", "show-more"); // Team section, but able to easily add other sections by calling the function
});

//previous simple dark-mode, not adjusted for user preference
//i'm keeping this for me, pls don't dock me points for it

// dark mode
// function darkMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

//updated dark mode to adjust even when user prefers dark

document.addEventListener("DOMContentLoaded", function () {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");

    // Set initial theme based on system preference or saved user preference
    if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add("dark-mode");
    }

    // Update theme if system preference changes and no manual preference is set
    prefersDarkScheme.addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
            document.body.classList.toggle("dark-mode", e.matches);
        }
    });
});

// Toggle dark mode manually and temporarily store user preference
function darkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    // Store user choice in localStorage temporarily, remove to reset on reload
    if (isDarkMode) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }
}
