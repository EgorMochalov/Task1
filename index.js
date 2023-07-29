const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {

  let timer;

  return (seconds) => {
    
    clearInterval(timer)

    function test () {

      let tseconds = Math.floor(seconds % 3600 % 60);
      let minutes = Math.floor(seconds % 3600 / 60);
      let hour = Math.floor(seconds/ 3600);

      let time = Math.trunc(hour).toString().padStart(2, '0') + ':' +
        Math.trunc(minutes).toString().padStart(2, '0') + ':' +
        tseconds.toString().padStart(2, '0')

      timerEl.innerHTML = time;

      if (seconds <= 0) {
        clearInterval(timer);
      }

      --seconds;
    }

    test()

    timer = setInterval(test, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  this.event.target.value = this.event.target.value.replace(/[^\d.]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
