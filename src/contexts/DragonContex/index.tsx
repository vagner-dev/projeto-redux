import React, { createContext, ReactNode, useState } from 'react';
import { DragonProps } from '../../types/dragon';
import {
  postDragons,
  deleteDragons,
  getDragonsByID,
  putDragons,
  GetDragons,
} from '../../services/dragons';
import { getRequest } from '../../store/LoginControl/actions';
import { useDispatch, useSelector } from 'react-redux';

type responseData = {
  createdAt: Date;
  name: string;
  type: string;
  histories: string;
  id: string;
};
type UserContextProps = {
  children: ReactNode;
};
type UserContextType = {
  resData: responseData[];
  setResData: (newState: responseData[]) => void;
  isNewDragon: boolean;
  setIsNewDragon: (newState: boolean) => void;
  isEditDragon: boolean;
  setIsEditDragon: (newState: boolean) => void;
  isInfoDragon: boolean;
  setIsInfoDragon: (newState: boolean) => void;
  isModal: boolean;
  setIsModal: (newState: boolean) => void;
  name: string;
  setName: (newState: string) => void;
  type: string;
  setType: (newState: string) => void;
  description: string;
  setDescription: (newState: string) => void;
  dateCreation: string;
  setDateCreation: (newState: string) => void;
  saveDragon: () => void;
  LoadingApi: () => void;
  resetInput: () => void;
  deleteDragon: (id: number) => void;
  getDragon: (id: number) => void;
  editDragon: (id: string) => void;
  idToEdit: string;
};

const initialValue = {
  resData: [],
  setResData: () => {},
  isNewDragon: false,
  setIsNewDragon: () => {},
  isEditDragon: false,
  setIsEditDragon: () => {},
  isInfoDragon: false,
  setIsInfoDragon: () => {},
  isModal: false,
  setIsModal: () => {},
  name: '',
  setName: () => {},
  type: '',
  setType: () => {},
  description: '',
  setDescription: () => {},
  dateCreation: '',
  setDateCreation: () => {},
  saveDragon: () => {},
  deleteDragon: () => {},
  getDragon: () => {},
  editDragon: () => {},
  LoadingApi: () => {},
  resetInput: () => {},
  idToEdit: '',
};
export const DragonContext = createContext<UserContextType>(initialValue);

const DragonContexProvaider = ({ children }: UserContextProps) => {
  const [resData, setResData] = useState<responseData[]>([]);
  const [isNewDragon, setIsNewDragon] = useState(false);
  const [isInfoDragon, setIsInfoDragon] = useState(false);
  const [isEditDragon, setIsEditDragon] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [idToEdit, setIdToEdit] = useState('');
  const [dateCreation, setDateCreation] = useState('');

  const dispath = useDispatch();
  const data = useSelector((state: any) => state.app.data);

  const saveDragon = async () => {
    const dragon: DragonProps = {
      name: name,
      type: type,
      histories: description,
    };
    const response = await postDragons(dragon);
    console.log(response);
    LoadingApi();
    resetInput();
  };
  const deleteDragon = async (id: number) => {
    const response = await deleteDragons(id);
    LoadingApi();
    console.log('deletado com sucesso', response);
  };
  const getDragon = async (id: number) => {
    setIdToEdit(id.toString());
    const res = await getDragonsByID(id);
    setName(res.data.name);
    setType(res.data.type);
    setDescription(res.data.histories);
    setDateCreation(DateFormatter(res.data.createdAt));
    console.log('editDragon', isEditDragon);
  };
  const editDragon = async (id: string) => {
    const dragon: DragonProps = {
      name: name,
      type: type,
      histories: description,
    };
    console.log('funciona', idToEdit);
    const response = await putDragons(id, dragon);
    LoadingApi();
    resetInput();
  };
  const LoadingApi = async () => {
    dispath(getRequest());
    const response = await GetDragons();
    if (response.data.lenght < 1) {
      console.log('Sem registros');
    }
    console.log('dentro do contexto', data);
    setResData(response.data);
  };
  const resetInput = () => {
    setName('');
    setType('');
    setDescription('');
  };
  const DateFormatter = (date: string) => {
    const oldData = new Date(date);
    return new Intl.DateTimeFormat().format(oldData);
  };
  return (
    <DragonContext.Provider
      value={{
        setResData,
        resData,
        isNewDragon,
        setIsNewDragon,
        isEditDragon,
        setIsEditDragon,
        isInfoDragon,
        setIsInfoDragon,
        isModal,
        setIsModal,
        name,
        setName,
        type,
        setType,
        description,
        setDescription,
        saveDragon,
        deleteDragon,
        getDragon,
        editDragon,
        idToEdit,
        LoadingApi,
        resetInput,
        dateCreation,
        setDateCreation,
      }}
    >
      {children}
    </DragonContext.Provider>
  );
};

export default DragonContexProvaider;
