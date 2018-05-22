import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    Button
} from 'react-native';
import {Actions} from "react-native-router-flux";

import bgSrc from '../../images/wallpaper.png';

const Home = () => {
    return (
      <ImageBackground style={styles.container} source={bgSrc}>
        <View style={styles.center}>
          <Text style={styles.title}>Adam Smith</Text>
          <View style={styles.hairline} />
          <Text style={styles.maintext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since</Text>
        </View>
        <View style={styles.bgbutton}>
          <Button onPress={() => Actions.login()} title="Login" color="#99e265" />
        </View>        
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaefee',
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  center: {
    width: 200,
    height: 200,
    padding: 20,
    borderRadius:100,
    borderWidth: 5,
    borderColor: '#99e265',
    textAlign: 'center',
    backgroundColor: '#f3fffc'
  },
  title: {
    textAlign: 'center'
  },
  maintext: {
    textAlign: 'center',
    paddingTop: 10
  },
  hairline: {
    alignSelf: 'center',
    backgroundColor: '#000',
    height: 1,
    width: 30
  },
  bgbutton: {
    marginTop: 15
  }
});

export default Home;