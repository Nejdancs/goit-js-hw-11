function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequirea610;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequirea610=i);var o=i("8nyf9"),a=i("3ihO5"),s=i("3CcrP");let l,f,c;const d=new(e(i("74bya")))(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function u(){const e=o.default.gallery.offsetHeight;if(window.pageYOffset+window.innerHeight>=e){if(l+=1,removeEventListener("scroll",u),l>f)return void s.Notify.failure("We're sorry, but you've reached the end of search results.");g(c,l)}}async function g(e,n){try{p();const{hits:t,totalHits:r}=await(0,a.default)(e,n);if(p(),function(e){f=Math.ceil(e/40)}(r),0===r)return void s.Notify.failure("Sorry, there are no images matching your search query. Please try again.");1===n&&s.Notify.success(`Hooray! We found ${r} images.`),o.default.gallery.insertAdjacentHTML("beforeend",t.map((e=>{const{webformatURL:n,largeImageURL:t,tags:r,likes:i,views:o,comments:a,downloads:s}=e;return`<div class="photo-card">\n  <a href="${t}"><img src="${n}" alt="${r}" loading="lazy" /></a>\n  <div class="info">\n    <p class="info-item">\n      <b>Likes</b>${i}\n    </p>\n    <p class="info-item">\n      <b>Views</b>${o}\n    </p>\n    <p class="info-item">\n      <b>Comments</b>${a}\n    </p>\n    <p class="info-item">\n      <b>Downloads</b>${s}\n    </p>\n  </div>\n</div>`})).join("")),d.refresh(),function(){const{height:e}=o.default.form.getBoundingClientRect();let n;1===l&&(n=e,window.scrollBy({top:n,behavior:"smooth"}))}(),addEventListener("scroll",u)}catch(e){console.log(e.message)}}function p(){o.default.spinner.classList.toggle("is-hidden")}o.default.form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{searchQuery:n}}=e.currentTarget,t=n.value.trim();if(c=t,o.default.gallery.innerHTML="",l=1,!c)return;g(c,l),e.currentTarget.reset()}));
//# sourceMappingURL=02-gallery.720f3df0.js.map
