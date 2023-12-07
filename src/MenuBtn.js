import './styles.css';
import './media.css'


function openMenu(active, setActivityСlass) {
    if (active === 'false'){
        setActivityСlass('true')
    } else {
        setActivityСlass('false')
    }
}

function MenuBtn (props) {

    return (
        <button onClick={() => openMenu(props.active, props.setActivityСlass)} className="header-menu-button">
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default MenuBtn