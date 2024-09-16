import { useState } from 'react'
import Modal from './components/Modal'
import './App.module.css'
import Rect from './components/Rect';
import RectReverse from './components/RectReverse'

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
        <Rect id={'SobreMim'} title={'Sobre mim'} text={'Meu nome é Sabrina, eu tenho 19 anos, comecei a estudar programação no final de 2023. Minha área favorita é programação web, mas gosto de me aventurar em várias áreas!'} photo={'/img/eu.jpg'}></Rect>
        <RectReverse id={'DrumsHero'} title={'Drums Hero'} text={'Meu primeiro projeto grandioso foi o Drums Hero, ele foi inspirado no jogo de ritmo "guitar hero", ele foi feito como projeto final da matéria de IoT na bosch, consistia em uma bateria elétrica com 6 tambores e um site para acompanhar as músicas.'} photo={'./img/drums.jpg'} link={'https://github.com/sasa2754/Drums_Hero.git'}></RectReverse>
      </main>
      
      <footer id='Contato'>
        <h3>Informações de contato:</h3>
      </footer>
    </>
  )
}

export default App
