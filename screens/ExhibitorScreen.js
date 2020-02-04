import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Linking
} from 'react-native';

import SunLife from '../assets/images/sponsors/SunLife.png';
import Distinctm from '../assets/images/sponsors/Distinctm.png';
import Cyber from '../assets/images/sponsors/Cyber.png';
import TabBarExhibitor from '../components/TabBarExhibitor';


export default function ExhibitorScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>

                <View style={styles.getStartedContainer}>
                    <Title />
                    <Line />
                    <Event />
                    <Sponsors />
                </View>

            </ScrollView>

            <View style={styles.tabBarInfoContainer}>
                <TabBarExhibitor />
            </View>
        </View>
    );
}

ExhibitorScreen.navigationOptions = {
    header: null,
};

function Title() {
    return (
        <View >
            <Text style={styles.Title}>SPONSORS & EXHIBITORS</Text>
        </View>
    );
}
function Line() {
    return (
        <View style={styles.styleLine} />
    );
}
function Event() {
    return (
        <View>
            <Text style={styles.Venue}>Partial List of 2020 Exhibitors</Text>
        </View>
    );
}
function Sponsors() {
    return (
        <View>
            <View style={styles.LogoView}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.sunlife.ca/')}>
                    <Image source={SunLife} />
                </TouchableHighlight>
                <View style={styles.styleLine2}></View>
                <View >
                    <Text style={styles.SponsorTitle}>PLATINUM SPONSOR</Text>
                </View>
            </View>

            <View style={styles.LogoView}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.districtm.net/')}>
                    <Image source={Distinctm} />
                </TouchableHighlight>
                <View style={styles.styleLine2}></View>
                <View >
                    <Text style={styles.SponsorTitle}>GOLD SPONSOR</Text>
                </View>
            </View>

            <View style={styles.LogoView}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.districtm.net/')}>
                    <Image source={Cyber} />
                </TouchableHighlight>
                <View style={styles.styleLine2}></View>
                <View >
                    <Text style={styles.SponsorTitle}>GOLD SPONSOR</Text>
                </View>
            </View>

        </View>
    );
}

//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Title: {
        color: '#414141',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginTop: 30,
        paddingBottom: 5
    },
    SponsorTitle: {
        color: '#779eb9',
        fontSize: 14,
        lineHeight: 35,
        textAlign: 'center',
        paddingBottom: 5
    },
    Venue: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#414141',
        fontSize: 16,
        padding: 10
    },
    styleLine: {
        backgroundColor: '#414141',
        height: 0.5,
        width: 235,
        marginTop: 10
    },
    styleLine2: {
        backgroundColor: '#779eb9',
        height: 0.5,
        width: 100,
        marginTop: 10

    },
    contentContainer: {
        paddingTop: 30,
        paddingBottom: 100
    },
    sponsors: {
        backgroundColor: '#e0e0e0',
        width: 265,
        height: 100,
        marginBottom: 100
    },
    LogoView: {
        width: '100%',
        paddingTop: 10,
        alignItems: 'center'
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
    }
});
