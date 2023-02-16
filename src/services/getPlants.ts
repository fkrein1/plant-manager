import { api } from './api';

export interface IPlant {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  rooms: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export async function getPlants(): Promise<IPlant[]> {
  const { data } = await api.get('plants?_sort=name&_order=asc');
  return data;
}
