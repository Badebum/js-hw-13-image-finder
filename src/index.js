import './styles.css';
import './js/lightBox.js';
import ApiService from './js/service.js';
import cardItem from './templates/cardItem.hbs';
import refs from './js/refs';

const apiService = new ApiService();

refs.searchFormRef.addEventListener('submit', onSearch);
refs.loadMoreBtnRef.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();

  apiService.query = event.currentTarget.elements.query.value;
  apiService.resetPage();
  apiService.fetchArticles().then(appendHitsMarkup);
  clearHits();
}

function onLoadMore() {
  apiService.fetchArticles().then(appendHitsMarkup);
}

function appendHitsMarkup(hits) {
  refs.galleryRef.insertAdjacentHTML('beforeend', cardItem(hits));
}

function clearHits() {
  refs.galleryRef.innerHTML = '';
}
