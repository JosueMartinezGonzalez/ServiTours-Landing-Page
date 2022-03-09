// Vars
const $form = document.querySelector('#form');
const $nameUser = document.querySelector('#name');
const $emailUser = document.querySelector('#email');
const $phoneUser = document.querySelector('#phone');
const $messageUser = document.querySelector('#message');
const $sendMessage = document.querySelector('#send--message');
const $formResponse = document.querySelector('#responseForm')
const $buttonClose = document.querySelector('#buttonClose')



// Functions
function carouselAnimation() {
  document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
      duration: 150,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 3,
      indicators: true,
      noWrap: false
    });
  });
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



// Execute Functions
carouselAnimation();
$form.addEventListener('submit', handleSubmit)
$buttonClose.addEventListener('click', handleDisplayBlock)