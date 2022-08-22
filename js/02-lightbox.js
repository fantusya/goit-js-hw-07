import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector('.gallery');

const imagesMarkup = makeGalleryItemMarkup(galleryItems);

galleryUl.insertAdjacentHTML('beforeend', imagesMarkup);

function makeGalleryItemMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
        })
        .join('');
}