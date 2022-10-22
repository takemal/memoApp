import { Timestamp } from 'firebase/firestore';

export type Memo = {
  id: string;
  text: string;
  updatedAt: string;
};

export const initialMemo = {
  id: '',
  text: '',
  updatedAt: '',
};
