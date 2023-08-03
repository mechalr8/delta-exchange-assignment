import './App.css';
import AddMember from './components/AddMember';
import Modal from './components/Modal';
import TeamMembers from './components/TeamMembers';

function App() {
  return (
    <div className='App'>
      <div className='app-header'>
        <h2 className='title'>Team Members</h2>
        <AddMember />
      </div>
      <hr/>
      <TeamMembers/>
      <Modal />
    </div>
  );
}

export default App;
