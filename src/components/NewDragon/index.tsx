import Input from '../../components/Input';
import { StyledBox, InputContainer, ContainerInfo, DivCard } from './styles';
import Button from '../../components/Button';
import { useContext } from 'react';
import { DragonContext } from '../../contexts/DragonContex';

type Props = {
  title: string;
};
const NewDragon: React.FC<Props> = (props) => {
  const {
    saveDragon,
    name,
    setName,
    type,
    setType,
    description,
    setDescription,
    setIsNewDragon,
    setIsEditDragon,
    isNewDragon,
    editDragon,
    idToEdit,
    resetInput,
  } = useContext(DragonContext);
  const saveOrEdit = (id: string) => {
    isNewDragon ? saveDragon() : editDragon(id);
  };
  return (
    <DivCard>
      <StyledBox>
        <h1>{props.title}</h1>
        <ContainerInfo>
          <InputContainer>
            <Input
              type="text"
              placeholder="Nome"
              onchange={setName}
              value={name}
            />
            <Input
              type="text"
              placeholder="Tipo"
              onchange={setType}
              value={type}
            />
            <Input
              type="text"
              placeholder="Descrição"
              onchange={setDescription}
              value={description}
            />
            <Button
              title="Salvar"
              width="300"
              onclick={() => {
                saveOrEdit(idToEdit);
              }}
              color={'#000129'}
            ></Button>
            <Button
              color={'#000129'}
              title="Voltar"
              width="300"
              onclick={() => {
                setIsNewDragon(false);
                setIsEditDragon(false);
                resetInput();
              }}
            >
              voltar
            </Button>
          </InputContainer>
        </ContainerInfo>
      </StyledBox>
    </DivCard>
  );
};

export default NewDragon;
