import React from 'react';
// Components
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendsList';
import TransactionHistory from './TransactionHistory';
// Data
import userData from './user.json';
import stats from './data.json';
import friends from './friends.json';
import items from './transactions';

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

      <FriendList friends={friends} />

      <TransactionHistory
        items={items.map(item => ({
          ...item,
          amount: parseFloat(item.amount),
        }))}
      />
    </div>
  );
};

export default App;
