import React from 'react';
import Button from '../Button';
import { useContext } from 'react';

import {
  Container,
  IconDragon,
  ContainerInfo,
  Container1,
  DivInfos,
  DivP,
  DivCard,
} from './styles';
import { DragonContext } from '../../contexts/DragonContex';

const InfoDragon: React.FC = () => {
  const { setIsInfoDragon, name, type, description, dateCreation, resetInput } =
    useContext(DragonContext);

  return (
    <DivCard>
      <Container>
        <h1>Informações</h1>
        <Container1>
          <IconDragon />
          <ContainerInfo>
            <DivInfos>
              <h3>Data de criação: </h3>
              <DivP>{dateCreation}</DivP>
              <h3>Nome: </h3>
              <DivP>{name}</DivP>
              <h3>Tipo: </h3>
              <DivP>{type}</DivP>
              <h3>Descrição: </h3>
              <DivP>{description}</DivP>
            </DivInfos>
            <Button
              title="Voltar"
              color="#000129"
              width="200"
              onclick={() => {
                setIsInfoDragon(false);
                resetInput();
              }}
            >
              Voltar
            </Button>
          </ContainerInfo>
        </Container1>
      </Container>
    </DivCard>
  );
};

export default InfoDragon;
