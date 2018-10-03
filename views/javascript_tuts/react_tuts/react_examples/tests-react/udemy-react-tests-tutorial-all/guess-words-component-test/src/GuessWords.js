import React from 'react';
import PropTypes from 'prop-types';

const contents = (props) => (
    <div data-test='guessWords-component'>
        <h1>Congrats U have one {props.message}</h1>      
    </div>
);
const GuessWords = (props)=> {

    if (props.guessWords.length === 0){
        return (
            contents(props)
        );
    }else {
        return <div data-test='guessWords-component'/>;
    }
};

GuessWords.propTypes = {
    guessWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessWord:PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired,
        })
    ).isRequired,
};


export default GuessWords;
