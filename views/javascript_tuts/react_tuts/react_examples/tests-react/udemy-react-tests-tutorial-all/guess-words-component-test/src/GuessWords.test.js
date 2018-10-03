import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import  checkPropTypes  from 'check-prop-types';

/*

    For testing prop types required we use package called 'check-prop-types' and
    and method called assertPropTypes;


*/
import GuessWords from './GuessWords';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockProps = {
    guessWords:[
        { guessWord:'train',letterMatchCount:3},
        { guessWord:'train',letterMatchCount:1},
        { guessWord:'party',letterMatchCount:5},
    ]
};



const setup = (mockProps={}) => {
    const wrapper = (<guessWords {...mockProps}/>);
    return wrapper.find('');
};

describe('if there are words gueessed',()=>{

    let GuessWordsCompoent;
    beforeEach(() => {
        GuessWordsCompoent =  setup();
    });

    test('check the prop types required is valid', ()=>{
        let propTypesType = checkPropTypes(GuessWords.propTypes, {...mockProps}, 'prop', GuessWords.message);
        expect(propTypesType).toBeUndefined();
    });
});
