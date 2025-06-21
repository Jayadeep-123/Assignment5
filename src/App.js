import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Screen from './components/Screen';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <div className='content d-flex gap-2'>
        <Sidebar />
        <Routes>
          <Route path="/*" element={<Screen />} />
          {/* if needed: <Route path="admin/*" element={<AdminPanel />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
