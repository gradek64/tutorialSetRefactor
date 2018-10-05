import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { storeFactory }  from './testHelpers';
import InputWord from './InputWord';
import successReducer from './reducers/successReducer';
Enzyme.configure({ adapter: new EnzymeAdapter() });


const setup = (initialState={ grab: false , success: false }) => {

    /*
      *@U can inititiate your store with data diffrent to initial by
      *@create your own testing store so initial data will have state you want to test
    */
    /*
      *@below this weird structure is to call appropriate reducers
      *@and call (change) store properties of defined reducer
      *@shortcut to test only reducer you want in integration test;
    */
    const store = storeFactory( initialState, {
        grab:successReducer, 
        success:successReducer
    });
    //dive method allows you to go inside InputWord render 
    console.log(store.getState());
    const InputWordComponent = shallow(<InputWord store={store} />).dive();
    return InputWordComponent;
};

setup();
describe('render InputWord component', () => {
    test('',()=>{});
    /*test('compoent renders without errors',()=>{
        const component = setup().find('[data-test="InputWord-component"]');
        expect(component.length).toBe(1);
    });
    
    describe('word has been gueessed success:true', () => {
        const updateStore = setup( { success:true } );

        test('does not renders input box',() => {
            const inputBox = updateStore.find('[data-test=\'input-box\']');
            expect(inputBox.length).toBe(0);
        });
        test('does noe renders submit button',() => {
            const buttonBox = updateStore.find('[data-test=\'button-box\']');
            expect(buttonBox.length).toBe(0);
        });
    });
    describe('word has not been gueessed success:false ', () => {
        const updateStore = setup( { success:false } );

        test('does render input box',() => {
            const inputBox = updateStore.find('[data-test=\'input-box\']');
            expect(inputBox.length).toBe(1);
        });
        test('does render submit button',() => {
            const buttonBox = updateStore.find('[data-test=\'button-box\']');
            expect(buttonBox.length).toBe(1);
        });
    });*/
});
