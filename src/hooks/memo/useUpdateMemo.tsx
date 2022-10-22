import { useState } from 'react';
import { collection, addDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../utils/firebaseConfig';
import { firebaseErr } from '../../utils/firebase';

export const useUpdateMemo = () => {
  const navigation = useNavigation();
  const { currentUser } = auth;

  const updateMemo = async (id: string, text: string) => {
    if (currentUser) {
      if (text !== '') {
        try {
          const memoDocRef = doc(db, 'users', currentUser.uid, 'memos', id);
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
    updateMemo,
  };
};
