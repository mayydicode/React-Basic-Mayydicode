import React from "react";
import "./ListTodo.scss";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "Todo1", title: "Doing my Homework" },
      { id: "todo2", title: "Watching FB" },
      { id: "todo3", title: "Play game" },
    ],
  };

  render() {
    let listTodos = this.state.listTodos;
    //Hoac  let{listTodos}=this.state;

    return (
      <div className="list-todo-container">
        <div className="add-todo">
          <input type="text" placeholder="Nhập data" />
          <button type="button">Add</button>
        </div>
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button className="edit">Edit</button> <> </>
                  <button className="delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodo;
