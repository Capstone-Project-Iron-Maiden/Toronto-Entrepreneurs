import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import About from '../components/About';
import SocialMidia from '../components/SocialMidia';

import home from '../dbstore/home.json';
const homescreen = home.homescreen;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.logo}>
          <Image
            //app logo
            source={
              require('../assets/images/logo.png')
            }
            style={styles.welcomeImage}
          >
          </Image>
        </View>

        <View style={styles.getStartedContainer}>
          <EventPitch />
          <Line />
          <EventDate />
          <About/>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <SocialMidia />
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function EventPitch() {

  /*const learnMoreButton = (
    <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
      Learn more
    </Text>
  );*/
  
  const eventpitch = homescreen.eventpitch.map(p => p + '\n');

  return (
    <View >
      <Text style={styles.eventPichTextBold}>
        {eventpitch}
        </Text>
    </View>

  );
}
function Line() {
  return (
    <View style={styles.styleLine} />
  );
}

function EventDate() {

  const eventdate = homescreen.eventdate.map(p => p + '\n');

  return (
    <View>
      <Text style={styles.eventDate}>
        {eventdate}
      </Text>
    </View>
  );
}

/*function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}*/

/*
function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  eventPichTextBold: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
    fontWeight: 'bold'
  },
  styleLine: {
    backgroundColor: '#e60f29',
    height: 0.5,
    width: 235,
    marginTop: -10,
    marginBottom: 6
  },
  eventDate: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
  },
  contentContainer: {
    paddingTop: 30,
  },
  logo: {
    alignItems: 'center',
    marginTop: 10
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 10,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  }
});
