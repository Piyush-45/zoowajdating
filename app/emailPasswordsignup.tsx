import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Image, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import Button from './components/Button';
import { useAuth } from './providers/AuthProvider';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { register, login } = useAuth();

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const handleRegister = async () => {
    setLoading(true);
    

    let response = await register(email, password, userName,image );

    console.log("user data", response);
    setLoading(false);

    if (!response.success) {
      Alert.alert('Signup', response.msg);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    let response = await login(email, password);

    console.log("result", response);
    setLoading(false);

    if (!response.success) {
      Alert.alert('Login', response.msg);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          onChangeText={setUserName}
          value={userName}
          placeholder="Username"
          autoCapitalize={'none'}
          style={styles.input}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          style={styles.input}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
          style={styles.input}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title={image ? "Change Profile Picture" : "Pick a Profile Picture"}
          onPress={pickImage}
        />
      </View>
      {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 10 }} />}
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={handleLogin}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={handleRegister}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  input: {
    borderColor: '#d1d5db',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
});