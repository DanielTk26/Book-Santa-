import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookRequestScreen  from './screens/BookRequestScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import BookDonateScreen from './screens/BookDonateScreen'
import {AppTabNavigator} from '/components/AppTabNavigator'

export default function App() {
    return(
       <AppConatiner/>
    );
}

const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen: WelcomeScreen},
    BookRequestScreen:{screen: BookRequestScreen},
    BookDonateScreen:{screen: BookDonateScreen},
    BottomTab:{screen: AppTabNavigator}
})  

const AppConatiner = createAppContainer(switchNavigator);
