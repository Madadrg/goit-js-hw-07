import { galleryItems } from "./gallery-items.js";

function renderGallery() {
  const galleryContainer = document.querySelector(".gallery");

  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = item.original;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.dataset.source = item.original;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    galleryContainer.appendChild(galleryItem);
  });

  galleryContainer.addEventListener("click", onGalleryItemClick);
}

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const source = event.target.dataset.source;
    openModal(source);
  }
}

function openModal(source) {
  const instance = basicLightbox.create(
    `<img src="${source}" alt="Image description">`
  );
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}

renderGallery();
