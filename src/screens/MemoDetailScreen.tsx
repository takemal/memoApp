import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import CircleButton from '../components/UIkit/CircleButton';
import { Loading } from '../components/UIkit/Loading';
import { useGetMemo } from '../hooks/memo/useGetMemo';
import { RootStackParamList } from '../types/navigations';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MemoDetail'>;
  route: RouteProp<RootStackParamList, 'MemoDetail'>;
};

export default function MemoDetailScreen(props: Props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const { memo, isLoading } = useGetMemo(id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>{memo && memo.text}</Text>
        <Text style={styles.memoDate}>{memo && memo.updatedAt}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>{memo && memo.text}</Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => {
          navigation.navigate('MemoEdit', { memo: memo! });
        }}
      />
      <Loading visible={isLoading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
