import Profile from './components/Profile/Profile';
import user from 'path/to/user.json';
import data from '/path/to/data.json';
import friends from 'path/to/friends.json';
import transactions from 'path/to/transactions.json';

const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
export default App;
