import React, { useEffect, useContext } from 'react';
import Card from '../../components/CardDragon';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import NewDragon from '../../components/NewDragon';
import InfoDragon from '../../components/InfoDragon';
import Footer from '../../components/Footer';
import { Container, Wrapper } from './styles';
import { DragonContext } from '../../contexts/DragonContex';
import { useDispatch, useSelector } from 'react-redux';
import { getRequest } from '../../store/LoginControl/actions';

const Dragons: React.FC = () => {
  const {
    resData,
    isNewDragon,
    setIsNewDragon,
    isEditDragon,
    LoadingApi,
    isInfoDragon,
    setIsModal,
  } = useContext(DragonContext);
  useEffect(() => {
    LoadingApi();
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <Button
            color="green"
            title="Novo Dragão"
            onclick={() => {
              setIsNewDragon(true);
            }}
          >
            Novo Dragão
          </Button>
          {resData
            ? resData.map((item) => {
                return (
                  <Card key={item.id} name={item.name} id={parseInt(item.id)} />
                );
              })
            : console.log('Sem dragões')}
        </Wrapper>
        {isNewDragon ? <NewDragon title={'Criar novo Dragão'} /> : null}
        {isEditDragon ? <NewDragon title={'Editar Dragão'} /> : null}
        {isInfoDragon ? <InfoDragon /> : null}
      </Container>
      <Footer />
    </>
  );
};

export default Dragons;
