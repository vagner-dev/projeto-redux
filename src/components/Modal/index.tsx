import React from 'react';

import { Container } from './styles';
type Props = {
  text: string;
};
const Modal: React.FC = () => {
  return (
    <Container>
      <h1>Modal</h1>
    </Container>
  );
};

export default Modal;
