import React from 'react';
type Props = {
  type: string;
  placeholder: string;
  onchange: any;
  value: string;
};
import { StyledInput } from './styles';

const Imput: React.FC<Props> = (props) => {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e) => {
        props.onchange(e.target.value);
      }}
      value={props.value}
    />
  );
};

export default Imput;
