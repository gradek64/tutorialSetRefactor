const word = document.querySelector('#word');
const guesses = document.querySelector('#guesses');
const status = document.querySelector('#status');
const reset = document.querySelector('#reset');



//assign values to html;

//set getter and setter for player1.puzzle

let player1;

document.addEventListener('keypress', (event) => {
  const pressLetter = String.fromCharCode(event.charCode);
  player1.makeGuess(pressLetter);
  render();
});


const render = () => {
	word.textContent = player1.puzzle;
    guesses.textContent = player1.attempts;
    
};

//external API for words 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = (e)=> {
    if (e.target.readyState == 4 && e.target.status == 200) {
       // Action to be performed when the document is read;
    }
};
xhttp.open("GET", "http://puzzle.mead.io/puzzle/", true);
xhttp.send();


urlRequest.getAllCb((data,error)=>{
	console.log(data);
	console.log(error);
});

urlRequestPromise.getAllCb(2).then((data)=>{
	console.log(data);
}, (err)=>{
	console.log(err);
});

/* get new world from API using await and async ******* examples below;*/

const startGame = async () => {
	const attempts = 5;
	let someWords = await urlRequestPromise.getAllCb(2).then((res)=>res.puzzle);
	player1 = new hangManGame(someWords,attempts);
	word.textContent = player1.puzzle;
    guesses.textContent = player1.attempts;
	status.textContent= '';
};

startGame();

//set reset button 
reset.addEventListener('click', startGame);







/*

		Examples with promises and APIs

*/



//using ES6 fetch method;
urlRequestPromiseFetch.getAllCb('MX').then((res)=>{
	//cool feature to incorporate a diffrent promise and chain it here;
	return urlRequestPromise.getAllCb(2).then((randomText)=>{
		return Object.assign(randomText, res)
	}); //this is object to be added 
})
.then((combinedData)=> console.log(combinedData))
.catch((error)=> 'something got wrong '+error);


//using ES6 fetch method with await;
urlRequestPromiseFetchAwait.getAllCb('MX').then((res)=>{
	console.log('res from await', res);
});

//then you can also convert urlRequestPromiseFetch() in async method with await as below;
const urlRequestPromiseFetchASYNC = async ()=> {
	const country = await urlRequestPromiseFetch.getAllCb('MX');
	const randomText = await urlRequestPromise.getAllCb(2);

	//return anything from both promises;
	return Object.assign(country, randomText);

};

urlRequestPromiseFetchASYNC().then((data)=>{ console.log('urlRequestPromiseFetchASYNC', data);})


