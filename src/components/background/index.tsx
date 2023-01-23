import React from 'react';
import { Container } from './style';

interface IBackgroundProps {
    children: React.ReactNode;
}

function Background({ children }: IBackgroundProps) {
    return <Container>{children}</Container>;
}

export default Background;
