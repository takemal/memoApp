import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy, doc } from 'firebase/firestore';
import { auth, db } from '../../utils/firebaseConfig';
import { initialMemo, Memo } from '../../types/memo';
import { format } from 'date-fns';
import { dateToString, firebaseErr } from '../../utils/firebase';

export const useGetMemo = (id: string) => {
  const [memo, setMemo] = useState<Memo>(initialMemo);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMemo = () => {
      setIsLoading(true);
      const { currentUser } = auth;
      if (currentUser) {
        // prettier-ignore
        onSnapshot(doc(db, 'users', currentUser.uid, 'memos',id), (doc) => {setMemo
          ({
            id: doc.id,
            text: doc.data()!.text,
            updatedAt: dateToString(doc.data({ serverTimestamps: 'estimate' })!.updatedAt)
          } as Memo)
        ,(err: any) => {
          firebaseErr(err)
        }})
      }
      setIsLoading(false);
    };
    getMemo();
    return getMemo();
  }, []);

  return {
    memo,
    isLoading,
  };
};
