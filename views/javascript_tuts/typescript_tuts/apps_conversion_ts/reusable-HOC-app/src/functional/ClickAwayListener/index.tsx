
//typescript cant not find defualt export on React module there needs expoerting * named as React 
import * as React from 'react';
//drop that in tsconfig to allow it : "allowSyntheticDefaultImports": true
import  * as PropTypes from 'prop-types';
//u need to install modules for css types a bit redundant but needed for inline styles

const ClickAwayListenerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
};
/* handleKeyPress is required by airbnb standard lint but in this case is redundant
cause div is not focusable so it wont work  */
const handleKeyPress = (e:React.KeyboardEvent<HTMLDivElement>) => e
const ClickAwayListenerComp = (styles:React.CSSProperties) => {
  //declare your functional component ClickAwayListener with prop clickAway of type function
  const ClickAwayListener:React.FC<{clickAway:(toggleVisible:Boolean)=>void}> = ({clickAway}) => {
    //const { clickAway } = props; this redundant cause it could be destructured as above
    return (
      <div
        style={styles}
        className="pageMask"
        role="presentation"
        onClick={() => { clickAway(true); }}
        onKeyPress={handleKeyPress}
      />
    );
  };
  //this is also redundat since typescript knows that clickAway function is required by default
  /* ClickAwayListener.propTypes = {
    clickAway: PropTypes.instanceOf(Function).isRequired,
  }; */

  return ClickAwayListener;
};

export default ClickAwayListenerComp(ClickAwayListenerStyle);
