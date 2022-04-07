import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './todo-list-item.css';
import PropTypes from 'prop-types';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }
    const date = formatDistanceToNow(new Date(), { addSuffix: true });

    return (
      <div className={classNames}>
        <div>
          {' '}
          <span
            role="button"
            tabIndex={0}
            className="todo-list-item-label"
            onClick={onToggleDone}
            onKeyDown={onToggleDone}
          >
            {label}
          </span>
          <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportant}>
            <i className="bi bi-exclamation-square" />
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
            <i className="bi bi-trash" />
          </button>{' '}
        </div>
        <span className="date-style">Generated {date}</span>
      </div>
    );
  }
}
TodoListItem.defaultProps = {
  label: 'label name',
  done: false,
  onDeleted: () => [],
  onToggleImportant: () => [],
  onToggleDone: () => [],
};
TodoListItem.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
};
export default TodoListItem;
