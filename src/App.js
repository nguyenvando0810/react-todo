import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm/todoForm'
import Sort from './components/sort/sort'
import Search from './components/search/search'
import ListTodo from './components/listTodo/listTodo'
// import demo from './redux/demo.js'
class App extends React.Component {
  render() {
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
              <TodoForm />
            </div>
            <div className="col-md-8">
              <div className="row mb-4">
                <div className="col-md-8">
                  <Search />
                </div>
                <div className="col-md-4">
                  <Sort />
                </div>
              </div>
              <ListTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
