import React from "react";
import { View, Text, ImageBackground, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#c6cbef" }}>
            <DrawerContentScrollView
                {...props} contentContainerStyle={{ backgroundColor: '#A8EDF0' }}>
                <ImageBackground source={require('navigation/src/Image/backgroundtrungthu.jpg')} style={{ padding: 20, alignItems:'center' }}>
                    <Image source={require('navigation/src/Image/logoctu.png')}
                        style={{ height: 100, width: 100}}>
                    </Image>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#c6cbef', paddingTop: 10 }}>
                    <DrawerItemList{...props}>
                    </DrawerItemList>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}
export default CustomDrawer