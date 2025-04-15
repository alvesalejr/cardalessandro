document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openCurriculo")
  const modal = document.getElementById("pdfModal")
  const closeBtn = document.getElementById("closeModal")

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault()
      modal.style.display = "block"
    })
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none"
    })
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none"
      }
    })
  }
})


