import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-rn';
import MemoListItem from '../components/memoList/MemoListItem';
import MemoList from '../components/memoList/MemoListItem';
import CircleButton from '../components/UIkit/CircleButton';
import { Loading } from '../components/UIkit/Loading';
import { LogOutButton } from '../components/UIkit/LogoutButton';
import { useGetMemos } from '../hooks/memo/useGetMemos';
import { Memo } from '../types/memo';
import { RootStackParamList } from '../types/navigations';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MemoList'>;
};

type Item = {
  item: Memo;
};

export default function MemoListScreen(props: Props) {
  const { navigation } = props;
  const { memos, getErr, isLoading } = useGetMemos();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);
  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100')}>
      <FlatList
        data={memos}
        keyExtractor={(item: Memo) => item.id}
        keyboardShouldPersistTaps="always" //キーボードが出ててもボタン押せる
        renderItem={({ item }: Item) => <MemoListItem memo={item} />}
      />
      <CircleButton name="plus" onPress={() => navigation.navigate('MemoCreate')} />
      {getErr !== '' && <Text style={tw('text-red-500 my-3 font-semibold')}>{getErr}</Text>}
      <Loading visible={isLoading} />
    </SafeAreaView>
  );
}
