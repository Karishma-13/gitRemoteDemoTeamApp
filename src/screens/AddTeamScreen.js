// src/screens/AddTeamScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const AddTeamScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddMember = () => {
    if (name && email) {
      // Store team member information in context or state management
      navigation.navigate('Team List', {memberName: name, memberEmail: email});
    } else {
      alert('Please enter both name and email');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Team Member Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Team Member Email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomButton title="Add Team Member" onPress={handleAddMember} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddTeamScreen;
