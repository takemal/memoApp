import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Loading } from '../components/UIkit/Loading';
import { useAuthState } from '../hooks/Auth/useAuthState';
import { RootStackParamList } from '../types/navigations';
import { AuthStackNavigator } from './AuthStackNavigator';
import { MemoStackNavigator } from './MemoStackNavigator';

export const RootNavigator = () => {
  const { user, isLoading } = useAuthState();
  return (
    <NavigationContainer>
      {user.uid ? <MemoStackNavigator /> : <AuthStackNavigator />}
      <Loading visible={isLoading} text="ログイン中..." />
    </NavigationContainer>
  );
};
