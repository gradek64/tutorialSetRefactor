import React from "react";

const style = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh"
};
const ClickAwayListener = styles => props => (
  <div
    style={styles}
    onClick={() => {
      props.clickAway(true);
    }}
  />
);

export default ClickAwayListener(style);
