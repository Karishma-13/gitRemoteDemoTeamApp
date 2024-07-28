import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import AddTeamMemberModal from './AddTeamMemberModal';
import CustomButton from '../components/CustomButton';
import UploadImage from '../components/UploadImage';

const HomeScreen = ({
  name: initialName,
  email: initialEmail,
  country: initialCountry,
  image: initialImage,
}) => {
  const navigation = useNavigation();

  const [name, setName] = useState(initialName || '');
  const [email, setEmail] = useState(initialEmail || '');
  const [country, setCountry] = useState(initialCountry || '');
  const [image, setImage] = useState(initialImage || null);
  const [editableField, setEditableField] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');

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

  const handleSave = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Please fill all required fields (Name & Email)');
      return;
    }

    Alert.alert('Success', 'Profile updated successfully');
  };

  const handleAddTeamMembers = () => {
    setModalVisible(true);
  };

  const handleViewTeamList = () => {
    navigation.navigate('TeamListScreen', {teamMembers});
  };

  const handleLogout = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 23,
      }}>
      <ScrollView
        style={{backgroundColor: 'white'}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingBottom: '25%'}}>
          <View style={{marginVertical: 10}}>
            <UploadImage
              divHeight={100}
              onPressBtn={() => handleImagePicker()}
              imageUri={image}
            />
          </View>

          <Text>
            Name: <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={[
                styles.inputContainer,
                {
                  backgroundColor:
                    editableField === 'name' ? 'white' : '#E9EAEC',
                },
              ]}>
              <TextInput
                value={name}
                onChangeText={setName}
                editable={editableField === 'name'}
                style={{
                  flex: 1,
                  color: editableField === 'name' ? 'black' : 'grey',
                  fontWeight: '500',
                  fontSize: 16,
                }}
              />
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setEditableField('name')}>
                <Image
                  source={require('../assets/images/editIcon.png')}
                  style={styles.editIconImg}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text>
            Email: <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={[
                styles.inputContainer,
                {
                  backgroundColor:
                    editableField === 'email' ? 'white' : '#E9EAEC',
                },
              ]}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                editable={editableField === 'email'}
                style={{
                  flex: 1,
                  color: editableField === 'email' ? 'black' : 'grey',
                  fontWeight: '500',
                  fontSize: 16,
                }}
              />
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setEditableField('email')}>
                <Image
                  source={require('../assets/images/editIcon.png')}
                  style={styles.editIconImg}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text>Country:</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={[
                styles.inputContainer,
                {
                  backgroundColor:
                    editableField === 'country' ? 'white' : '#E9EAEC',
                },
              ]}>
              <TextInput
                value={country}
                onChangeText={setCountry}
                editable={editableField === 'country'}
                style={{
                  flex: 1,
                  color: editableField === 'country' ? 'black' : 'grey',
                  fontWeight: '500',
                  fontSize: 16,
                }}
              />
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setEditableField('country')}>
                <Image
                  source={require('../assets/images/editIcon.png')}
                  style={styles.editIconImg}
                />
              </TouchableOpacity>
            </View>
          </View>

          <CustomButton title="Save" onPress={handleSave} />

          <View
            style={{
              marginTop: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: '45%'}}>
              <CustomButton
                title="Add team"
                onPress={handleAddTeamMembers}
                backgroundColor="blue"
              />
            </View>

            <View style={{width: '45%'}}>
              <CustomButton
                title="See Team List"
                onPress={handleViewTeamList}
                backgroundColor="blue"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <AddTeamMemberModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        newMemberName={newMemberName}
        setNewMemberName={setNewMemberName}
        newMemberEmail={newMemberEmail}
        setNewMemberEmail={setNewMemberEmail}
      />

      <View>
        <CustomButton
          title="Logout"
          onPress={handleLogout}
          backgroundColor="#BA0021"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editButton: {
    borderWidth: 1,
    width: '20%',
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
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
  editIconImg: {
    width: 18,
    height: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 10,
    flex: 1,
  },
  editButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIconImg: {
    width: 18,
    height: 18,
  },
});

export default HomeScreen;
