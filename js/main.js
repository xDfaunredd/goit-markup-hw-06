const button = document.querySelector(".service-button");
const backdrop = document.querySelector(".backdrop");
const modalClose = document.querySelector(".modal-close");

const openFormFunc = (event) => {
  backdrop.classList.add("is-open");
};

button.addEventListener("click", openFormFunc);

const closeFormFunc = (event) => {
  backdrop.classList.remove("is-open");
};

modalClose.addEventListener("click", closeFormFunc);
