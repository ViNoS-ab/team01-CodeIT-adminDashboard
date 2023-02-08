const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(link => {
      link.style.opacity = "70%";
    });
    this.style.opacity = "100%";
  });
});
