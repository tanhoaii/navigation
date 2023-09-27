import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'

function HomeScreen() {
    return (
      <View style={{flex: 1,alignItems: 'center', justifyContent: 'center',backgroundColor: '#A8EDF0',padding:20 }}>
          <Text style={{fontSize: 30, color: 'red'}}>Phát Triển Ứng Dụng Trên Thiết Bị Di Động KC359</Text>
          <Image source={require('navigation/src/Image/logoctu.png')} style= {{ width: 300, height: 300,borderRadius: 30}}/>
      </View>
    );
  }
export default HomeScreen;
