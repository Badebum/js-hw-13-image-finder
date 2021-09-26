import refs from './refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const createAndOpenLightBox = imageSrc => {
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="1000" height="800">
`);

  instance.show();
};

refs.galleryRef.addEventListener('click', event => {
  const { target } = event;
  const { largeImage } = target.dataset;
  if (!largeImage) return;

  createAndOpenLightBox(largeImage);
});
