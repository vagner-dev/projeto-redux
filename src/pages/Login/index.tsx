import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../store/LoginControl/actions';
import {
  StyledBox,
  Container,
  InputContainer,
  Texth2,
  Texth1,
  TextContainer,
} from './styles';
const { loginAdmin, password } = {
  loginAdmin: 'admin',
  password: 'admin',
};
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const navigate = useNavigate();
  const dispath = useDispatch();
  const handleLogin = () => {
    if (email === loginAdmin && passWord === password) {
      //localStorage.setItem('token', 'token');
      dispath(login(true));
      navigate('/home');
    } else {
      alert('Email ou senha estão errados!');
    }
  };
  return (
    <Container>
      <TextContainer>
        <Texth1>Dragons</Texth1>
      </TextContainer>
      <StyledBox>
        <Texth2>Login</Texth2>
        <InputContainer>
          <Input
            type="text"
            placeholder="Email"
            onchange={setEmail}
            value={email}
          />
          <Input
            type="password"
            placeholder="Senha"
            onchange={setPassWord}
            value={passWord}
          />
        </InputContainer>
        <Button
          onclick={handleLogin}
          color={'#000129'}
          title={'Logar'}
          width={'200'}
        />
      </StyledBox>
    </Container>
  );
};

export default Login;
