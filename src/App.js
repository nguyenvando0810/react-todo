import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm/todoForm'
import Sort from './components/sort/sort'
import Search from './components/search/search'
import ListTodo from './components/listTodo/listTodo'
import demo from './redux/demo.js'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 100000000,
          name: 'Do Do',
          status: true
        }
      ],
      todoEdit: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: -1
    }

    this.submitForm = this.submitForm.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.onfilter = this.onfilter.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onSort = this.onSort.bind(this)
  }

  componentDidMount() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('todos')) {
      let todos = JSON.parse(localStorage.getItem('todos'))
      this.setState({
        todos: [...todos]
      })
    }
  }

  submitForm(param) {
    var { todos } = this.state

    if (!param.name) {
      return false
    }

    if (param.id === '') {
      const todo = {
        id: Date.now(),
        name: param.name,
        status: param.status
      }
      todos.push(todo)
    } else {
      let indexTodoEdit = todos.findIndex(todo => todo.id === param.id)
      todos[indexTodoEdit] = param
    }

    this.setState({
      todos: todos,
      todoEdit: null
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
    //   // todos: [...this.state.todos, todo]
    // )
  }

  removeTodo(id) {
    let newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: newTodos
    })

    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  updateTodo(id) {
    let indexTodo = this.state.todos.findIndex((todo) => {
      return todo.id === id
    })

    let todoEditing = this.state.todos[indexTodo]

    this.setState({
      todoEdit: todoEditing,
    })
  }

  onfilter(filterName, filterStatus) {
    this.setState({
      filter: {
        name: filterName,
        status: parseInt(filterStatus, 10),
      }
    })
    console.log(this.state.filter)
  }

  onSearch(keyword) {
    this.setState({
      keyword: keyword.toLowerCase()
    })
  }

  onSort(name, value) {
    this.setState({
      sortBy: name,
      sortValue: value
    })
  }

  render() {
    var { keyword, todos, filter, sortBy, sortValue, todoEdit } = this.state

    if (filter) {
      // filter name
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
    }
    // filter keyword
    if (keyword) {
      todos = todos.filter((todo) => {
        return todo.name.toLowerCase().indexOf(keyword) !== -1
      })
    }

    // sort name
    if (sortBy === 'name') {
      todos.sort((a, b) => {
        return (a.name.toLowerCase() < b.name.toLowerCase()) ? sortValue : (a.name.toLowerCase() > b.name.toLowerCase()) ? -sortValue : 0
      })
    } else {
      // sort status
      todos.sort((a, b) => {
        return (a.status < b.status) ? -sortValue : (a.status > b.status) ? sortValue : 0
      })
    }

    return (
      <div className="App">
        <div className="text-center mb-5">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="app-heading">
            <i className="fa fa-quote-left mr-2" aria-hidden="true"></i>
            If you find it hard to laugh at yourself, <br />I would be happy to do it for you.
            <i className="fa fa-quote-right ml-2" aria-hidden="true"></i>
          </h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TodoForm submitForm={this.submitForm} todoEdit={todoEdit} />
            </div>
            <div className="col-md-8">
              <div className="row mb-4">
                <div className="col-md-8">
                  <Search onSearch={this.onSearch} />
                </div>
                <div className="col-md-4">
                  <Sort onSort={this.onSort} sortBy={sortBy} sortValue={sortValue} />
                </div>
              </div>
              <ListTodo
                todos={todos}
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
                onfilter={this.onfilter}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
