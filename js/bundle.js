!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);document.addEventListener("DOMContentLoaded",(function(){var e=null;window.innerWidth>=768?null!==e&&(e.destroy(!0,!0),e=null):null===e&&(e=new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination"}}))}));var c=document.querySelector(".read-more-btn"),o=document.querySelector(".read-more-text"),r=document.querySelector(".btn__text"),a=document.querySelector(".btn__img"),i=document.querySelector(".btn__text--brand"),l=document.querySelector(".btn__img--brand"),s=document.querySelector(".btn__text--tech"),d=document.querySelector(".btn__img--tech"),u=document.querySelector(".show-more-btn"),m=document.querySelector(".show-more-btn--tech"),v=document.querySelector(".hamburger-btn"),f=document.querySelector(".close-btn"),y=document.querySelector(".close-btn-feedback"),b=document.querySelector(".call-btn"),L=document.querySelector(".close-call-btn"),S=document.querySelector(".menu-feedback-btn"),p=document.querySelector(".menu-call-btn"),g=document.querySelector(".feedback-btn"),q=document.querySelector(".overlay"),k=(document.querySelector(".overlay--active"),document.querySelector(".menu-container")),x=document.querySelector(".modal-feedback"),h=document.querySelector(".modal-call"),w=document.querySelectorAll(".brand--tablet"),_=document.querySelectorAll(".swiper-slide"),E=document.querySelectorAll(".swiper-slide--tech");function T(e){e.src.includes("expand.svg")?e.src="/src/img/less.svg":e.src="src/img/expand.svg"}c.addEventListener("click",(function(){o.classList.toggle("show-more"),"Читать далее"===r.innerText?r.innerText="Скрыть":r.innerText="Читать далее",T(a)})),u.addEventListener("click",(function(){w.forEach((function(e){e.classList.toggle("show-tablet")})),_.forEach((function(e){e.classList.toggle("show-desktop")})),"Показать все"===i.innerText?i.innerText="Скрыть":i.innerText="Показать все",T(l)})),m.addEventListener("click",(function(){E.forEach((function(e){e.classList.toggle("show-tablet")})),E.forEach((function(e){e.classList.toggle("show-desktop")})),"Показать все"===s.innerText?s.innerText="Скрыть":s.innerText="Показать все",T(d)})),v.addEventListener("click",(function(){k.classList.add("menu-container--active"),k.classList.contains("menu-container--active")&&q.classList.add("overlay--active")})),f.addEventListener("click",(function(){k.classList.remove("menu-container--active"),q.classList.remove("overlay--active")})),g.addEventListener("click",(function(){x.classList.add("modal-feedback--active"),x.classList.contains("modal-feedback--active")&&q.classList.add("overlay--active")})),y.addEventListener("click",(function(){x.classList.remove("modal-feedback--active"),q.classList.remove("overlay--active")})),S.addEventListener("click",(function(){x.classList.add("modal-feedback--active"),x.classList.contains("modal-feedback--active")&&q.classList.add("overlay--active"),k.classList.remove("menu-container--active")})),b.addEventListener("click",(function(){h.classList.add("modal-call--active"),h.classList.contains("modal-call--active")&&q.classList.add("overlay--active")})),L.addEventListener("click",(function(){h.classList.remove("modal-call--active"),q.classList.remove("overlay--active")})),p.addEventListener("click",(function(){h.classList.add("modal-call--active"),h.classList.contains("modal-call--active")&&q.classList.add("overlay--active"),k.classList.remove("menu-container--active")})),q.addEventListener("click",(function(e){q.classList.contains("overlay--active")&&e.target===q&&(k.classList.remove("menu-container--active"),h.classList.remove("modal-call--active"),q.classList.remove("overlay--active"),x.classList.remove("modal-feedback--active"))}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map