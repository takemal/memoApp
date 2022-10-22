import { Memo } from './memo';

export type RootStackParamList = {
  MemoList: undefined;
  MemoDetail: { id: string };
  MemoEdit: { memo: Memo };
  MemoCreate: undefined;
  Login: undefined;
  SignUp: undefined;
};
