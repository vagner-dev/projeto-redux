import { useState, useContext } from 'react';
import { Container, IconDragon, DivButton, H1 } from './styles';
import Button from '../Button';
import { DragonContext } from '../../contexts/DragonContex';
import { AiFillEye } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
type CardProps = {
  name: string;
  id: number;
};

const Card: React.FC<CardProps> = (props) => {
  const [idDragon] = useState(props.id);
  const { deleteDragon, getDragon, setIsInfoDragon, setIsEditDragon } =
    useContext(DragonContext);
  return (
    <Container>
      <IconDragon />
      <H1>{props.name}</H1>

      <DivButton>
        <Button
          icon={<AiFillEye color="#2ecbaa" title="Visualizar" size={'3rem'} />}
          color={'#000129'}
          width={'100'}
          onclick={() => {
            setIsInfoDragon(true);
            getDragon(idDragon);
          }}
        >
          Visualizar
        </Button>
        <Button
          icon={<FaEdit color="#e6d328" size="2rem" />}
          color={'#000129'}
          width={'100'}
          onclick={() => {
            setIsEditDragon(true);
            getDragon(idDragon);
          }}
        >
          Editar
        </Button>
        <Button
          icon={<MdDeleteForever color="#c5485a" size="2rem" title="Deletar" />}
          color={'#000129'}
          width={'100'}
          onclick={() => {
            deleteDragon(idDragon);
          }}
        >
          Excluir
        </Button>
      </DivButton>
    </Container>
  );
};

export default Card;
