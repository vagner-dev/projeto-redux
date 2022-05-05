import styled from 'styled-components';
import Img from '../../assets/images/dragonList.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 70%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin-right: 1rem;
  padding: 10px;
`;

export const IconDragon = styled.div`
  background-image: url(${Img});
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  margin: 1px 10px;
  border-radius: 10px;
  border-style: solidbor;
  border-color: red;
`;

export const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1rem;
`;

export const DivP = styled.div`
  border-radius: 15px;
  background: grey;
  width: 100%;
  padding: 10px;
  height: 40px;
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1px;
  width: 100%;
  height: 100%;
`;
