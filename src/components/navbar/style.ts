import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const NavbarWrapper = styled.div`
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const NavbarContainer = styled.div`
    background-color: transparent;
    display: flex;
`;

export const NavbarUnorderedList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    margin: 0;
`;

export const NavbarLink = styled(Link)`
    color: ${colors.primary};
    font-family: 'Esteban';
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    margin-right: 10px;
    width: 100%;
`;

export const NavbarListItem = styled.li`
    display: flex;
    align-items: center;
`;
