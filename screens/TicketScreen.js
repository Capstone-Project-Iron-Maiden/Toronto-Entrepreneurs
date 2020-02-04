import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Linking
} from 'react-native';

import boy from '../assets/images/tickets/boy29.png';
import girl from '../assets/images/tickets/girl69.png';
import man from '../assets/images/tickets/man129.png';


export default function TicketScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>

                <View style={styles.getStartedContainer}>
                    <Title />
                    <Line />
                    <Tickets />
                </View>

            </ScrollView>
        </View>
    );
}

TicketScreen.navigationOptions = {
    header: null,
};

function Title() {
    return (
        <View >
            <Text style={styles.Title}>TICKET OPTIONS</Text>
        </View>
    );
}
function Line() {
    return (
        <View style={styles.styleLine} />
    );
}

function Tickets() {
    return (
        <View>

            <View style={styles.FotoView}>
                <View style={styles.Foto}>
                    <Image source={boy} />
                </View>
                <View >
                    <Text style={styles.Price}>$29.00</Text>
                    <Text style={styles.Description}>
                        Tradeshow, Networking + Speaker Admission
                    </Text>
                </View>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.eventbrite.ca/e/toronto-entrepreneurs-conference-tradeshow-may-6th-2020-tickets-84615199339')}>
                    <View style={styles.Button}>
                        <Text style={styles.TextButton}>BUY NOW</Text>
                    </View>
                </TouchableHighlight>
            </View>


            <View style={styles.FotoView}>
                <View style={styles.Foto}>
                    <Image source={girl} />
                </View>
                <View >
                    <Text style={styles.Price}>$69.00</Text>
                    <Text style={styles.Description}>
                        Tradeshow, Networking + Speaker Admission + Lunch
                    </Text>
                </View>

                <TouchableHighlight onPress={() => Linking.openURL('https://www.eventbrite.ca/e/toronto-entrepreneurs-conference-tradeshow-may-6th-2020-tickets-84615199339')}>
                    <View style={styles.Button}>
                        <Text style={styles.TextButton}>BUY NOW</Text>
                    </View>
                </TouchableHighlight>

            </View>

            <View style={styles.FotoView}>
                <View style={styles.Foto}>
                    <Image source={man} />
                </View>

                <View >
                    <Text style={styles.Price}>$129.00</Text>
                    <Text style={styles.Description}>
                        Tradeshow, Networking + Speaker Admission + Cocktail Reception + Preferred Seating
                    </Text>
                </View>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.eventbrite.ca/e/toronto-entrepreneurs-conference-tradeshow-may-6th-2020-tickets-84615199339')}>
                    <View style={styles.Button}>
                        <Text style={styles.TextButton}>BUY NOW</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

//style
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
    Price: {
        color: '#414141',
        fontSize: 40,
        lineHeight: 35,
        textAlign: 'center',
        paddingBottom: 5,
        paddingTop: 20
    },
    Description: {
        textAlign: 'center',
        marginBottom: 10
    },
    TextButton: {
        color: 'white',
        padding: 10,
        textAlign: 'center'
    },
    Button: {
        backgroundColor: '#4b4e53',
        borderRadius: 3,
        width: 165,
        height: 40
    },
    styleLine: {
        backgroundColor: '#414141',
        height: 0.5,
        width: 235,
        marginTop: 10
    },
    contentContainer: {
        paddingTop: 30,
        paddingBottom: 30
    },
    Foto: {
        width: '100%',
        height: 201
    },
    FotoView: {
        width: '100%',
        paddingTop: 30,
        alignItems: 'center'
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    }
});
