import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "Todo1", title: "Doing my Homework" },
      { id: "todo2", title: "Watching FB" },
      { id: "todo3", title: "Play game" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodo;
    // currentListTodo.push(todo);

    this.setState({
      listTodos: [...this.state.listTodos, todo],
      // currentListTodo.push(todo);
      // listTodo:currentListTodo
    });
    toast.success("Done");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete success");
  };

  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    // let listTodos = this.state.listTodos;
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check isEmptyObj :", isEmptyObj);

    return (
      <>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />

          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span className="text-todo">
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default ListTodo;
