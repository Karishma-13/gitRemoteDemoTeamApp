import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DummyHomeScreen = ({route}) => {
  // Destructure parameters from route.params with default values
  const {name, email, imageUri} = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 17,
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 13,
            borderRadius: 100,
          }}>
          <Image
            // source={require(imageUri)}
            style={{width: 50, height: 50, borderRadius: 100}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            borderLeftWidth: 1,
            paddingLeft: 8,
            borderColor: '#666',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{email}</Text>
        </View>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity
        // onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => navigation.navigate('About Us')}
        >
          <Text style={styles.navItem}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => navigation.navigate('Gallery')}
        >
          <Text style={styles.navItem}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => navigation.navigate('Contacts')}
        >
          <Text style={styles.navItem}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={{paddingHorizontal: 17}}>
        {/* ---------Banner Div--------- */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 13,
            borderRadius: 10,
          }}>
          <Image
            source={require('../assets/images/banner.jpg')}
            style={styles.banner}
          />
        </View>

        {/* ---------Services Card Div--------- */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Service 1</Text>
            <Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              velit.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Service 2</Text>
            <Text style={styles.cardContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              velit.
            </Text>
          </View>
        </View>

        {/* ---------Achievements Div--------- */}
        <View
          style={{
            width: '100%',
            padding: 16,
            marginVertical: 25,
            borderRadius: 8,
            backgroundColor: '#f8f8f8',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '500', textAlign: 'left'}}>
              Achievements
            </Text>

            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/images/achievements.png')}
                style={{
                  width: 340,
                  height: 130,
                  borderRadius: 8,
                  marginBottom: 8,
                  marginTop: 15,
                  marginBottom: 17,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#666',
                textAlign: 'center',
              }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              velit, molestiae ab fuga commodi quasi perferendis! Repudiandae
              enim ipsum, quisquam quo qui doloremque rerum nobis quaerat
              consequatur quia commodi vitae.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // it's important to cover the entire app's length
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 16,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  banner: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  card: {
    width: '48%',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    // borderWidth:1,
  },
});

export default DummyHomeScreen;
