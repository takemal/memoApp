import React, { useState } from 'react';
// import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { RootStackParamList } from '../types/navigations';
import { StackNavigationProp } from '@react-navigation/stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useCreateMemo } from '../hooks/memo/useCreateMemo';
import CircleButton from '../components/UIkit/CircleButton';
import tw from 'tailwind-rn';

export default function MemoCreateScreen() {
  const [bodyText, setBodyText] = useState('');
  const { createMemo } = useCreateMemo();

  return (
    <SafeAreaView style={tw('flex-1')}>
      <ScrollView>
        <View style={tw('flex-1 px-7 py-8')}>
          <TextInput
            value={bodyText}
            multiline
            style={tw('text-base flex-1')}
            onChangeText={(text) => setBodyText(text)}
            autoFocus
          />
        </View>
      </ScrollView>
      <CircleButton
        name="check"
        onPress={() => {
          createMemo(bodyText);
        }}
      />
    </SafeAreaView>
  );
}
