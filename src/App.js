import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Store from './redux/store';
import RootApplication from './routers';
import {Header, Footer} from './components';

export default () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Header />
          <RootApplication />
          <Footer />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};
