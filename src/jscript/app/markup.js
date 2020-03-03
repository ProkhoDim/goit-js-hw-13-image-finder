import galleryItem from '../templates/imageCard.hbs';
// import resultCountryList from '../templates/resultCountryList.hbs';
import apiService from './apiService';
import PNotify from 'pnotify/dist/es/PNotify';

const debounce = require('lodash.debounce');

const markupRef = {
  jsResult: document.querySelector('.js-gallery'),
  input: document.getElementById('search-form').elements.query,
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

const fetchImage = async searchQuery => {
  searchQuery.spilt('').join('+');
  const response = await fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${apiService.page}&per_page=12&key=${apiService.APIKEY}`,
  );
  const responseObj = response.json()
  console.log(responseObj)
};

markupRef.input.addEventListener('input', debounce(markup))


async function markup(e) {
  const textInInput = e.target.value;

  const dataArray = await fetchImage(textInInput);
}
// markupRef.loadMoreBtn.addEventListener('click', apiService.updatePage.bind(apiService));

// function markup(e) {
//   const textInInput = e.target.value;

//   fetchCountries(textInInput)
//     .then(data => {
//       markupRef.jsResult.innerHTML = '';
//       markupRef.countryList.innerHTML = '';

//       if (data.length > 1 && data.length <= 10) {
//         markupRef.countryList.innerHTML = data
//           .map(item => resultCountryList(item))
//           .join('');
//         return;
//       }

//       if (data.length === 1) {
//         markupRef.jsResult.innerHTML = resultCountry(...data);
//         return;
//       }

//       return PNotify.error({
//         text: 'Too many matches found. Please enter a more specific query!',
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       markupRef.countryList.innerHTML = '';
//       return PNotify.error({
//         text: 'No text in input. Please, write some letters!',
//       });
//     });
// }

// markupRef.input.addEventListener('input', debounce(markup, 500));
