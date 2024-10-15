import './App.css';
import gptlogo from './assets/chatgpt.svg';

import addBtn from './assets/add-30.png';
import messageicon from './assets/message.svg';
import Home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
function App() {
  return(
    <div className='App'>

      <div className='sideBar'>
        <div className='upperSide'>
 
          <div className='upperSideTop'>
            <img src={gptlogo} alt='Logo' className='logo'/>
            <span className='brand'> Anish GPT</span>
          </div>
            <button className='midBtn'>
              <img src={addBtn} alt='New Chat' className='addBtn'/>New Chat
            </button>

            <div className='upperSideBottom'>
              <button className='query'>
                <img src={messageicon} alt='' />What is the Programming Language!
              </button>

              <button className='query'>
                <img src={messageicon} alt='' />How to use an API!
              </button>
            </div>

        </div>
        <div className='lowerSide'>
          <div className="listitems"><img src={Home} alt="Home" className='listitemsImg'/>Home</div>
          <div className="listitems"><img src={saved} alt="Saved" className='listitemsImg'/>Saved</div>
          <div className="listitems"><img src={rocket} alt="Upgrade" className='listitemsImg'/>Upgarde to Pro</div>
        </div>



      </div>
      <div className='main'>
          <div className="chats"></div>

          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder='Send a Message' />
            </div>
          </div>
      </div>

    </div>
  );
}
export default App;