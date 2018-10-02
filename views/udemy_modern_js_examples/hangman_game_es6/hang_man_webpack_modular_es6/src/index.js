import hangManGame from './hang_man_prototype';
import urlRequestPromise from './API_request_service_with_promise';


const word = document.querySelector('#word');
const guesses = document.querySelector('#guesses');
const status = document.querySelector('#status');
const reset = document.querySelector('#reset');



if (!global._babelPolyfill) {
	require('babel-polyfill');
}

let player1;

document.addEventListener('keypress', (event) => {
  const pressLetter = String.fromCharCode(event.charCode);
  player1.makeGuess(pressLetter);
  render();
});


const render = () => {
	word.textContent = player1.puzzle();
    guesses.textContent = player1.attempts;
    
};

/* get new world from API using await and async ******* examples below;*/

const startGame = async () => {
	const attempts = 5;
	let someWords = await urlRequestPromise.getAllCb(2).then((res)=>res.puzzle);
	
	
	player1 = new hangManGame(someWords,attempts);
	console.log(player1.makeGuess('g'));
	//word.textContent = player1.puzzle();

    /*guesses.textContent = player1.attempts;
	status.textContent= '';*/
};

startGame();

//set reset button 
//reset.addEventListener('click', startGame);


