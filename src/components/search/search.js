import React from 'react';
import './search.scss'
import { connect } from 'react-redux'
import * as action from './../../actions/index'
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }

    this.onChangeKeyword = this.onChangeKeyword.bind(this)
  }

  onChangeKeyword(e) {
    let target = e.target
    let name = target.name
    let value = target.value

    this.setState({
      [name]: value
    })
  }

  onSearch() {
    this.props.onSearchTodo(this.state.keyword)
  }

  render() {
    return (
      <div className="search">
        <input type="text" className="form-control" placeholder="Search..." name="keyword" value={this.state.keyword} onChange={this.onChangeKeyword}/>
        <button type="button" name="" id="" className="btn btn-primary" onClick={this.onSearch.bind(this)}><i className="fa fa-envira mr-1" aria-hidden="true"></i> Search</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearchTodo: (search)=> {
      dispatch(action.search(search))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);