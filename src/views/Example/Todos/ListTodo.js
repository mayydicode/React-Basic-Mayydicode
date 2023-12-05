import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "Todo1", title: "Doing my Homework" },
      { id: "todo2", title: "Watching FB" },
      { id: "todo3", title: "Play game" },
    ],
  };

  addNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodo;
    // currentListTodo.push(todo);

    this.setState({
      listTodos: [...this.state.listTodos, todo],
      // currentListTodo.push(todo);
      // listTodo:currentListTodo
    });
  };

  render() {
    let listTodos = this.state.listTodos;
    //Hoac  let{listTodos}=this.state;

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
                    <span className="text-todo">
                      {index + 1} - {item.title}
                    </span>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
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
