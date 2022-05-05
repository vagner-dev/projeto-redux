import styled from 'styled-components';
import Img from '../../assets/images/dragonList.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  height: 100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.37);
  color: #ffffff;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.9);
  backdrop-filter: blur(8.5px);
  text-transform: uppercase;
`;

export const IconDragon = styled.div`
  background-image: url(${Img});
  background-position: center;
  background-size: cover;
  width: 200px;
  margin-left: 0.3rem;
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
`;
export const H1 = styled.h1`
  display: flex;
  align-items: center;
`;
