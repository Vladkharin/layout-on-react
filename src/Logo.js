import logo from './images/logo.svg'
import './styles.css';
import './media.css'

function Logo() {
    return (
        <a href="#" className="header-logo">
            <img src={logo} alt='logo'/> 
        </a>
    )
}

export default Logo