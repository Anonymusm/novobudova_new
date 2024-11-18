(() => {
  const refs = {
    openModalBtn: document.querySelector("[hero-modal-open]"),
    closeModalBtn: document.querySelector("[hero-modal-close]"),
    modal: document.querySelector("[hero-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();