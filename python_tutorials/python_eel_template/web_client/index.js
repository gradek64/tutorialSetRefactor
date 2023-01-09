const getDataButton = document.getElementById('getDataButton');
const sendDataButton = document.getElementById('sendDataButton');
const displayDataFromPython = document.getElementById('displayData');

//get data
const callback = (result) => {
  displayDataFromPython.innerHTML = result;
};
getDataButton.addEventListener('click', async () => {
  await eel.get_data()(callback);
});

//send data
sendDataButton.addEventListener('click', async () => {
  await eel.send_data('Hello from JS');
});
