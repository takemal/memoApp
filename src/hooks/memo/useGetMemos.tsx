import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { auth, db } from '../../utils/firebaseConfig';
import { Memo } from '../../types/memo';
import { format } from 'date-fns';
import { dateToString, firebaseErr } from '../../utils/firebase';

export const useGetMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('A地点');
    setIsLoading(true);
    console.log('B地点');
    const getMemos = async () => {
      console.log('aa' + isLoading);
      const { currentUser } = auth;
      if (currentUser) {
        console.log(currentUser.uid);
        const q = query(collection(db, 'users', currentUser.uid, 'memos'), orderBy('updatedAt', 'desc'));
        // prettier-ignore
        onSnapshot(q, (snapshot) => {
          setMemos(snapshot.docs.map((doc)=>
          ({
            id: doc.id,
            text: doc.data().text,
            updatedAt: dateToString(doc.data({ serverTimestamps: 'estimate' }).updatedAt)
          } as Memo)
        ))},
        (err: any) => {
          firebaseErr(err);
        })
      }
      setIsLoading(false);
    };
    getMemos();
    return () => {
      getMemos();
    };
  }, []);

  return {
    memos,
    isLoading,
  };
};
