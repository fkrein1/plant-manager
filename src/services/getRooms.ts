import { api } from './api';

export interface IRooms {
  key: string;
  title: string;
}

export async function getRooms(): Promise<IRooms[]> {
  const { data } = await api.get('plants_rooms?_sort=title&_order=asc');
  return data;
}
