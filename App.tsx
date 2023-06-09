import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  Image,
} from 'react-native';

export default function App() {
  const [user, setUser] = useState<{
    email: string;
    name: string;
    picture: string;
  } | null>(null);

  if (user) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          Seja Bem Vindo ✌
        </Text>
        <Image
          source={{
            uri: user.picture,
            width: 70,
            height: 70,
          }}
          borderRadius={40}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
          }}
        >
          {user.name}
        </Text>
        <Text
          style={{
            marginBottom: 20,
          }}
        >
          {user.email}
        </Text>
        <Button title='Sair' onPress={() => setUser(null)} />
        <StatusBar style='auto' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login com Google</Text>
      <Button title='Entrar' disabled={false} onPress={() => {}} />
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
