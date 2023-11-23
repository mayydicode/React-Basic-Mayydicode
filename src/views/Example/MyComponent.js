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
    firtName: "",
    lastName: "",
  };
  // DOM Events
  handleOnChangefistName = (event) => {
    this.setState({
      fistName: event.target.value,
    });
  };

  handleOnChangelastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //Ngăn chặn hành động mặc định của form khi submit, ngăn trình duyệt tự động tải lại trang khi form được gửi đi
    event.preventDefault();
    alert("Submit done");
  };

  render() {
    console.log(">>> This data", this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.fistName}
            onChange={(event) => this.handleOnChangefistName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangelastName(event)}
          />
          <br />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </>
    );
  }
}
export default MyComponent;
