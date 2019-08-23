import React from 'react';
import Todo from './todo/todo'
import { connect } from 'react-redux'
class ListTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterName: '',
      filterStatus: -1
    }

    this.onHandleFilter = this.onHandleFilter.bind(this)
  }

  onHandleFilter(e) {
    let target = e.target
    let name = target.name
    let value = target.value

    this.props.onfilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    )

    this.setState({
      [name]: value
    })
  }

  render() {
    let elmTodo = this.props.todos.map((todo, index) => {
      return (
        <Todo
          key={index}
          todo={todo}
          index={index}
          // removeTodo={this.props.removeTodo}
          // updateTodo={this.props.updateTodo}
        />
      )
    })

    return (
      <div className="list__todo">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Name</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" className="form-control" name="filterName" value={this.state.filterName} onChange={this.onHandleFilter} />
              </td>
              <td>
                <select className="form-control" name="filterStatus" value={this.state.filterStatus} onChange={this.onHandleFilter}>
                  <option value={-1}>All</option>
                  <option value={0}>In active</option>
                  <option value={1}>Active</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmTodo}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(ListTodo);