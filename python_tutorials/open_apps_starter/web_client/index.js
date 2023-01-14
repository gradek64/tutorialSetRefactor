const startTimerApp = document.getElementById('startTimerApp');
const startWaterHeaterApp = document.getElementById('startWaterHeaterApp');
const closePieButton = document.getElementById('closePieButton');

startTimerApp.addEventListener('click', async () => {
  await eel.send_data('startTimerApp');
});

startWaterHeaterApp.addEventListener('click', async () => {
  await eel.send_data('startWaterHeaterApp');
});

closePieButton.addEventListener('click', async () => {
  console.log('close App');
  await eel.confirmClosePi();
});

/***** open overlay to close Pi all together*****/
const overlayClosePi = document.getElementById('overlayClosePi');
overlayClosePi.addEventListener('click', () => {
  document.getElementById('closePie').style.display = 'block';
});

//overlay elements
const outsideOverlay =
  document.querySelectorAll('.overlay-flex-wrapper') || null;
/****** close overlay ******/
const closingElements = [outsideOverlay[0]];
closingElements.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('progressBoardContent') ||
      e.target.classList.contains('save')
    ) {
      if (document.querySelector('#closePie'))
        document.querySelector('#closePie').style.display = 'none';
      if (document.querySelector('#heatingBoard'))
        document.querySelector('#heatingBoard').style.display = 'none';
    }
  });
});

/****** end of close overlay ******/
