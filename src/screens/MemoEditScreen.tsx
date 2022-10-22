import React, { useState } from 'react';
import { Keyboard, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import CircleButton from '../components/UIkit/CircleButton';
import { RootStackParamList } from '../types/navigations';
import { StackNavigationProp } from '@react-navigation/stack';
import tw from 'tailwind-rn';
import { RouteProp } from '@react-navigation/native';
import { useUpdateMemo } from '../hooks/memo/useUpdateMemo';
import tailwind from 'tailwind-rn';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MemoEdit'>;
  route: RouteProp<RootStackParamList, 'MemoEdit'>;
};

export default function MemoEditScreen(props: Props) {
  const { navigation, route } = props;
  const { memo } = route.params;
  const [text, setText] = useState(memo.text);
  const { updateMemo } = useUpdateMemo();
  console.log(memo);
  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100')}>
      <ScrollView>
        <View style={tw('flex-1 px-7 py-8')}>
          <TextInput
            value={text}
            multiline
            style={tw('text-base flex-1')}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(text) => setText(text)}
          />
        </View>
      </ScrollView>
      <CircleButton name="check" onPress={() => updateMemo(memo.id, text)} />
    </SafeAreaView>
  );
}
