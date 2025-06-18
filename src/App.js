import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Screen from './components/Screen';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='content'>
        <Sidebar />
        <Screen/>
      </div>
    </div>



  );
}

export default App;
