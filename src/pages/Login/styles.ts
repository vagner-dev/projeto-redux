import styled from 'styled-components';
import Img from '../../assets/images/backLogin.jpg';

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 450px;
  width: 400px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

export const Container = styled.div`
  display: flex;
  background-image: url(${Img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  height: 120px;
  width: 100%;
`;

export const Texth2 = styled.h2`
  margin: 3rem 0 2rem 0;
  color: white;
  font-size: 50px;
`;
export const Texth1 = styled.h1`
  margin: 3rem 0 2rem 0;
  font-size: 100px;
  color: white;
`;

export const TextContainer = styled.div`
  align-items: center;
  justify-content: center;
`;
