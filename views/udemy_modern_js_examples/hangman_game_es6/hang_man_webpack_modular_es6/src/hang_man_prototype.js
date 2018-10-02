

class hangManGame {
	constructor(word,number_of_attempts){
		this.guessWord = word.toLowerCase().split('');
		this.guessLetters = [];
		this.attempts = number_of_attempts;
		this.status = 'playing';
	}
	//instead of method you can set get property value 
	puzzle() {
		let puzzle = '';
		//we can use arrow functions cause they dont bind this they maintain it
		this.guessWord.forEach((letter)=>{
			if(this.guessLetters.includes(letter) || letter===' ') {
				puzzle += letter;
			}else {
				puzzle += '*';
			};
		});

		return puzzle;
	}
	makeGuess(guess) {
			//if(this.attempts<=0){
				//return;
			//} 
			//or 

			if(this.status!=='playing'){
				return;
			}
			//update status only if you have still attempts left;
			//console.log('playing',this.attempts);

			guess = guess.toLowerCase();
			const isUnique = !this.guessLetters.includes(guess);
			const isBadGuess = !this.guessWord.includes(guess);
			status.textContent = 'playing';

			if (isUnique) {
				this.guessLetters.push(guess);
			}
			if (isUnique && isBadGuess) {
				this.attempts--;
			}

			this.updateStatus();		
	}
	gameResult() {
		if (this.status === 'playing'){
			return `guesses left: ${this.attempts}`
		} else if (this.status === 'failed') {
			return `nice try! the word is: ${this.guessWord.join('')}`
		} else if (this.status === 'finished'){
			return `'Congratulations! you guessed it!`;
			
		};
	}
	updateStatus() {
		/*const unguessedLetters = this.guessWord.filter((letter)=>{
			//return into array only if the letter is ungueesed
			return !this.guessLetters.includes(letter);
		});
		const finished = unguessedLetters.length === 0;*/

		//or 
		//return true if all letters match for every letter, one fail wholse finished is failed;
		const finished = this.guessWord.every( (letter)=> this.guessLetters.includes(letter) );

		if (this.attempts===0) {
			this.status = 'failed';	
		} else if (finished) {
			this.status = 'finished';
		} else {
			this.status = 'playing';
		}

		status.textContent = this.gameResult();
	}
}

export { hangManGame as default }
