import React, { useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import tailwind from 'tailwind-rn';

type Props = {
  visible: boolean;
  text?: string;
};

export const Loading = (props: Props) => {
  const { visible, text = '' } = props;
  return visible ? (
    <SafeAreaView
      style={tailwind('flex-1 items-center justify-center w-full h-full top-0 left-0 absolute bg-white bg-opacity-50')}
    >
      <ActivityIndicator size="large" />
      {!!text && <Text style={tailwind('mt-4 text-xs text-gray-500')}>{text}</Text>}
    </SafeAreaView>
  ) : null;
};
