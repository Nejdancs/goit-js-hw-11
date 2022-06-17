import refs from './refs';
import getImages from './fetch-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let page;
let totalPages;
let valueSearchQuery;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

refs.form.addEventListener('submit', onSearh);

function onSearh(e) {
  e.preventDefault();

  const {
    elements: { searchQuery },
  } = e.currentTarget;

  const normalizedValue = searchQuery.value.trim();
  valueSearchQuery = normalizedValue;

  refs.gallery.innerHTML = '';
  page = 1;

  if (!valueSearchQuery) {
    return;
  }

  renderImages(valueSearchQuery, page);

  e.currentTarget.reset();
}

function onScroll() {
  var block = refs.gallery;
  console.log(Date.now());

  var contentHeight = block.offsetHeight;
  var yOffset = window.pageYOffset;
  var window_height = window.innerHeight;
  var y = yOffset + window_height;

  if (y >= contentHeight) {
    page += 1;
    removeEventListener('scroll', onScroll);

    if (page > totalPages) {
      Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );

      return;
    }

    renderImages(valueSearchQuery, page);
  }
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
    addEventListener('scroll', onScroll);
  } catch (error) {
    console.log(error.message);
  }
}

function createCards(imagesData) {
  return imagesData
    .map(imageData => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = imageData;

      return `<div class="photo-card">
  <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div>`;
    })
    .join('');
}

function scroll() {
  const { height: formHeight } = refs.form.getBoundingClientRect();
  let topScroll;

  if (page === 1) {
    topScroll = formHeight;

    window.scrollBy({
      top: topScroll,
      behavior: 'smooth',
    });
  }
}

function checkTotalPages(totalHits) {
  totalPages = Math.ceil(totalHits / 40);
}

function toggleSpiner() {
  refs.spinner.classList.toggle('is-hidden');
}
