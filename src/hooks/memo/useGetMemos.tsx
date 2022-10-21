import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { auth, db } from '../../utils/firebaseConfig';
import { Memo } from '../../types/memo';
import { format } from 'date-fns';

export const useGetMemos = () => {
  const [memos, setMemos] = useState<Memo[]>();
  const [getErr, setGetErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMemos = () => {
      setGetErr('');
      setIsLoading(true);
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
            updatedAt:format(doc.data({ serverTimestamps: 'estimate' }).updatedAt.toDate(), 'yyyy-MM-dd HH:mm')
          } as Memo)
        ))},
        (err: any) => {
          setGetErr(err.message);
        })
      }
      setIsLoading(false);
    };
    return () => {
      getMemos();
    };
  }, []);

  return {
    memos,
    getErr,
    isLoading,
  };
};
