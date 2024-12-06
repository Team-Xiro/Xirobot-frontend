import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NewPage2 from "./pages/NewPage2.jsx";
import Newpage3 from "./pages/Newpage3.jsx";
import NewPage4 from "./pages/NewPage4.jsx";
import Main from "./pages/main.jsx";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* <Route path="/" element={<NewPage2 />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<NewPage2 />} />
          <Route path="/groupchat" element={<Newpage3 />} />
          <Route path="/voicechat" element={<NewPage4 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
