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
            <Image style={styles.welcomeImage} source={{ uri: `${homescreen.general.logo}` }} />
        </View>

        <View style={styles.getStartedContainer}>
          <Description />
          <Line />
          <Date />
          <Location />
          <Time />
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

function About(){
    
  const paragraph = homescreen.about.aboutEvent.map(p => p + '\n' + '\n');
  
  return (
      <View style={styles.aboutContainer}>
          <View style={styles.aboutItem}>
              <Text style={styles.aboutText}>
                  {paragraph}
               </Text>
          </View>
      </View>
  );
};

function Description() {
  return (
    <View >
      <Text style={styles.descriptionTextBold}>
        {homescreen.general.description}
        </Text>
    </View>
  );
}
function Line() {
  return (
    <View style={styles.styleLine} />
  );
}

function Date() {

  return (
    <View>
      <Text style={styles.eventDate}>
        {homescreen.general.date}
      </Text>
    </View>
  );
}
function Location() {
  return (
    <View>
      <Text style={styles.eventLocation}>
        {homescreen.general.location}
      </Text>
    </View>
  );
}
function Time() {

  return (
    <View>
      <Text style={styles.eventTime}>
        {homescreen.general.time}
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
  descriptionTextBold: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingBottom: 15
  },
  styleLine: {
    backgroundColor: '#e60f29',
    height: 0.5,
    width: 275,
    marginTop: -10,
    marginBottom: 6
  },
  eventDate: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
  },
  eventLocation: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
  },
  eventTime: {
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
    //alignItems: 'center',
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
  },
  aboutContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 20,
    width: '100%',
    height: '100%',
    paddingBottom: 70
},
aboutItem: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'white'
},
aboutText: {
    fontSize: 14,
    color: '#878786',
    textAlign: 'justify',
    paddingBottom: 5

}
});
