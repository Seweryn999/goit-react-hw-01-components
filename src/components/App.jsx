import React from 'react';
// Components
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendsList';
// Data
import userData from './user.json';
import stats from './data.json';
import friends from './friends.json';

const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics
        id={stats.id}
        label={stats.label}
        percentage={stats.percentage}
      />
      <FriendList
        avatar={friends.avatar}
        label={friends.label}
        percentage={friends.percentage}
      />
    </div>
  );
};

export default App;
