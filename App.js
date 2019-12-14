import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import { store } from './src/config/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}