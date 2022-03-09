// Vars
const $form = document.querySelector('#form');
const $nameUser = document.querySelector('#name');
const $emailUser = document.querySelector('#email');
const $phoneUser = document.querySelector('#phone');
const $messageUser = document.querySelector('#message');



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
    alert('Gracias por contactarnos, te escribiremos pronto')
  }

}










// Execute Functions
carouselAnimation();
$form.addEventListener('submit', handleSubmit)