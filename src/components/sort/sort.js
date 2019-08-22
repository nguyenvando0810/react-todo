import React from 'react';
import './sort.scss'

class Sort extends React.Component {
  onSort(sortBy, sortValue) {
    this.props.onSort(sortBy, sortValue)
  }

  render() {
    return (
      <div className="sort">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="dropdown-item" onClick={this.onSort.bind(this, 'name', -1)}>
              <div className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'sort-selected' : ''}><i className="fa fa-sort-alpha-asc mr-2" aria-hidden="true"></i>Sort A-Z</div>
            </li>
            <li className="dropdown-item" onClick={this.onSort.bind(this, 'name', 1)}>
              <div className={(this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'sort-selected' : ''}>
                <i className="fa fa-sort-alpha-desc mr-2" aria-hidden="true"></i> Sort Z-A
            </div>
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={this.onSort.bind(this, 'status', -1)}>
              <div className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'sort-selected' : ''}>
                <i className="fa fa-th-list mr-2" aria-hidden="true"></i>Sort active
              </div>
            </li>
            <li className="dropdown-item" onClick={this.onSort.bind(this, 'status', 1)}>
              <div className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'sort-selected' : ''}>
                <i className="fa fa-list-alt mr-2" aria-hidden="true"></i>Sort in active
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;