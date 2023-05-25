import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '326223468541-u4raabjnaa4s7ugtqm0odakpbofotn70.apps.googleusercontent.com',
  });

  const handleSignInWithGoogle = async () => {
    promptAsync();
  };

  const getUserInfo = async () => {
    if (response) {
      if (response.type === 'error') {
        ToastAndroid.show('Houve algum erro', ToastAndroid.SHORT);
      } else if (response.type === 'cancel') {
        ToastAndroid.show('Operação com login cancelada', ToastAndroid.SHORT);
      } else if (response.type === 'success') {
        try {
          const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: {
              Authorization: `Bearer ${response.authentication?.accessToken}`,
            },
          });

          const user = await res.json();
          console.log(user);
        } catch (error) {
          console.log('ERROR');
        }
      }
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login com Google</Text>
      <Button
        title='Entrar'
        disabled={!request}
        onPress={handleSignInWithGoogle}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
});
