import React from "react";
import ChatInputBox from "../components/ChatInputBox";
import { FaPlus, FaBars } from "react-icons/fa";
import { MdOutlineGroupAdd } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

function Main() {
  const getGreeting = () => {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)

    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div className="Main" style={{ textAlign: "center", padding: "20px" }}>
      <header className="Header">
        <div className="HeaderLeft">
          <button className="MenuButton">
            <FaBars />
          </button>
          <img
            className="ProfilePicture"
            src="../assets/images/profilepic.png"
            alt="Profile"
          />
          <span className="ProfileName">Nipun Jayasinghe</span>
        </div>
        <div className="HeaderRight">
          <button className="HeaderButton">
            <MdOutlineGroupAdd size={18} />
          </button>
          <button className="HeaderButton">
            <FiPlus size={18} />
          </button>
        </div>
      </header>
      <div className="Greeting">
        <div className="GreetingContent">
          <img
            className="XiroGPTLogo"
            src="../assets/images/logo.png"
            alt="logo"
          />
          <h1 className="greetingtext">
            {getGreeting()} Nipun!
            <br />
            How can I help you today?
          </h1>
        </div>
      </div>
      <ChatInputBox />

      <div class="previouschats">
        <div class="crcheader">
          <h1>Continue Recent Chats</h1>
        </div>
        <div class="chatBoxes">
          <div class="chatBox">
            <div class="chatBoxContent">
              <span class="chatTitle">Best Coding Practices</span>
              <span class="chatDate">Yesterday</span>
            </div>
            <br></br>
            <button class="chatOptions">
              <span>...</span>
            </button>
          </div>
          <div class="chatBox">
            <div class="chatBoxContent">
              <span class="chatTitle">Design Patterns in real life</span>
              <span class="chatDate">01 Dec 2024</span>
            </div>
            <button class="chatOptions">
              <span>...</span>
            </button>
          </div>
          <div class="chatBox">
            <div class="chatBoxContent">
              <span class="chatTitle">Interview preparation help</span>
              <span class="chatDate">30 Nov 2024</span>
            </div>
            <button class="chatOptions">
              <span>...</span>
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p className="footerText">© XiroGPT</p>
      </footer>
    </div>
  );
}

export default Main;
