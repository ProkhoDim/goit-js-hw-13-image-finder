import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

import markup from './markup';
import apiService from './apiService';
import markupRef from './markupRefs';

export default function handleKeypress(e) {
  if (e.key !== 'Enter') {
    return;
  }
  e.preventDefault();
  const textInInput = markupRef.input.value;
  if (isEmptyInput(textInInput)) return;
  if (isSameText(textInInput)) return;
  resetCurrentSearchResult();
  markup();
  markupRef.loadMoreBtn.hidden = false;
  return;
}

function isEmptyInput(val) {
  if (!val) {
    PNotify.error({
      text: 'Write some text in input!',
    });
    return true;
  }
  return false;
}

function isSameText(val) {
  if (val === apiService.searchText) {
    PNotify.error({
      text: 'Click Load more button or scroll to end!',
    });
    return true;
  }
  return false;
}

function resetCurrentSearchResult() {
  apiService.resetPage();
  markupRef.jsResult.innerHTML = '';
}
