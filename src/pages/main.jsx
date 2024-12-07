import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import ChatInputBox from "../components/ChatInputBox";

import logo1 from "../assets/images/logo.png";
import ChatHead from "../components/ChatHead";

function Main() {
  const navigate = useNavigate(); // Initialize the navigate function

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

  // Function to handle click on a chat box
  const handleChatBoxClick = (chatTitle) => {
    // You can pass the chatTitle to the chat page or use it for any other purpose
    console.log(`Navigating to chat for: ${chatTitle}`);
    navigate("/chat"); // Navigate to the /chat page
  };

  return (
    <div className="Main" style={{ textAlign: "center", padding: "0px" }}>
      <ChatHead />
      <div className="Greeting">
        <div className="GreetingContent">
          <img
            className="XiroGPTLogo animate-spin duration-[3000ms]"
            src={logo1}
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

      <div className="previouschats">
        <div className="crcheader">
          <h1>Continue Recent Chats</h1>
        </div>
        <div className="chatBoxes">
          <div
            className="chatBox"
            onClick={() => handleChatBoxClick("Best Coding Practices")}
          >
            <div className="chatBoxContent">
              <span className="chatTitle">Best Coding Practices</span>
              <span className="chatDate">Yesterday</span>
            </div>
            <button className="chatOptions">
              <span>...</span>
            </button>
          </div>
          <div
            className="chatBox"
            onClick={() => handleChatBoxClick("Design Patterns in real life")}
          >
            <div className="chatBoxContent">
              <span className="chatTitle">Design Patterns in real life</span>
              <span className="chatDate">01 Dec 2024</span>
            </div>
            <button className="chatOptions">
              <span>...</span>
            </button>
          </div>
          <div
            className="chatBox"
            onClick={() => handleChatBoxClick("Interview preparation help")}
          >
            <div className="chatBoxContent">
              <span className="chatTitle">Interview preparation help</span>
              <span className="chatDate">30 Nov 2024</span>
            </div>
            <button className="chatOptions">
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
