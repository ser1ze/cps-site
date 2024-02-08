import '../scss/style.scss'

// Swiper
document.addEventListener('DOMContentLoaded', function () {
  let swiper = null

  function initOrDestroySwiper() {
    if (window.innerWidth >= 768) {
      if (swiper !== null) {
        swiper.destroy(true, true)
        swiper = null
      }
    } else {
      if (swiper === null) {
        swiper = new Swiper('.swiper', {
          direction: 'horizontal',
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      }
    }
  }

  initOrDestroySwiper()
})

// Variables

const readMoreBtn = document.querySelector('.read-more-btn')
const readMoreText = document.querySelector('.read-more-text')
const text = document.querySelector('.btn__text')
const img = document.querySelector('.btn__img')
const textBrand = document.querySelector('.btn__text--brand')
const imgBrand = document.querySelector('.btn__img--brand')
const textTech = document.querySelector('.btn__text--tech')
const imgTech = document.querySelector('.btn__img--tech')
const showMoreBtn = document.querySelector('.show-more-btn')
const showMoreBtnTech = document.querySelector('.show-more-btn--tech')
const hamburgerBtn = document.querySelector('.hamburger-btn')
const closeBtn = document.querySelector('.close-btn')
const closeFeedbackBtn = document.querySelector('.close-btn-feedback')
const callBtn = document.querySelector('.call-btn')
const closeCallBtn = document.querySelector('.close-call-btn')
const menuFeedbackBtn = document.querySelector('.menu-feedback-btn')
const menuCallBtn = document.querySelector('.menu-call-btn')
const feedbackBtn = document.querySelector('.feedback-btn')
const overlay = document.querySelector('.overlay')
const menuModal = document.querySelector('.menu-container')
const feedbackModal = document.querySelector('.modal-feedback')
const callModal = document.querySelector('.modal-call')
const brandsTablet = document.querySelectorAll('.brand--tablet')
const brandsDesk = document.querySelectorAll('.swiper-slide')
const tech = document.querySelectorAll('.swiper-slide--tech')

// Onclick Events

readMoreBtn.addEventListener('click', () => {
  readMoreText.classList.toggle('show-more')

  if (text.innerText === 'Читать далее') {
    text.innerText = 'Скрыть'
  } else {
    text.innerText = 'Читать далее'
  }

  changeImage(img)
})

function changeImage(img) {
  if (img.src.includes('expand.svg')) {
    img.src = './img/less.svg'
  } else {
    img.src = './img/expand.svg'
  }
}

showMoreBtn.addEventListener('click', () => {
  brandsTablet.forEach((brand) => {
    brand.classList.toggle('show-tablet')
  })
  brandsDesk.forEach((brand) => {
    brand.classList.toggle('show-desktop')
  })

  if (textBrand.innerText === 'Показать все') {
    textBrand.innerText = 'Скрыть'
  } else {
    textBrand.innerText = 'Показать все'
  }
  changeImage(imgBrand)
})

showMoreBtnTech.addEventListener('click', () => {
  tech.forEach((tech) => {
    tech.classList.toggle('show-tablet')
  })
  tech.forEach((tech) => {
    tech.classList.toggle('show-desktop')
  })

  if (textTech.innerText === 'Показать все') {
    textTech.innerText = 'Скрыть'
  } else {
    textTech.innerText = 'Показать все'
  }
  changeImage(imgTech)
})
hamburgerBtn.addEventListener('click', () => {
  menuModal.classList.add('menu-container--active')
  if (menuModal.classList.contains('menu-container--active')) {
    overlay.classList.add('overlay--active')
  }
})

closeBtn.addEventListener('click', () => {
  menuModal.classList.remove('menu-container--active')
  overlay.classList.remove('overlay--active')
})

feedbackBtn.addEventListener('click', () => {
  feedbackModal.classList.add('modal-feedback--active')

  if (feedbackModal.classList.contains('modal-feedback--active')) {
    overlay.classList.add('overlay--active')
  }
})

closeFeedbackBtn.addEventListener('click', () => {
  feedbackModal.classList.remove('modal-feedback--active')
  overlay.classList.remove('overlay--active')
})
menuFeedbackBtn.addEventListener('click', () => {
  feedbackModal.classList.add('modal-feedback--active')

  if (feedbackModal.classList.contains('modal-feedback--active')) {
    overlay.classList.add('overlay--active')
  }
  menuModal.classList.remove('menu-container--active')
})

callBtn.addEventListener('click', () => {
  callModal.classList.add('modal-call--active')

  if (callModal.classList.contains('modal-call--active')) {
    overlay.classList.add('overlay--active')
  }
})

closeCallBtn.addEventListener('click', () => {
  callModal.classList.remove('modal-call--active')
  overlay.classList.remove('overlay--active')
})
menuCallBtn.addEventListener('click', () => {
  callModal.classList.add('modal-call--active')

  if (callModal.classList.contains('modal-call--active')) {
    overlay.classList.add('overlay--active')
  }
  menuModal.classList.remove('menu-container--active')
})
overlay.addEventListener('click', (event) => {
  if (
    overlay.classList.contains('overlay--active') &&
    event.target === overlay
  ) {
    menuModal.classList.remove('menu-container--active')
    callModal.classList.remove('modal-call--active')
    overlay.classList.remove('overlay--active')
    feedbackModal.classList.remove('modal-feedback--active')
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModals()
  }
})

function closeModals() {
  menuModal.classList.remove('menu-container--active')
  callModal.classList.remove('modal-call--active')
  feedbackModal.classList.remove('modal-feedback--active')
  overlay.classList.remove('overlay--active')
}
