import React from 'react';
import { AppRegistry } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import Schedule from './app/screens/Schedule';
import SideBar from './app/components/Sidebar/sidebar';
import { DrawerNavigator } from 'react-navigation';
// import TodosReducer from './app/redux/reducers/TodosReducer';
//
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// let store = createStore(TodosReducer);

// import reducers from './reducers';
// import configureStore from './app/store/configureStore';

// const store = configureStore();

const MainRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Schedule: { screen: Schedule }
  },
  {
    contentComponent: SideBar
  }
);

AppRegistry.registerComponent('Aion', () => MainRouter);
