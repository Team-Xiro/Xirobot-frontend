import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Chat from './pages/chat.jsx';
import NewPage2 from './pages/NewPage2.jsx';
import Newpage3 from './pages/Newpage3.jsx';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Chat/>} />
          <Route path="/new2" element={<NewPage2/>} />
          <Route path="/new3" element={<Newpage3/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
