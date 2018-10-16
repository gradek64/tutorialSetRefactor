import React from 'react';


/*
  *@HOC componemt with State so it is a class;
  *@the trick is to wrap class into function and return a class;
*/
const fnExtensionClass = (BaseComponent) => {
    return class SimpleState extends React.Component {
        constructor(props){
            super(props);
            this.state = {value:props.side};
            this.updateState = this.updateState.bind(this);
        }
        updateState(){
            const flip = this.state.value==='dark' ? 'light' : 'dark';
            this.setState({value:flip});
        }
        render(){
            const filteredList = this.props.list.filter(({side:orig})=>orig===this.state.value);
            return <BaseComponent list={filteredList} action={this.updateState} />;
        }
    };
};


const renderDisplayList = ({ list, action }) =>
    <div>
        <button onClick={ ()=>{ action();} }>onClick Me</button>
        {list.map(char =>
            <div key={char.name}>
                <div>Character: {char.name}</div>
                <div>Side: {char.side}</div>
            </div>
        )}
    </div>;


/*
  *@the is only one way to call React class
  *@by JSX <ClassName prop={} />
*/
export default fnExtensionClass(renderDisplayList); //this function returns a class;

