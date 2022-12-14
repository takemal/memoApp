import { useState } from 'react';
import { collection, addDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../utils/firebaseConfig';
import { firebaseErr } from '../../utils/firebase';

export const useCreateMemo = () => {
  const navigation = useNavigation();
  const { currentUser } = auth;
  const [createErr, setCreateErr] = useState('');

  const createMemo = async (text: string) => {
    setCreateErr('');
    if (currentUser) {
      if (text !== '') {
        try {
          const memoDocRef = doc(collection(db, 'users', currentUser.uid, 'memos'));
          await setDoc(
            memoDocRef,
            {
              text: text,
              updatedAt: serverTimestamp(),
            },
            { merge: true }
          );
          navigation.goBack();
        } catch (err: any) {
          firebaseErr(err);
        }
      }
    }
  };
  return {
    createMemo,
  };
};
