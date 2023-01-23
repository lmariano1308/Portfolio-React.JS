import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.background};
    flex-direction: column;
    padding: 10px;
    flex: 1;
`;
