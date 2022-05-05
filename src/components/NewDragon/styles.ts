import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
  height: 100%;
  width: 70%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin-right: 1rem;
  padding: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  margin: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  width: 100%;
`;
export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1px;
  width: 100%;
  height: 100%;
`;
