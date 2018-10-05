const getLetterMatchCount = (guessedWord, secretWord) => {
    //use sets for storing values 
    const  guessedWordSet = new Set(guessedWord.split(''));
    const secretWordSet = new Set(secretWord.split(''));

    return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length;
};

export { getLetterMatchCount };