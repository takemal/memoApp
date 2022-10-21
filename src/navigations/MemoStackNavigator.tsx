import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import MemoCreateScreen from '../screens/MemoCreateScreen';
import MemoDetailScreen from '../screens/MemoDetailScreen';
import MemoEditScreen from '../screens/MemoEditScreen';
import MemoListScreen from '../screens/MemoListScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { RootStackParamList } from '../types/navigations';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MemoStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MemoList"
      screenOptions={{
        headerStyle: { backgroundColor: '#467DF3' },
        headerTitleStyle: { color: '#ffffff' },
        headerTitle: 'Memo App',
        headerTintColor: '#ffffff',
        headerBackTitle: 'back',
        // ナビゲート時のアニメーション
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name="MemoList" component={MemoListScreen} />
      <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
      <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
      <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
    </Stack.Navigator>
  );
};
