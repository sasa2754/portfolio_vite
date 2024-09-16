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
        <Rect id={'Kangoroo'} title={'Kangoroo'} text={'O Kangoroo é meu maior projeto até agora, ele foi desenvolvido como projeto final da matéria de web na bosch, é meu xodózinho, ele é inspirado na rede social "Instagram", fizemos ele em duas semanas, superando o previsto para o pouco tempo. Ele tem todas as funcionalidades de uma rede social, como postar, curtir, comentar e até mesmo um chat em tempo real.'} photo={'img/kangorooLogo.png'} link={'https://github.com/wallacin07/SocialMedia_WebProject.git'}></Rect>
        <RectReverse id={'Historico'} title={'Historico'} text={'Eu já trabalhei como aprendiz na rede de supermercados Angeloni, fiquei um tempo como atendente em uma papelaria e, atualmente, estou trabalhando como aprendiz em soluções digitais na Bosch.'} photo={'img/boschLogo.png'}></RectReverse>
      </main>
      
      <footer id='Contato'>
        <h3>Informações de contato:</h3>
      </footer>
    </>
  )
}

export default App
