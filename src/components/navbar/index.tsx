import React from 'react';
import { Logo } from '../../assets/svgs/logo/logo';
import {
    NavbarContainer,
    NavbarLink,
    NavbarListItem,
    NavbarUnorderedList,
    NavbarWrapper,
} from './style';

function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <Logo size={300} />

                <NavbarUnorderedList>
                    <NavbarListItem>
                        <NavbarLink>Home</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink>About</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink>Home</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink>Home</NavbarLink>
                    </NavbarListItem>
                </NavbarUnorderedList>
            </NavbarContainer>
        </NavbarWrapper>
    );
}

export default Navbar;
