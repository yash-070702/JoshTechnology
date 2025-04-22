  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");
  const closeBtn = document.getElementById("closeModal");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
      modal.style.display = "flex";
      document.body.classList.add("modal-open"); // Prevent scroll
      form.reset();
    } else {
      form.reportValidity();
    }
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Allow scroll again
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open"); // Allow scroll again
    }
  });
