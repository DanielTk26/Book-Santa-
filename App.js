import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//importing screens from screens folder

import WelcomeScreen from './screens/WelcomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'


export default function App() {
    return(
      <AppContainer/>
    );
}


const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screens: WelcomeScreen},
    Drawer:{screens: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);
