import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks/Auth/useAuth';

export const LogOutButton = () => {
  const { signOut } = useAuth();

  return (
    <TouchableOpacity style={styles.container} onPress={() => signOut()}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
