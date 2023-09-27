import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/components/HomeScreen';
import Hoai from './src/components/Hoai';
import Dat from './src/components/Dat';
import Khang from './src/components/Khang';
import Kiet from './src/components/Kiet';
import Thinh from './src/components/Thinh';
import Nam from './src/components/Nam';

import CustomDrawer from './src/components/CustomDrawer';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={prop => <CustomDrawer{...prop} />} initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon: () => (
            <Icon name="home" size={30} color="red" />
          )
        }} />
        <Drawer.Screen name="Tấn Hoài" component={Hoai} options={{
          drawerIcon: () => (
            <Icon name="user" size={30} color="blue" />
          )
        }} />
        <Drawer.Screen name="Tuấn Đạt" component={Dat} options={{
          drawerIcon: () => (
            <Icon name="user" size={30} color="orange" />
          )
        }} />
        <Drawer.Screen name="Hoàng Khang" component={Khang} options={{
          drawerIcon: () => (
            <Icon name="user" size={30} color="gray" />
          )
        }} />
        <Drawer.Screen name="Trí Kiệt" component={Kiet} options={{
          drawerIcon: () => (
            <Icon name="user" size={30} color="green" />
          )
        }} />
        <Drawer.Screen name="Quốc Thịnh" component={Thinh} options={{
          drawerIcon: () => (
            <Icon name="user" size={30} color="yellow" />
          )
        }} />
        <Drawer.Screen name="Trung Nam" component={Nam} options={{
          drawerIcon: () => (
            <Icon name="user" size={30} color="maroon" />
          )
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;