import { StyleSheet, View, FlatList, TextInput, SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import filterGreen from "../../assets/images/filtergreen.png";
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../providers/AuthProvider';
import { Image } from "expo-image";

import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from "../lib/firebaseconfig";
import ChatItem from '../components/ChatItem';

const Message = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, [user]);

  const getUsers = async () => {
    try {
      const q = query(usersRef, where('userId', '!=', user?.uid));
      const querySnapshot = await getDocs(q);

      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data()});
      });

      setUsers(data);
      console.log("got users", data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  return (
    <>
      <Stack.Screen options={{
        // headerLeft: () => <cu/>,
        headerTitleAlign: 'center',
        headerTitle: 'Matches',
        headerRight: () => (
          <Image source={filterGreen} style={{ height: 38, width: 38, objectFit: 'contain' }} />
        )
      }} />

      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Chat"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <Text>hey</Text>
      </SafeAreaView>
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  listContainer: {
    paddingBottom: 20,
  },
});