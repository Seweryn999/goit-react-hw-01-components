import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import userData from './user.json';
import stats from './data.json';

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
    </div>
  );
};

export default App;
