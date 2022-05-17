import React from 'react'
import { HeaderContainer, Logo } from './styles'

import Icone from '../../assets/OIP.jpg'

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='Pitu - Encurtador de URL'/>

            </HeaderContainer>
        </>
    )
}

export default Header;