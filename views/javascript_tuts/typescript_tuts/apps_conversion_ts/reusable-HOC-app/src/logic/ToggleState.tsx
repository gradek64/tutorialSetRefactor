import * as React from 'react';

/*
  *@this is very clever class all it does it provides logic for toggling (state of true or false)
  and expose it toggleMethod and toggle state in props.render to other components
  *@
*/

//class itself
interface IToggleState {
  toggle:(toggle:Boolean)=>void;
}

//react class interface
interface IProps {
  render:(
    toggleMethod:(toggle:Boolean)=>void,
    toggleState:Boolean
    )=>{};
}
interface IState {
  toggle:Boolean;
}

class ToggleState extends React.Component<IProps,IState> implements IToggleState {
  state:IState = {
    toggle: false,
  };
  toggle = (toggle:Boolean) => {
    this.setState({ toggle: !toggle });
  };

  render() {
    const { toggle } = this.state;
    const { render } = this.props;
    return (
      <React.Fragment>{render(this.toggle, toggle)}</React.Fragment>
    );
  }
}


export default ToggleState;
