import React from "react";

/***********

    To make all components reusable again, we need to move the logic back to the [.. withTransformProps] HoC. 
    To achieve this, we need to figure out how to use the [...withTransformProps]
    and [...withSimpleState] HoCs with the [...base component] at the same time and 
    allow the [...renderDisplayList] to only be responsible for the presentation again.
    We can achieve this behavior using &&&& composition $$$$$.


*************/

const withTransformProps = mapperFunc => BaseComponent => baseProps => {
  const transformedProps = mapperFunc(baseProps);
  return <BaseComponent {...transformedProps} />;
};

/*
  *@this component is responsible for logic only 
  *@it has state functionality pass down to Base Component
*/
const withSimpleState = defaultState => BaseComponent => {
  return class WithSimpleState extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: defaultState };
      this.updateState = this.updateState.bind(this);
    }
    updateState(value) {
      console.log("updateState", value);
      this.setState({ value });
    }
    render() {
      return (
        <BaseComponent
          {...this.props}
          stateValue={this.state.value}
          stateHandler={this.updateState}
        />
      );
    }
  };
};

/*
  *@as before this is presentional component it is pure function
  *@that accepts data in props 
*/

/****
 BASE COMPONENT number in stack: 4
 the action for state comes from this compoent up to the component lader up to TOP STATE COMPONENT
***/
const renderDisplayList = ({ list, stateHandler, otherSide }) => (
  <div>
    <button onClick={() => stateHandler(otherSide)}>Switch</button>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
);

/*
  *@this is our logic for filtering function 
  *@as name implies it will filter our data based on state
  *@ from its wrapper it needs list, state, and click event Handler
*/

/****
 FilteredList FUNCTION number in stack: 2
***/
const filteringFn = withTransformProps(({ list, stateValue, stateHandler }) => {
  console.log("stateValue", stateValue);
  const otherSide = stateValue === "dark" ? "light" : "dark";

  console.log("otherSide", otherSide);
  return {
    stateHandler,
    otherSide,
    list: list.filter(char => char.side === stateValue)
  };
});

/****
 BaseComponentFiltered COMPONENT with filtered appleid to it, number in stack: 3
 it will return our BASE COMPONENT with all funtionality needed for state 
 ****/

//the second part of withTransformProps function requires BASE COMPONENT to be passed;
const BaseComponentFiltered = filteringFn(renderDisplayList);

/*
    
    The above Component is static once is consctructed from [...filteringFn] and [...renderDisplayList]
    then is ready to be passed to our Top HoC for state change

*/

//console.log('BaseComponentFiltered', BaseComponentFiltered);

/****
 TOP HOC component that holds logic for state ,  number in stack: 1
 U need to export it to top HOC , this component will take our FILTERED COMPONEMT and it get exported for rendering
***/
const ToggleableFilteredList = withSimpleState("dark")(BaseComponentFiltered);

export default ToggleableFilteredList;
