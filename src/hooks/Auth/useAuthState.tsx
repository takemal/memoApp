import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../utils/firebaseConfig';

export const useAuthState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(Object);
  useEffect(() => {
    setIsLoading(true);
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        return;
      }
    });
    setIsLoading(false);
    return () => {
      unsub();
    };
  }, []);

  return { user, isLoading };
};
