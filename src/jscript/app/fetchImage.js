import apiService from './apiService';

export default async searchQuery => {
  const wordsInQuery = searchQuery.split(' ');
  const queryForFetch = wordsInQuery.join('+');
  const response = await fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${queryForFetch}&page=${apiService.page}&per_page=12&key=${apiService.APIKEY}`,
  );
  const responseObj = response.json();
  apiService.searchText = searchQuery;

  return responseObj;
};
