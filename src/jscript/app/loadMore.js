import markup from './markup';
import markupRef from './markupRefs';
import apiService from './apiService';

export default async function loadMore() {
  apiService.updatePage();

  await markup();
  // window.scrollBy({
  //   left: 0,
  //   top: window.innerHeight - markupRef.loadMoreBtn.offsetHeight,
  //   behavior: 'smooth',
  // });
  scrolling();
}

function scrolling() {
  const scrollPosition =
    window.scrollY +
    window.innerHeight -
    markupRef.loadMoreBtn.offsetHeight -
    markupRef.input.offsetHeight;
  const intervalId = setInterval(() => {
    if (unLoadedImages().length === 0) {
      clearInterval(intervalId);
      window.scrollTo({
        left: 0,
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, 100);
}

function unLoadedImages() {
  const arr = Array.from(document.images);
  return arr.filter(item => item.complete === false);
}
