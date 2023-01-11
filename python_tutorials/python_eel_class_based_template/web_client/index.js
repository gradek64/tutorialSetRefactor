const addTaskBttn = document.getElementById('addTaskBttn');
const removeTaskBttn = document.getElementById('removeTaskBttn');
const inputData = document.getElementById('addTaskInput');

addTaskBttn.addEventListener('click', async () => {
  await eel.add(inputData.value());
});

//send data
removeTaskBttn.addEventListener('click', async () => {
  await eel.remove(inputData.value());
});
