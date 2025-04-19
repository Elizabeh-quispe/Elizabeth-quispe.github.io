document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const mensaje = document.getElementById("success-message");
    mensaje.classList.remove("d-none");
    this.reset();
    setTimeout(() => mensaje.classList.add("d-none"), 3000);
  });
  function viewMore() {
    alert('Ver más detalles de la imagen actual');
  }
  