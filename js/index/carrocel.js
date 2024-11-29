const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let slideAtual = 0;

function esconderSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function mostrarSlider() {
    slider[slideAtual].classList.add('on')
}

function proximoSlider() {
    esconderSlider()
    if(slideAtual === slider.length -1) {
        slideAtual = 0
    } else {
        slideAtual++
    }
    mostrarSlider();
}
function prevSlider() {
    esconderSlider()
    if(slideAtual === 0) {
      slideAtual = slider.length -1
    } else {
      slideAtual--
    }
    mostrarSlider()
  }

  btnNext.addEventListener('click', proximoSlider)
  btnPrev.addEventListener('click', prevSlider)
console.log(slider)