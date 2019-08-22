import React from 'react';
import './todo.scss'

class Todo extends React.Component {
  removeTodo() {
    this.props.removeTodo(this.props.todo.id)
  }

  updateTodo() {
    this.props.updateTodo(this.props.todo.id)
  }

  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.todo.name}</td>
        <td className="text-center">
          <span className={this.props.todo.status ? 'badge badge-success' : 'badge badge-danger'}>{this.props.todo.status ? 'Active' : 'In active'}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-info mr-3" onClick={this.updateTodo.bind(this)}><i className="fa fa-pencil mr-2" aria-hidden="true"></i>Edit</button>
          <button type="button" className="btn btn-danger" onClick={this.removeTodo.bind(this)}><i className="fa fa-trash mr-2" aria-hidden="true"></i>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Todo;