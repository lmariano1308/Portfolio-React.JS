import React from 'react';
import { Logo } from '../../assets/svgs/logo';
import { NavbarWrapper } from './style';

function Navbar() {
    return (
        <NavbarWrapper>
            <Logo size={300} />
        </NavbarWrapper>
    );
}

export default Navbar;
