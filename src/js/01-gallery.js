import './scroll-form';
import refs from './refs';
import getImages from './fetch-service';
import createCards from './create-cards';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let page;
let totalPages;
let valueSearchQuery;
let cordLastItems;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

refs.form.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', onLoadBtn);

function onSearch(e) {
  e.preventDefault();

  const {
    elements: { searchQuery },
  } = e.currentTarget;

  const normalizedValue = searchQuery.value.trim();
  valueSearchQuery = normalizedValue;

  refs.gallery.innerHTML = '';
  hideLoadBtn();
  page = 1;

  if (!valueSearchQuery) {
    Notify.failure("You didn't enter anything.");

    return;
  }

  renderImages(valueSearchQuery, page);

  e.currentTarget.reset();
}

function onLoadBtn() {
  page += 1;

  cordLastItems = refs.gallery.lastElementChild.getBoundingClientRect().top;
  hideLoadBtn();

  if (page > totalPages) {
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    return;
  }

  renderImages(valueSearchQuery, page);
}

async function renderImages(value, page) {
  try {
    toggleSpiner();

    const { hits, totalHits } = await getImages(value, page);

    toggleSpiner();
    checkTotalPages(totalHits);

    if (totalHits === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );

      return;
    } else if (page === 1) {
      Notify.success(`Hooray! We found ${totalHits} images.`);
    }

    refs.gallery.insertAdjacentHTML('beforeend', createCards(hits));
    lightbox.refresh();
    scroll();
    showLoadBtn();
  } catch (error) {
    console.log(error.message);
    toggleSpiner();
    Notify.failure('Oops, something went wrong. Please try again.');
  }
}

function scroll() {
  const { height: formHeight } = refs.form.getBoundingClientRect();
  let topScroll;

  if (page === 1) {
    topScroll = formHeight;
  } else {
    topScroll = cordLastItems;
  }

  window.scrollBy({
    top: topScroll,
    behavior: 'smooth',
  });
}

function checkTotalPages(totalHits) {
  totalPages = Math.ceil(totalHits / 40);
}

function showLoadBtn() {
  refs.loadBtn.classList.remove('is-hidden');
}

function hideLoadBtn() {
  refs.loadBtn.classList.add('is-hidden');
}

function toggleSpiner() {
  refs.spinner.classList.toggle('is-hidden');
}
