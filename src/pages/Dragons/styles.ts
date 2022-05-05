import styled from 'styled-components';
import Img from '../../assets/images/targaryen.jpg';

export const Container = styled.div`
  background-image: url(${Img});
  width: 100%;
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1px;
  width: 100%;
  height: 100%;
  background-color: red;
`;
