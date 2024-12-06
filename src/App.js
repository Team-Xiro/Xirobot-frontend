import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import NewPage2 from "./pages/NewPage2.jsx";
import Newpage3 from "./pages/Newpage3.jsx";
import NewPage4 from "./pages/NewPage4.jsx";
import Main from "./pages/main.jsx";
import PopUpWindow from "./components/addnewmemb";
import SideBar from "./components/SideBar.jsx";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen flex">
        {/* Sidebar component, passing the setSidebarOpen to update its state */}
        <SideBar setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <div
          className={`transition-all duration-500 ease-in-out flex-grow ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`} // Adjust the margin-left based on the sidebar state
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/chat" element={<NewPage2 />} />
            <Route path="/groupchat" element={<Newpage3 />} />
            <Route path="/voicechat" element={<NewPage4 />} />
            <Route path="/PopUpWindow" element={<PopUpWindow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
