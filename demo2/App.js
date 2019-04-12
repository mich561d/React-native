import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Basics from './Components/Basics';
import Props, { LotsOfGreetings } from './Components/Props';
import WhatToDo from './Components/WhatToDo';
import State from './Components/State';
import Style from './Components/Style';
import HeightWidth from './Components/HeightWidth';
import FlexBox from './Components/FlexBox';
import TextInput from './Components/TextInput';
import Touches from './Components/Touches';
import ScrollViewApp from './Components/ScrollViewApp';
import ListViews from './Components/ListViews';
import NetWorking from './Components/NetWorking';
import Locator from './Components/Locator';
import AdsDemo from './Components/AdsDemo';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by XXXX</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('props2')} title="Props2" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('heightWidth')} title="HeightWidth" />
        <Touchable onPress={() => navigate('flexBox')} title="FlexBox" />
        <Touchable onPress={() => navigate('textInput')} title="TextInput" />
        <Touchable onPress={() => navigate('touches')} title="Touches" />
        <Touchable onPress={() => navigate('scrollViewApp')} title="ScrollViewApp" />
        <Touchable onPress={() => navigate('listViews')} title="ListViews" />
        <Touchable onPress={() => navigate('netWorking')} title="NetWorking" />
        <Touchable onPress={() => navigate('locator')} title="Locator" />
        <Touchable onPress={() => navigate('ads')} title="AdsDemo" />
      </ScrollView>
    )
  }
}

//export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
  Home: { screen: HomeScreen },
  web: { screen: WhatToDo },
  basics: { screen: Basics },
  props: { screen: Props },
  props2: { screen: LotsOfGreetings },
  state: { screen: State },
  style: { screen: Style },
  heightWidth: { screen: HeightWidth },
  flexBox: { screen: FlexBox },
  textInput: { screen: TextInput },
  touches: { screen: Touches },
  scrollViewApp: { screen: ScrollViewApp },
  listViews: { screen: ListViews },
  netWorking: { screen: NetWorking },
  locator: { screen: Locator },
  ads: { screen: AdsDemo },
});

const App = createAppContainer(RouteStack);
export default App;

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})