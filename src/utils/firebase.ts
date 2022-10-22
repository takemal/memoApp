import { format } from 'date-fns';
import { Timestamp } from 'firebase/firestore';
import { Alert } from 'react-native';

// TimeStamp型をStringに変換
export const dateToString = (date: Timestamp) => {
  return format(date.toDate(), 'yyyy年M月d日 HH時mm分');
};

export const firebaseErr = (err: any) => {
  const errMsg = { title: '通信エラー', description: 'エラーが生じました。' };
  switch (err.code) {
    // signInWithEmailAndPassword
    case 'auth/invalid-email':
      errMsg.description = '不正な形式のメールアドレスです。';
      break;
    case 'auth/user-disabled':
      errMsg.description = 'アカウントが無効です。';
      break;
    case 'auth/user-not-found':
      errMsg.description = 'ユーザが見つかりませんでした。';
      break;
    case 'auth/wrong-password':
      errMsg.description = 'パスワードが間違っています。';
      break;

    // createUserWithEmailAndPassword
    case 'auth/email-already-in-use':
      errMsg.description = '既に登録されているメールアドレスです。';
      break;
    case 'auth/invalid-email':
      errMsg.description = '不正な形式のメールアドレスです。';
      break;
    case 'auth/operation-not-allowed':
      errMsg.description = '開発者にお問合せください。';
      break;
    case 'auth/weak-password':
      errMsg.description = 'パスワードは6文字以上で入力してください。';
      break;

    // fireStore
    case 'cancelled':
      errMsg.description = '操作がキャンセルされました。';
      break;
    case 'unknown':
      errMsg.description = '不明なエラーが生じました。';
      break;
    case 'not-found':
      errMsg.description = 'データが存在しません。';
      break;
    case 'already-exists':
      errMsg.description = '既に存在するデータです。';
      break;

    default:
  }
  Alert.alert(errMsg.title, errMsg.description);
};
