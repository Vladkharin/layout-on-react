import './styles.css';
import './media.css'

import Link from './LinkHeader';
import Contacts from './ContactsHeader';



function MenuMobile() {

   return(
    <div className='header-menu-mobile'>
        <div className="container">
            <Link nameClass='header-menu-mobile-nav'/>
            <Contacts nameClass='header-menu-mobile-contacts'/>
        </div>
    </div>
   )
}

export default MenuMobile