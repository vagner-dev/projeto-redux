import React from 'react';

import { Container } from './styles';
type Props = {
  color?: string;
  onclick?: any;
  icon?: any;
  width?: string;
  title?: string;
};
const Button: React.FC<Props> = (props) => {
  return (
    <Container onClick={props.onclick} color={props.color} name={props.width}>
      {props.title}
      {props.icon}
    </Container>
  );
};

export default Button;
