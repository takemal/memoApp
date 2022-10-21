import React from 'react';
import { Keyboard, SafeAreaView, ScrollView, TextInput, View } from 'react-native';
import CircleButton from '../components/UIkit/CircleButton';
import { RootStackParamList } from '../types/navigations';
import { StackNavigationProp } from '@react-navigation/stack';
import tw from 'tailwind-rn';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MemoEdit'>;
};

export default function MemoEditScreen(props: Props) {
  const { navigation } = props;

  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100')}>
      <ScrollView>
        <View style={tw('flex-1 px-7 py-8')}>
          <TextInput value="買い物リスト" multiline style={tw('text-base flex-1')} onSubmitEditing={Keyboard.dismiss} />
        </View>
      </ScrollView>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}
