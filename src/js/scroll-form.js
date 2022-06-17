import refs from './refs';

let scrollPrev = 0;

addEventListener('scroll', scrollHandler);

function scrollHandler() {
  const yOffset = window.pageYOffset;

  if (yOffset > 80 && yOffset > scrollPrev) {
    refs.form.classList.add('out');
  } else {
    refs.form.classList.remove('out');
  }

  scrollPrev = yOffset;
}
