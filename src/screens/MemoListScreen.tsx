import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-rn';
import MemoListItem from '../components/memoList/MemoListItem';
import Button from '../components/UIkit/Button';
import CircleButton from '../components/UIkit/CircleButton';
import { Loading } from '../components/UIkit/Loading';
import { LogOutButton } from '../components/UIkit/LogOutButton';
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
  const { memos, isLoading } = useGetMemos();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  if (memos.length === 0) {
    return (
      <SafeAreaView style={tw('flex-1 justify-center items-center')}>
        <Text style={tw('text-xl mb-6')}>最初のメモを作成しよう</Text>
        <Button label="作成する" style={tw('self-center')} onPress={() => navigation.navigate('MemoCreate')} />
        <Loading visible={isLoading} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100')}>
      <FlatList
        data={memos}
        keyExtractor={(item: Memo) => item.id}
        keyboardShouldPersistTaps="always" //キーボードが出ててもボタン押せる
        renderItem={({ item }: Item) => <MemoListItem memo={item} />}
      />
      <CircleButton name="plus" onPress={() => navigation.navigate('MemoCreate')} />
      <Loading visible={isLoading} />
    </SafeAreaView>
  );
}
