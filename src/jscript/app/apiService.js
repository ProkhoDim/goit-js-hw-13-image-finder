export default async function fetchImages(searchQuery) {
  searchQuery.split(' ').join('+');
  const APIKEY = '15440827-454030fbfe14a611a1b7b063f';
  const response = await fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${APIKEY}`,
  );
  const responseObj = response.json();
  console.log(responseObj);
}
