import './styles.css';
import './media.css'


function Link(props) {
    return( 
        <nav className={props.nameClass}>
            <a href="#">Services</a>
            <a href="#">Product</a>
            <a href="#">Technology</a>
            <a href="#">About</a>
            <a href="#">Client</a>
            <a href="#">Partner</a>
        </nav>
    )
}

export default Link