import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import profileImg from "../../assets/images/profileimg1.jpg"
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <Image
            source={profileImg} // Replace with actual image URL
            style={styles.profileImage}
          />
          <Text style={styles.name}>Ganesha Kencana</Text>
          <Text style={styles.location}>Los Angeles, CA - 1.7km</Text>
        </View>

        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="person-outline" size={24} color="#20B2AA" />
            <Text style={styles.settingText}>My Account</Text>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>

          <View style={styles.settingItem}>
            <Ionicons name="finger-print-outline" size={24} color="#20B2AA" />
            <Text style={styles.settingText}>Face ID / Touch ID</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#20B2AA" }}
              thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              value={true}
            />
          </View>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="log-out-outline" size={24} color="#20B2AA" />
            <Text style={styles.settingText}>Log Out</Text>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>More</Text>

        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="help-circle-outline" size={24} color="#20B2AA" />
            <Text style={styles.settingText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="information-circle-outline" size={24} color="#20B2AA" />
            <Text style={styles.settingText}>About App</Text>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 200,
    backgroundColor: '#ddd',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 20,
  },
  editButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: -50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  settingsSection: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ProfileScreen;