import React from 'react';
import { Tabs } from 'expo-router';


// Ensure SVG files are loaded correctly as strings
import marriageIcon from '../../assets/images/homeicon.svg';
import matchesIcon from '../../assets/images/matchesicon.svg';
import messageIcon from '../../assets/images/messageicon.svg';
import profileIcon from '../../assets/images/profileicon.svg';


import notificationicon from "../../assets/images/notificationicon.png"
import filtericon  from "../../assets/images/filtericon.png"


const _layout = () => {
  return (
    <Tabs>
     <Tabs.Screen name='home'/>
     <Tabs.Screen name='matches'/>
     <Tabs.Screen name='messages'/>
     <Tabs.Screen name='profile'/>
    </Tabs>
  );
};

export default _layout;
