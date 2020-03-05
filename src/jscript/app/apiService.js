export default {
  APIKEY: '15440827-454030fbfe14a611a1b7b063f',
  page: 1,
  searchText: '',
  updatePage() {
    this.page += 1;
    console.log(this);
    console.log(this.page);
  },

  resetPage() {
    this.page = 1;
  },
};
