import style from './modal.module.css'

export default function Modal({visible}) {
    console.log(visible)
    return (
        <div className={visible ? style.modal : style.vazio}>
            <a href="#SobreMim"><h3>Sobre mim</h3></a>
            <a href=""><h3>Drums Hero</h3></a>
            <a href=""><h3>Histórico</h3></a>
            <a href=""><h3>Contato</h3></a>
        </div>
    )
}