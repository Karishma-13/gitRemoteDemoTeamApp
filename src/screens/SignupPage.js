import React, {useContext, useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {AuthContext} from '../navigation/AuthProvider';
import CustomButton from '../components/CustomButton';
import UploadImage from '../components/UploadImage';

const SignupPage = () => {
  const {setIsSignedUp} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const handleSignup = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Please fill all required fields (Name & Email)');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      Alert.alert(
        'Error',
        'Please enter a valid email address for eg- (jhondoe123@gmail.com)',
      );
      return;
    }

    // On successful signup, set the isSignedUp state to true
    setIsSignedUp(true);

    // Navigate to the MainNavigator
    navigation.navigate('MainNavigator', {
      screen: 'BottomTabNavigator',
      params: {
        name,
        email,
        country,
        image,
      },
    });
  };

  const handleImagePicker = () => {
    Alert.alert(
      'Select Image',
      'Choose an option',
      [
        {
          text: 'Camera',
          onPress: () =>
            launchCamera({mediaType: 'photo'}, response => {
              if (response.assets && response.assets.length > 0) {
                setImage(response.assets[0].uri);
              }
            }),
        },
        {
          text: 'Gallery',
          onPress: () =>
            launchImageLibrary({mediaType: 'photo'}, response => {
              if (response.assets && response.assets.length > 0) {
                setImage(response.assets[0].uri);
              }
            }),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  useFocusEffect(
    useCallback(() => {
      // Reset the form fields when the screen comes into focus
      setName('');
      setEmail('');
      setCountry('');
      setImage(null);
    }, []),
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{marginVertical: 10}}>
        <UploadImage onPressBtn={() => handleImagePicker()} imageUri={image} />
      </View>

      <Text>
        Name: <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>
        Email: <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text>Country:</Text>
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
      />

      <CustomButton title="Signup" onPress={handleSignup} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
  imagePicker: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default SignupPage;
