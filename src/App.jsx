import { useState } from 'react'
import Modal from './components/Modal'
import './App.module.css'
import Rect from './components/Rect';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <header>
        <h1>Portfólio Sabrina</h1>
        <img onClick={() => setVisible(prev => !prev)} src="/img/menu.png" alt="menu" style={{width: '30px'}}/>
      </header>

      <Modal visible={visible}></Modal>

      <main>
        
      </main>
      
    </>
  )
}

export default App
