import React from 'react';
import './sort.scss'
import { connect } from 'react-redux'
import * as action from './../../actions/index'
class Sort extends React.Component {
  onSort(sortBy, sortValue) {
    this.props.onSortTodo({by: sortBy, value: sortValue})
  }

  render() {
    const {by, value} = this.props.sort
    return (
      <div className="sort">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="dropdown-item" onClick={this.onSort.bind(this, 'name', -1)}>
              <div className={(by === 'name' && value === -1) ? 'sort-selected' : ''}><i className="fa fa-sort-alpha-asc mr-2" aria-hidden="true"></i>Sort A-Z</div>
            </li>
            <li className="dropdown-item" onClick={this.onSort.bind(this, 'name', 1)}>
              <div className={(by === 'name' && value === 1) ? 'sort-selected' : ''}>
                <i className="fa fa-sort-alpha-desc mr-2" aria-hidden="true"></i> Sort Z-A
            </div>
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={this.onSort.bind(this, 'status', -1)}>
              <div className={(by === 'status' && value === -1) ? 'sort-selected' : ''}>
                <i className="fa fa-th-list mr-2" aria-hidden="true"></i>Sort active
              </div>
            </li>
            <li className="dropdown-item" onClick={this.onSort.bind(this, 'status', 1)}>
              <div className={(by === 'status' && value === 1) ? 'sort-selected' : ''}>
                <i className="fa fa-list-alt mr-2" aria-hidden="true"></i>Sort in active
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSortTodo: (sort) => {
      dispatch(action.sort(sort))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort)