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
          />
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

  return (
    <View >
      <Text style={styles.eventPichText}>ELEVATING</Text>
      <Text style={styles.eventPichTextBold}>BUSINESS LEADERS</Text>
      <Text style={styles.eventPichText}>IN THE GREATER TORONTO AREA</Text>
    </View>

  );
}
function Line() {
  return (
    <View style={styles.styleLine} />
  );
}

function EventDate() {
  return (
    <View>
      <Text style={styles.eventDateBold} >WED. MAY 6, 2020</Text>
      <Text style={styles.eventDate} >Mississauga Convention Centre</Text>
      <Text style={styles.eventDate} >8:30 am - 6:30 pm</Text>
    </View>
  );
}

/*function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}*/

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  eventPichText: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
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
    marginTop: 10
  },
  eventDate: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
  },
  eventDateBold: {
    marginTop: 10,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 16,
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
  sponsors: {
    backgroundColor: '#e0e0e0',
    width: 265,
    height: 100,
    marginBottom: 100
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
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
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
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  }
});
