import React, { useContext } from 'react';
import Img from '../../assets/images/logo-targaryan.png';
import Button from '../Button';
import { FiLogOut } from 'react-icons/fi';

import { Nav, NavLogo, DivLogo } from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/LoginControl/actions';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const handleLogout = () => {
    dispath(logout(false));
    //localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <Nav>
      <DivLogo>
        <NavLogo src={Img} />
        <h1>Dragons</h1>
      </DivLogo>
      <Button
        onclick={handleLogout}
        icon={<FiLogOut color="red" size="2rem" />}
      ></Button>
    </Nav>
  );
};

export default NavBar;
