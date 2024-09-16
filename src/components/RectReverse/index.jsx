import style from './rect.module.css'

export default function Rect({id, title, text, photo, link}) {

    return (
        <div id={id} className={style.quadradao}>
            <img src={photo}  alt="Foto" />
            <div className={style.quadrado}>
                <h1>{title}</h1>
                <p>{text}</p>
                <a href= {link}>{link}</a>
            </div>
        </div>
    )
}