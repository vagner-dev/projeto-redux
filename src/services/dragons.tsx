import api from './api';
import { DragonProps } from '../types/dragon';

export const GetDragons = async (): Promise<any> => {
  try {
    const response: any = await api.get('dragon');
    console.log('aqui', response);
    return response;
  } catch (error) {
    console.log('erro ao carregar api');
  }
};

export const getDragonsByID = async (id: number | undefined | string) => {
  return await api.get(`/dragon/${id}`);
};

export const postDragons = async (dragon: DragonProps) => {
  return await api.post(`/dragon`, dragon);
};

export const putDragons = async (
  id: number | undefined | string,
  dragon: DragonProps,
) => {
  return await api.put(`/dragon/${id}`, dragon);
};

export const deleteDragons = async (id: number | undefined) => {
  return await api.delete(`/dragon/${id}`);
};
