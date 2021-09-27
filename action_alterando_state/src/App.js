import './App.css';
import UserCard from './components/UserCard';
import UserName from './components/UserName'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserName/>
        <UserCard/>
      </header>
    </div>
  );
}

export default App;
