const startTimerApp = document.getElementById('startTimerApp');
const startWaterHeaterApp = document.getElementById('startWaterHeaterApp');

startTimerApp.addEventListener('click', async () => {
  await eel.send_data('startTimerApp');
});

startWaterHeaterApp.addEventListener('click', async () => {
  await eel.send_data('startWaterHeaterApp');
});
