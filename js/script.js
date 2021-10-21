const footer = document.querySelector(".furniture__footer");
const primaryShareBtn = document.querySelector("#primaryShareBtn");
const secondaryShareBtn = document.querySelector("#secondaryShareBtn");

primaryShareBtn.addEventListener("click", function () {
  footer.classList.toggle("share-open");
  if (window.innerWidth < 1024) {
    footer.classList.add("share-mobile");
  } else {
    footer.classList.toggle("share-desktop");
  }
});

secondaryShareBtn.addEventListener("click", function () {
  footer.classList.remove("share-mobile");
});
