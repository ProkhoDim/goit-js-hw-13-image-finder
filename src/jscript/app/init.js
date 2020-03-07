import markupRef from './markupRefs';
import handleKeypress from './handleKeypress';
import loadMore from './loadMore';
import * as basicLightbox from 'basiclightbox';

markupRef.loadMoreBtn.hidden = true;
markupRef.input.addEventListener('keypress', handleKeypress);
markupRef.loadMoreBtn.addEventListener('click', loadMore);

markupRef.jsResult.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    basicLightbox
      .create(`<img src="${e.target.dataset.source}" alt="${e.target.src}">`)
      .show();
  }
});
