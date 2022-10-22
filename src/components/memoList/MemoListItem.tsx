import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigations';
import { Memo } from '../../types/memo';
import { useDeleteMemo } from '../../hooks/memo/useDeleteMemo';

type Props = {
  memo: Memo;
};

export default function MemoListItem(props: Props) {
  const { memo } = props;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { deleteMemo } = useDeleteMemo();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail', { id: memo.id });
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>
            {memo.text}
          </Text>
          <Text style={styles.memoListItemDate}>{memo.updatedAt}</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete} onPress={() => deleteMemo(memo.id)}>
          <Ionicons name="close" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between', // 水平方向
    paddingVertical: 16, // 垂直方向のpadding
    paddingHorizontal: 19, // 水平方向のpadding
    alignItems: 'center', // 垂直方向
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
