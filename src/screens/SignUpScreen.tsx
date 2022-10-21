import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import Button from '../components/UIkit/Button';
import tw from 'tailwind-rn';
import { useAuth } from '../hooks/Auth/useAuth';

export default function SignUpScreen(props: any) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp, authError } = useAuth();

  return (
    <View style={tw('flex-1 bg-indigo-50')}>
      <View style={tw('py-6 px-7')}>
        <Text style={tw('text-2xl font-bold mb-6')}>SignUp</Text>
        <TextInput
          style={tw('text-base h-12 border-gray-300 border bg-white px-2 pb-1 mb-4')}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none" // 頭文字を小文字にする
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={tw('text-base h-12 border-gray-300 border bg-white px-2 pb-1 mb-4')}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none" // 頭文字を小文字にする
          placeholder="Password"
          secureTextEntry // 伏せ字にする
          textContentType="password"
        />
        <TextInput
          style={tw('text-base h-12 border-gray-300 border bg-white px-2 pb-1 mb-4')}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          autoCapitalize="none" // 頭文字を小文字にする
          placeholder="ConfirmPassword"
          secureTextEntry // 伏せ字にする
          textContentType="password"
        />
        {authError !== '' && <Text style={tw('text-red-500 my-3 font-bold')}>{authError}</Text>}
        <Button label="Submit" onPress={() => signUp(email, password, confirmPassword)} />
        <View style={tw('flex-row items-center')}>
          <Text style={tw('text-sm mr-2')}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }}
          >
            <Text style={tw('text-sm text-blue-500 ')}>Log In.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
