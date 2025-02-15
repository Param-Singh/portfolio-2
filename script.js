document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu a");
  const loaderContainer = document.querySelector(".loader-container");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default navigation

      const targetURL = this.getAttribute("href"); // Get the URL

      // Show the loader
      loaderContainer.style.display = "flex";

      // Optional: Add a slight delay before navigating to ensure the loader is visible
      setTimeout(() => {
        window.location.href = targetURL; // Navigate after transition
      }, 200); // Adjust as needed
    });
  });
});
