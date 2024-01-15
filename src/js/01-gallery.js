import { galleryItems } from "./gallery-items.js";
// Change code below this line

import basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

const modal = basicLightbox.create(`<img>`),
  modalImg = modal.element().querySelector("img");

const gallery = document.querySelector("ul.gallery"),
  fragment = new DocumentFragment();

function appendFromGalleryItem(item) {
  const liTemplate = document.createElement("template");
  liTemplate.innerHTML = `<li class="gallery_item">
      <a class="gallery_link" href="${item.original}">
          <img
              class="gallery_image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
          />
      </a>
  </li>`;

  const clone = liTemplate.content.cloneNode(true);
  const img = clone.querySelector("img");

  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;
  fragment.appendChild(clone);
}

galleryItems.forEach(appendFromGalleryItem);
gallery.appendChild(fragment);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  modalImg.src = event.target.dataset.source;
  modal.show();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && modal.visible()) {
    event.preventDefault();
    modal.close();
  }
});
