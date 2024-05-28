import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem';
import styles from './FriendsList';

const FriendList = ({ friends }) => {
  if (!Array.isArray(friends)) return null;

  return (
    <div className={styles.friendListContainer}>
      <ul>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

FriendList.defaultProps = {
  friends: [],
};

export default FriendList;
