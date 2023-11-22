// import React from "react";

// class MyPomponent extends React.Component {
//   render() {
//     return <div>Hello my Component</div>;
//   }
// }

// export default MyPomponent;

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Ngan",
    adress: "PBC",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    // let newName = "milo";
    return (
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          <br />
          My name is : {this.state.name}
        </div>
      </>
    );
  }
}
export default MyComponent;
