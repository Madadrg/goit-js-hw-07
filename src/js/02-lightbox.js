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

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    galleryContainer.appendChild(galleryItem);
  });
}

function initializeSimpleLightbox() {
  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  initializeSimpleLightbox();
});
