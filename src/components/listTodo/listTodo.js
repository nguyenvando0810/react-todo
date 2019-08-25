import React from 'react';
import Todo from './todo/todo'
import { connect } from 'react-redux'
import * as action from './../../actions/index'
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

    this.setState({
      [name]: value
    }, () => {
      let filter = {
        'name': this.state.filterName,
        'status': parseInt(this.state.filterStatus, 10)
      }

      this.props.onFilterTodo(filter)
    })
  }

  render() {
    let {todos, filter, search, sort} = this.props

    if (filter.name) {
      todos = todos.filter((todo) => {
        return todo.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
      })
    }

    // filter status
    todos = todos.filter((todo) => {
      if (filter.status === -1) {
        return todo
      } else {
        return todo.status === (filter.status === 1 ? true : false)
      }
    })

    //Search
    todos = todos.filter((todo) => {
      return todo.name.toLowerCase().indexOf(search) !== -1
    })

    // sort name
    if (sort.by === 'name') {
      todos.sort((a, b) => {
        return (a.name.toLowerCase() < b.name.toLowerCase()) ? sort.value : (a.name.toLowerCase() > b.name.toLowerCase()) ? -sort.value : 0
      })
    } else {
      // sort status
      todos.sort((a, b) => {
        return (a.status < b.status) ? -sort.value : (a.status > b.status) ? sort.value : 0
      })
    }

    let elmTodo = todos.map((todo, index) => {
      return (
        <Todo
          key={index}
          todo={todo}
          index={index}
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
    todos: state.todos,
    filter: state.filter,
    search: state.search,
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTodo: (filter) => {
      dispatch(action.filter_todo(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);