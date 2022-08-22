import { galleryItems } from './gallery-items.js';

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

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
})