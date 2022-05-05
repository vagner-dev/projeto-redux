import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.name}px;
  height: 60px;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  box-shadow: white;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
`;
