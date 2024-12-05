import './App.css';
import SideBar from './components/SideBar';
import ChatInputBox from './components/ChatInputBox';

function App() {
  return (
    <div className="App">
      <h1>Xiro GPT</h1>
            <SideBar/>
      <ChatInputBox/>
    </div>
  );
}

export default App;
