import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const { width, height } = Dimensions.get('window');
const interests=['Nature', 'Travel', 'Writting']
const ProfileDetailScreen = () => {
  const { profile: profileString } = useLocalSearchParams();
  const profile = JSON.parse(profileString);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image source={profile.image} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.iconsContainer}>
            <Image source={profile.rejectIcon} style={styles.icon} />
            <Image source={profile.matchIcon} style={styles.icon} />
            <Image source={profile.staredIcon} style={styles.icon} />
          </View>
          <Text style={styles.nameText}>{profile.name}</Text>
          <Text style={styles.locationText}>{profile.address}</Text>
          <Text style={{fontSize:24, fontWeight:'600'}}>About</Text>
          <Text style={{fontSize:14,color:'#B0B0B0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officia?</Text>
          <Text  style={{fontSize:24, fontWeight:'600'}}>Interest</Text>
          <View style={{marginTop:10, display:'flex', flexDirection:'row', alignItems:'center', }}>
            {interests.map((item, index) => (
              <Text key={index} style={styles.tagText}>{item}</Text>
            ))}
          </View>
          {/* Add more profile details here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.6, // Adjust this value to control image height
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -height * 0.1, // This creates the overlap
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: -50, // This pulls the icons up onto the image
  },
  icon: {
    width: 56,
    height: 56,
    marginHorizontal: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center'
  },
  locationText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign:'center'
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tagText: {
    fontSize: 14,
    borderWidth:1,
    borderColor:'#43CEBA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    // color:'white',
    borderRadius:10,
    fontWeight:'semibold'
  },
});

export default ProfileDetailScreen;