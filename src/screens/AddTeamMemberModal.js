import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';

const AddTeamMemberModal = ({
  modalVisible,
  setModalVisible,
  teamMembers,
  setTeamMembers,
  newMemberName,
  setNewMemberName,
  newMemberEmail,
  setNewMemberEmail,
}) => {
  const navigation = useNavigation();

  const handleSaveMember = () => {
    if (!newMemberName || !newMemberEmail) {
      Alert.alert('Error', 'Please fill all required fields (Name & Email)');
      return;
    }

    const updatedTeamMembers = [
      ...teamMembers,
      {name: newMemberName, email: newMemberEmail},
    ];
    setTeamMembers(updatedTeamMembers);
    setNewMemberName('');
    setNewMemberEmail('');
    setModalVisible(false);
    Alert.alert('Success', 'Team member added successfully');

    // Navigate with updated team members
    navigation.navigate('TeamListScreen', {
      teamMembers: updatedTeamMembers,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Team Member</Text>
            <TextInput
              placeholder="Name"
              value={newMemberName}
              onChangeText={setNewMemberName}
              style={styles.modalInput}
            />
            <TextInput
              placeholder="Email"
              value={newMemberEmail}
              onChangeText={setNewMemberEmail}
              style={styles.modalInput}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Button title="Save Member" onPress={handleSaveMember} />
              <Button
                title="Cancel"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '93%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default AddTeamMemberModal;
