/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DemoLoop from './src/components/DemoLoop';
import BaiTapStateLoop from './src/components/BaiTapStateLoop';
import DemoProps from './src/components/DemoProps';

const App = () => {
  return (
    <>
      {/* <View style={{flex:1, flexDirection:'column'}}> */}
        {/* <DemoLoop /> */}
      <BaiTapStateLoop />
      {/* <DemoProps name='Tran Van Tai'/> */}
      {/* </View> */}
    </>
  );
};

export default App;
