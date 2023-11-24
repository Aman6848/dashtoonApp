import Header from './components/Header';
import Form from './components/Form';
import StoryBoard from './components/StoryBoard';
import './App.css';
import './index.css';
import { useState } from 'react';

function App() {

  const [prompts, setPrompts] = useState([]);

  return (

    <div style={{backgroundImage:'url("https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=996&t=st=1700848844~exp=1700849444~hmac=3c17fc3c38fa8fa62dabfec0c7138d35ab15f2efbbd15ea46c6287b6739d658a")'}}>

      <Header />

      <main className='container' style={{height: "auto", overflowX: "hidden",
  overflowY: "auto", margin: "15px"}}>
        <Form setPrompts={setPrompts}/>
        <div style={{backgroundColor:"white", borderRadius:"15px", marginLeft:"15px", width:"100%", opacity:"70%"}}>
        <StoryBoard prompts = {prompts}/>
        </div>
        
      </main>

    </div>

  );
}

export default App;
