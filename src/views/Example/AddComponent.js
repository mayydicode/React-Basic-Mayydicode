import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  // DOM Events

  handleOnChangeTitlejob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //Ngăn chặn hành động mặc định của form khi submit, ngăn trình duyệt tự động tải lại trang khi form được gửi đi
    event.preventDefault();

    if (!this.state.title || !this.state.salary) {
      alert(" Missing data");

      // Reset input//
      this.setState({
        title: "",
        salary: "",
      });
      return;
    }
    console.log("check data :", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });

    alert("Submit done");
    // Reset input//
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">Job' title :</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleOnChangeTitlejob(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleOnChangeSalary(event)}
        />
        <br />
        <br />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} />
      </form>
    );
  }
}
export default AddComponent;
