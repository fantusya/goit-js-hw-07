import { galleryItems } from './gallery-items.js';

let BigPicture;

const galleryContainer = document.querySelector('.gallery');

const imagesMarkup = makeGalleryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)

function makeGalleryItemMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
        })
        .join('');
}

function onGalleryContainerClick(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    window.addEventListener('keydown', onEscKeyPress);

    evt.preventDefault();

    createBasicLightBox(evt.target);
}

function createBasicLightBox(picture) {
    BigPicture = basicLightbox
        .create(`
                <img
                class="gallery__image"
                src="${picture.dataset.source}"
                alt="${picture.alt}"
                />`,
            {
                onClose: () => window.removeEventListener('keydown', onEscKeyPress)
            });
    
    BigPicture.show();
}

function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = evt.code === ESC_KEY_CODE;
    if (isEscKey) {
        BigPicture.close();
    }
}