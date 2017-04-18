import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadUsers } from '../../redux/modules/users';

@connect(
  ({ users }) => ({ users }),
  {
    loadUsers,
  })
export default class Main extends PureComponent {
  static propTypes = {
    users: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <ul>
          {
            users.entities.map((user, i) =>
              <li key={i}>{user.username} {user.email}</li>)
          }
        </ul>
      </div>
    );
  }
}
