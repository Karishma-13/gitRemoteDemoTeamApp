import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UploadImage = ({
  imgHeight,
  imgWidth,
  marginRight,
  tintColor,
  onPressBtn,
  imageUri,
  divHeight,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: divHeight || 170,
        borderWidth: 1.6,
        borderStyle: 'dashed',
        borderColor: '#AAAAAA',
        borderRadius: 15,
        margin: 5,
        // borderWidth:1,
        // borderColor:"red"
      }}
      onPress={onPressBtn}>
      {imageUri ? (
        <Image
          source={{uri: imageUri}}
          style={{
            height: imgHeight || '100%',
            width: imgWidth || '100%',
            borderRadius: 15,
          }}
        />
      ) : (
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: imgHeight || 20,
                width: imgWidth || 28,
                marginRight: marginRight || 0,
              }}
              source={require('../assets/images/uploadIcon.png')}
              tintColor={tintColor || '#AAAAAA'}
            />
            <Text
              style={{
                color: '#AAAAAA',
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 10,
              }}>
              Upload Image
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default UploadImage;
