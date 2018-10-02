import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import CongratsComp from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockProps = {
    message:'greg'
};  

const getWrapper = ({}=mockProps) => {
    shallow(<CongratsComp  {...mockProps} />);
    const CongratsComponent = wrapper.find('[data-test="Congrats-component"]');
};

test('renders Congrats Componnt', ()=>{
    
    expect(CongratsComponent.length).toBe(1);
});

test('it renders empty string once message prop is undefined', ()=>{
    console.log(CongratsComponent.text());

    expect(CongratsComponent.length).toBe(1);
});
