import { useState } from 'react'
import Modal from './components/Modal'
import style from'./App.module.css'
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
        <Rect id={'SobreMim'} title={'Sobre mim'} text={'Olá, meu nome é Sabrina e tenho 19 anos. Comecei a estudar programação no final de 2023 e, embora minha área de interesse principal seja a programação web, também gosto de explorar diferentes campos dentro da tecnologia.'} photo={'/img/eu.jpg'}></Rect>
        <RectReverse id={'DrumsHero'} title={'Drums Hero'} text={'Meu primeiro projeto significativo foi o Drums Hero, inspirado no famoso jogo de ritmo "Guitar Hero". Desenvolvi esse projeto como atividade final na disciplina de IoT na Bosch. O Drums Hero consiste em uma bateria eletrônica com seis tambores e um site dedicado ao acompanhamento das músicas.'} photo={'./img/drums.jpg'} link={'https://github.com/sasa2754/Drums_Hero.git'}></RectReverse>
        <Rect id={'Kangoroo'} title={'Kangoroo'} text={'O Kangoroo é o meu maior projeto até o momento e tem um lugar especial no meu coração. Desenvolvido como projeto final na disciplina de web na Bosch, o Kangoroo é inspirado na rede social Instagram. Trabalhamos intensamente por duas semanas, superando as expectativas para o tempo disponível. O projeto inclui todas as funcionalidades típicas de uma rede social, como postagem, curtidas, comentários e até mesmo um chat em tempo real.'} photo={'img/kangorooLogo.png'} link={'https://github.com/wallacin07/SocialMedia_WebProject.git'}></Rect>
        <RectReverse id={'Historico'} title={'Histórico'} text={'Já tive a oportunidade de trabalhar como aprendiz na rede de supermercados Angeloni e passei um período como atendente em uma papelaria. Atualmente, estou atuando como aprendiz em soluções digitais na Bosch.'} photo={'img/boschLogo.png'}></RectReverse>
      </main>
      
      <footer id='Contato'>
        <h3>Informações de contato:</h3>
        <a href="https://github.com/sasa2754"><img className={style.icone} src="/img/github.png" alt="github" /></a>
        <a href="https://www.instagram.com/sabrina.2754?igsh=bHAwZ2Y4dXZqNmNv"><img className={style.icone} src="/img/instagram.png" alt="instagram" /></a>
        <a href=" https://wa.me/41995213923/?text=Olá,%20tudo%20bem?"><img className={style.icone} src="/img/whatsapp.png" alt="whatsapp" /></a>

      </footer>
    </>
  )
}

export default App
