const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')
const  body = document.querySelector('body')

// stopBtn.setAttribute('disabled',true)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeBody () {
  body.style.backgroundColor = getRandomHexColor ();
}


const colorSwitcher = {
    intervalId: null,
    isActive: false,
   
    start() {
       if (this.isActive) {
        startBtn.setAttribute('disabled', true)
      } 
      
        // startBtn.setAttribute('disabled', true)
        // stopBtn.removetAttribute('disabled')
        this.isActive = true;
        this.intervalId = setInterval(() => {
          onChangeBody()
        },1000)
    },

    stop() {
        clearInterval(this.intervalId)     
    }
}

startBtn.addEventListener('click', () => {colorSwitcher.start();}) 
stopBtn.addEventListener('click', () => {colorSwitcher.stop();}) 
