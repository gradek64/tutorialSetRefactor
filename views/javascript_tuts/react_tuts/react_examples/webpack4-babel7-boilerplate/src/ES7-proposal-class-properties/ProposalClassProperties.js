import React from "react";

// custom;
import "./styles.scss";

class Proposal extends React.Component {
  state = {
    property: "Proposal",
  };
  myRef = React.createRef();

  scrollParagraph = () => {
    const node = this.myRef.current;
    node.scroll({
      left: 300,
      behavior: "smooth",
    });
  };

  scrollWindow = () => {
    console.log("window", window.scrollTo);
    window.scrollTo({
      bottom: 1000,
      behavior: "smooth",
    });
  };

  render() {
    const { property } = this.state;
    return (
      <>
        <div
          style={{
            width: "200px",
            border: "1px dotted green",
            overflow: "auto",
          }}
          ref={this.myRef}
        >
          <p style={{ width: "500px" }}>
            I will scroll when you click button scroll
          </p>
        </div>
        <button
          onClick={() => {
            this.scrollParagraph();
            this.scrollWindow();
          }}
        >
          button scroll
        </button>
      </>
    );
  }
}

export default Proposal;
