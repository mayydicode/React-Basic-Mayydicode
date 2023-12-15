import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      alert("Missing data");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);

    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          className="input-add"
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
          placeholder="Nhập data"
        />
        <button
          className="add"
          onClick={() => this.handleAddTodo()}
          type="button"
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
