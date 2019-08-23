import React from 'react';
import './todoForm.scss'
import { connect } from 'react-redux'
import * as action from './../../actions/index'
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    }

    this.onhandleChangeInput = this.onhandleChangeInput.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    //run when props change
    if (nextProps.todoEdit) {
      this.setState({
        id: nextProps.todoEdit.id,
        name: nextProps.todoEdit.name,
        status: nextProps.todoEdit.status
      })
    }
  }

  onhandleChangeInput(e) {
    let target = e.target
    let name = target.name
    let value = target.value

    if (name === 'status') {
      value = (target.value === 'true') ? true : false
    }

    this.setState({
      [name]: value
    })
  }

  submitForm(e) {
    e.preventDefault()
    // this.props.submitForm(this.state)
    this.props.onAddTodo(this.state)
    this.setState({
      id: '',
      name: '',
      status: true
    })
  }

  cancelForm() {
    this.setState({
      id: '',
      name: '',
      status: true
    })
  }

  render() {
    return (
      <div className="todo__form">
        <div className="todo__form--warpper">
          <div className="todo__form-heading">Form todos</div>
          <div className="todo__form-content">
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Todos..." onChange={this.onhandleChangeInput} />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <select className="form-control" name="status" value={this.state.status} onChange={this.onhandleChangeInput}>
                  <option value={true}>Active</option>
                  <option value={false}>In active</option>
                </select>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary mr-3"><i className="fa fa-pied-piper mr-1" aria-hidden="true"></i> Save</button>
                <button type="button" className="btn btn-default" onClick={this.cancelForm.bind(this)}><i className="fa fa-modx mr-2" aria-hidden="true"></i>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {

  return {
    todoEdit: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTodo : (todo) => {
      dispatch(action.add_todo(todo))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);