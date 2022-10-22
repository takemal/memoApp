import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { Alert } from 'react-native';
import { RootStackParamList } from '../../types/navigations';
import { firebaseErr } from '../../utils/firebase';
import { auth } from '../../utils/firebaseConfig';

export const useAuth = () => {
  const [authError, setAuthError] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // アカウント登録。ユーザ情報は保存しない
  const signUp = async (email: string, password: string, confirmPassword: string) => {
    // バリデーション
    if (email === '' || password === '' || confirmPassword === '') {
      setAuthError('必須項目を入力してください');
      return;
    }
    if (password !== confirmPassword) {
      setAuthError('パスワードが一致しません。もう一度お試しください');
      return;
    }
    if (password.length < 6) {
      setAuthError('パスワードは6文字以上で入力してください');
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      // ユーザが存在すれば、FireStoreに保存する
      if (user) {
        Alert.alert('新規登録が完了しました');
      }
    } catch (err: any) {
      firebaseErr(err);
    }
  };

  // サインイン。 DBから情報を取得し、State管理。
  const signIn = async (email: string, password: string) => {
    // バリデーション
    if (email === '' || password === '') {
      setAuthError('必須項目が未入力です');
      return;
    }
    try {
      // メールとPWでサインイン処理をする
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      if (user) {
        Alert.alert('ログインしました');
      }
    } catch (err: any) {
      firebaseErr(err);
    }
  };

  // サインアウト。
  // prettier-ignore
  const signOut = async () => {
    auth.signOut()
      .then(() => {
        Alert.alert('ログアウトしました');
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  };

  return {
    signIn,
    signUp,
    signOut,
    authError,
  };
};
