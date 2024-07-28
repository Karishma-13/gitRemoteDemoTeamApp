import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const TeamListScreen = ({route}) => {
  const {teamMembers} = route.params || {};

  console.log('teamMembers in TeamListScreen', teamMembers);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '500',
          color: 'black',
          textAlign: 'center',
        }}>
        Team List
      </Text>
      {teamMembers && teamMembers.length > 0 ? (
        <>
          <FlatList
            data={teamMembers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View key={index} style={styles.memberContainer}>
                <Text style={styles.memberText}>
                  Member{'  '}
                  {index + 1}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text style={styles.memberText}>Name : {'  '}</Text>
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    {item.name}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text style={styles.memberText}>E-mail: {'  '}</Text>
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    {' '}
                    {item.email}
                  </Text>
                </View>
              </View>
            )}
          />
        </>
      ) : (
        <>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '500',
              textAlign: 'center',
              marginTop: 100,
            }}>
            No Team Members added
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '500',
              textAlign: 'center',
              marginTop: 15,
            }}>
            Kindly add Memebers !
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  memberContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  memberText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});

export default TeamListScreen;
