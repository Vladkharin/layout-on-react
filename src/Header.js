import './styles.css';
import './media.css'

import { useState } from 'react';

import Link from './LinkHeader';
import Contacts from './ContactsHeader';
import Logo from './Logo';
import MenuBtn from './MenuBtn';
import MenuMobile from './MenuMobile';

// function openMenu(){
//     headerElement.classList.toggle('menu-open')
// }

function setClass(active, classTrue, classFalse){
    let classActive = '';

    if (active === 'true') { 
        classActive = classTrue
    } else {
        classActive = classFalse
    }

    return classActive
}

function Header() {

    const [active, setActivityСlass] = useState('false')

    const classActive = setClass(active, 'header menu-open', 'header')

    return(
        <header className={classActive} id="header">
            <div className='container'>
                <Logo/>
                <MenuBtn active={active} setActivityСlass={setActivityСlass}/>
                <MenuMobile setClass={setClass}/>
                <Link nameClass='header-nav'/>
                <Contacts nameClass='header-contacts'/>
            </div>
        </header>
    )
}

export default Header