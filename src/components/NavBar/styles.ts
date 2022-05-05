import styled from 'styled-components';

export const Nav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 1;
  background: #000129;
  color: white;
  border-bottom: 1px solid;
  padding-right: 2rem;
`;

export const NavLogo = styled.img`
  background-position: center;
  background-color: rgba(144, 203, 44, 0);
  background-size: cover;
  width: auto;
  height: 90%;
  padding-left: 15px;
`;
export const DivLogo = styled.div`
  display: flex;
  height: 80px;
  width: 300px;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
`;
