import React from 'react';
import { Text } from 'react-native';
import tailwind from 'tailwind-rn';

type Props = {
  msg: string;
};

export const ErrMsg = (props: Props) => {
  const { msg } = props;
  return msg !== '' ? <Text style={tailwind('text-red-500 my-3 font-semibold')}>{msg}</Text> : null;
};
