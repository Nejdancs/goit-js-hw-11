!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequirea610;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequirea610=a);var o=a("61aA4"),i=a("5eMmT");a("lpnUn");var l,s,u,f,c=a("lfmFS"),d=a("fPt28"),g=a("jV7Iq"),p=a("aOaai"),y=new(e(a("5sUkm")))(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function h(e,t){return v.apply(this,arguments)}function v(){return(v=e(o)(e(i).mark((function t(n,r){var a,o,l;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(),e.next=4,(0,d.default)(n,r);case 4:if(a=e.sent,o=a.hits,l=a.totalHits,L(),w(l),0!==l){e.next=14;break}return p.Notify.failure("Sorry, there are no images matching your search query. Please try again."),e.abrupt("return");case 14:1===r&&p.Notify.info("Hooray! We found ".concat(l," images."));case 15:if(c.default.gallery.insertAdjacentHTML("beforeend",(0,g.default)(o)),y.refresh(),m(),!(r>=s)){e.next=21;break}return p.Notify.warning("We're sorry, but you've reached the end of search results."),e.abrupt("return");case 21:b(),e.next=29;break;case 24:e.prev=24,e.t0=e.catch(0),console.log(e.t0.message),L(),p.Notify.failure("Oops, something went wrong. Please try again.");case 29:case"end":return e.stop()}}),t,null,[[0,24]])})))).apply(this,arguments)}function m(){var e,t=c.default.form.getBoundingClientRect().height;e=1===l?t:f,window.scrollBy({top:e,behavior:"smooth"})}function w(e){s=Math.ceil(e/40)}function b(){c.default.loadBtn.classList.remove("is-hidden")}function x(){c.default.loadBtn.classList.add("is-hidden")}function L(){c.default.spinner.classList.toggle("is-hidden")}c.default.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.searchQuery.value.trim();if(u=t,c.default.gallery.innerHTML="",x(),l=1,!u)return void p.Notify.info("You didn't enter anything.");h(u,l),e.currentTarget.reset()})),c.default.loadBtn.addEventListener("click",(function(){l+=1,f=c.default.gallery.lastElementChild.getBoundingClientRect().top,x(),console.log(l),console.log(s),console.log(l>=s),h(u,l)}))}();
//# sourceMappingURL=01-gallery.376069cc.js.map