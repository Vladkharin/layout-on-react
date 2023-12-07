import './styles.css';
import './media.css'
import home from './icons/home.svg'
import mail from './icons/mail.svg'
import shuffle from './icons/shuffle.svg'


function Contacts (props) {
    return (
        <div className={props.nameClass}>
            <a href="#">
                <img src={home} alt= 'icons' className="header-contacts-home"/>
            </a>
            <a href="#">
                <img src={mail} alt= 'icons'/>
            </a>
            <a href="#">
                <img src={shuffle} alt= 'icons'/>
            </a>
        </div>
    )
}


export default Contacts