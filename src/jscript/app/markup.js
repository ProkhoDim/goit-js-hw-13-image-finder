import galleryItem from '../templates/imageCard.hbs';
import markupRef from './markupRefs';
import fetchImage from './fetchImage';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

export default async function markup() {
  const textInInput = markupRef.input.value;

  const data = await fetchImage(textInInput);
  const dataArray = data.hits;

  if (dataArray.length === 0) {
    return PNotify.error({
      text: 'Nothing to find!',
    });
  }

  const htmlText = dataArray.map(item => galleryItem(item)).join('');
  await markupRef.jsResult.insertAdjacentHTML('beforeend', htmlText);
}
