import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

// importing screens from screen's folder

import BookDonateScreen from '../screens/BookDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateLit:{
      screen: BookDonateScreen,
      navigationOptions:{
          headerShown:false
      }
  },
  
  RecieverDetails : {
      screen : RecieverDetailsScreen,
      navigationOptions:{
          headerShown:false
      }
  },

},

  {
      initialRouteName:'BookDonateList'
  }
  
);