import { func, shape, string } from 'prop-types';
import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  style?: {};
  name: any;
  onPress: (event: GestureResponderEvent) => void;
};

export default function CircleButton(props: Props) {
  const { style, name, onPress } = props;

  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    borderRadius: 32,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 120,
    shadowColor: '#000000', // iosのみ対応した影
    shadowOffset: { width: 0, height: 8 }, // 影をずらす
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8, // Androidのみ対応した影
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
