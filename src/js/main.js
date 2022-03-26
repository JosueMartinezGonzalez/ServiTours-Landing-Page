// Vars
const $form = document.querySelector('#form');
const $nameUser = document.querySelector('#name');
const $emailUser = document.querySelector('#email');
const $phoneUser = document.querySelector('#phone');
const $messageUser = document.querySelector('#message');
const $sendMessage = document.querySelector('#send--message');
const $formResponse = document.querySelector('#responseForm')
const $buttonClose = document.querySelector('#buttonClose')
const $header = document.querySelector('#header')
const $main = document.querySelector('#main')
const $footer = document.querySelector('#footer')
const $termsAndConditions = document.querySelector('#termsAndConditions')
const $termsButton = document.querySelector('.termsButton')
const $termsButtonFooter = document.querySelector('.termsButtonFooter')
const $buttonCloseTerms = document.querySelector('#buttonCloseTerms')



// Functions
function handleSize() {
  const size = screen.width
  return size
}

function handleDisplayNone() {
  $formResponse.classList.add('activeForm')
  $nameUser.classList.add('inactive')
  $emailUser.classList.add('inactive')
  $phoneUser.classList.add('inactive')
  $messageUser.classList.add('inactive')
  $sendMessage.classList.add('inactive')
}

function handleDisplayBlock() {
  $formResponse.classList.remove('activeForm')
  $nameUser.classList.remove('inactive')
  $emailUser.classList.remove('inactive')
  $phoneUser.classList.remove('inactive')
  $messageUser.classList.remove('inactive')
  $sendMessage.classList.remove('inactive')
}

function mountConditions () {
  $header.classList.add('inactiveTerms')
  $main.classList.add('inactiveTerms')
  $footer.classList.add('inactiveTerms')
  $termsAndConditions.classList.remove('inactiveTerms')
  window.scrollTo(0, 0)
}

function unMountConditions () {
  $header.classList.remove('inactiveTerms')
  $main.classList.remove('inactiveTerms')
  $footer.classList.remove('inactiveTerms')
  $termsAndConditions.classList.add('inactiveTerms')
}

async function handleSubmit(event) {
  if($nameUser.value === null || $nameUser.value === '') {
    alert('Ingrese un nombre valido')
  }
  if($emailUser.value === null || $emailUser.value === '') {
    alert('Ingrese un email valido')
  }
  if($phoneUser.value === null || $phoneUser.value === '' || $phoneUser.value <= 3000000000) {
    alert('Ingrese un numero valido en Colombia')
  }
  if($messageUser.value === null || $messageUser.value === '') {
    alert('Ingrese un mensaje expresando su interés')
  }

  event.preventDefault();
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if(response.ok) {
    this.reset()
    handleDisplayNone()
  }
}

function carouselAnimation() {
  document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    if(handleSize<425) {
      M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -8,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
      });
    } else {
      M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
      });
    }
  });
}



// Execute Functions
carouselAnimation();
$form.addEventListener('submit', handleSubmit)
$buttonClose.addEventListener('click', handleDisplayBlock)
$termsButton.addEventListener('click', mountConditions)
$termsButtonFooter.addEventListener('click', mountConditions)
$buttonCloseTerms.addEventListener('click', unMountConditions)