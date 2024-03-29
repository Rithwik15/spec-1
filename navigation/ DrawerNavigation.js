import React from 'react';
import {CreateDrawerNavigator} from '@react-navigation/drawer';
import IonIcons from 'react-native-vector-icons/Ionicons';
import TabNavigator from "./TabNavigator";
import Profile from "./screens/Profile ";
 
 const Drawer = createDrawerNavigator();

 const DrawerNavigator = () => {
   return(
     <DrawerNavigator>
     <Drawer.Screen name="Home" component={TabNavigator} />
     <Drawer.Screen name="Profile" component={Profile}/>
     </DrawerNavigator>
   );
 };

 export default DrawerNavigator;
 
