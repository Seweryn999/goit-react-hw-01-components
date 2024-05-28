import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.centered}>
      <li className={styles.item}>
        <div className={styles.statusWrapper}>
          <span
            className={`${styles.status} ${
              isOnline ? styles.online : styles.offline
            }`}
          />
          <span className={styles.statusText}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
        <img
          src={avatar}
          alt="User avatar"
          width="48"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
      </li>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
