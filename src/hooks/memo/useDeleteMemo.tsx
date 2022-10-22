import { deleteDoc, doc } from 'firebase/firestore';
import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { firebaseErr } from '../../utils/firebase';
import { auth, db } from '../../utils/firebaseConfig';

export const useDeleteMemo = () => {
  //prettier-ignore
  const deleteMemo = useCallback( async (id: string) => {
    try {
      const { currentUser } = auth;
      if(currentUser){
        Alert.alert('メモを削除しますか','よろしいですか？',[
          {
          text: 'キャンセル',
          onPress: ()=>{}
          },
          {
            text: '削除する',
            style: 'destructive', //赤文字
            onPress: ()=>{
              deleteDoc(doc(db, 'users', currentUser.uid, 'memos', id))
                .catch(()=>{Alert.alert('削除に失敗しました')})
            }
          },
      ])   

      }
    } catch (err: any) {
      firebaseErr(err)
    }
  },[]);

  return {
    deleteMemo,
  };
};
