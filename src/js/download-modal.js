(() => {
  const refs = {
    openModalBtn: document.querySelector("[apart-modal-open]"),
    closeModalBtn: document.querySelector("[apart-modal-close]"),
    modal: document.querySelector("[apart-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
 
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();