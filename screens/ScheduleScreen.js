import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import TabBarSchedule from '../components/TabBarSchedule';

export default function ScheduleScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>

                <View style={styles.getStartedContainer}>
                    <Title />
                    <Line1 />
                    <Event />
                </View>

            </ScrollView>

            <View style={styles.tabBarInfoContainer}>
                <TabBarSchedule />
            </View>
        </View>
    );
}

ScheduleScreen.navigationOptions = {
    header: null,
};

function Title() {
    return (
        <View >
            <Text style={styles.Title1}>EVENT</Text>
            <Text style={styles.Title2}>SCHEDULE</Text>
        </View>
    );
}
function Line1() {
    return (
        <View style={styles.styleLine1} />
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
            <View >
                <View>
                    <Text style={styles.Venue}>8:45am - 9:15am  |  Room 105</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>OPENING ADDRESS AND UPDATES FROM THE MINISTER</Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Hon. Prabmeet Singh Sarkaria
                        Associate Minister of Small Business and Red Tape Reduction
                </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/minister-prabmeet-sarkaria')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>9:20am - 10:00am  |  Room 105</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>
                        HOW TO APPROPRIATELY IDENTIFY, PREVENT & ADDRESS MENTAL HEALTH,
                        HARASSMENT AND DISCRIMINATION ISSUES IN THE WORKPLACE
                    </Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Hendrik Nieuwland Partner Shields O'Donnell MacKillop LLP
                </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/hendrik-nieuwland')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>9:20am - 10:00am  |  Room 107</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>
                        HOW TO GET CLEAR & TANGIBLE RESULTS WITH DIGITAL MARKETING STRATEGIES
                    </Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Alex Saran Director, Affiliate Partner Program district m
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/alex-saran')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue2}>10:00am - 10:30am</Text>
                </View>
                <View style={styles.BoxMidle}>
                    <Text style={styles.TextBox}>TRADESHOW AND NETWORKING</Text>
                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>10:30am - 11:10am  |  Room 105</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>THE ART OF NEGOTIATION</Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Charles Hendriks President The Performance Management Academy Inc.
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/charles-hendriks')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>10:30am - 11:10am  |  Room 107</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>FINTECH AND FUTURE OF PAYMENTS</Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Michelle Beyo Founder FinAvator
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/charles-hendriks')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>11:15am - 12:00pm  |  Room 105</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>
                        'READY, FIRE...AIM.' WHY TECHNOLOGY-BASED CYBERSECURITY SOLUTIONS ARE FAILING SMALL BUSINESSES.
                    </Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Jeff Dawley President & Founder CyberSecurity Compiance Corp.
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/jeff-dawley')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>11:15am - 12:00pm  |  Room 107</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>LEADING INNOVATION</Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Dr. David Weiss President & CEO Weiss International Ltd.
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/dr-david-weiss')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue2}>12:00pm - 1:00pm</Text>
                </View>
                <View style={styles.BoxMidle}>
                    <Text style={styles.TextBox}>TRADESHOW AND NETWORKING</Text>
                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>1:00pm - 2:00pm  |  Room 105</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>
                        GROUP BENEFITS AND CLOUD BASED ADMIN SOLUTIONS - A WINNING COMBINATION FOR
                        SMALL BUSINESSES
                    </Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Marie-Chantal Cote Vice-President, Market Development, Group Benefits Sun Life Financial
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/marie-chantal-cote')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>1:00pm - 2:00pm  |  Room 107</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>
                        GETTING SOMETHING MORE THAN NOTHING FOR YOUR BUSINESS: WHAT'S IT WORTH?
                    </Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Melanie Russell President Kalex Valuations Inc.
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/melanie-russell')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue2}>2:00pm - 2:30pm</Text>
                </View>
                <View style={styles.BoxMidle}>
                    <Text style={styles.TextBox}>TRADESHOW AND NETWORKING</Text>
                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>2:30pm - 3:15pm  |  Room 105</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>KEYNOTE SPEAKER</Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Jim Estill Founder & CEO Danby Appliances & ShipperBee
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/jim-estill')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue2}>3:15pm - 3:45pm</Text>
                </View>
                <View style={styles.BoxMidle}>
                    <Text style={styles.TextBox}>TRADESHOW AND NETWORKING</Text>
                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>3:45pm - 4:15pm  |  Room 105</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>EFFECTIVELY SELECTING SALES PROFESSIONALS</Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Robert A. Dougan MA, Talent Strategist, Self Management Group
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/robert-a-dougan')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>3:45pm - 4:15pm  |  Room 107</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.TextBox}>HOW TO HAVE MAX IMPACT: ARCHITECTING THE MINDSET OF A HIGH-PERFORMER</Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Coach Susan Hobson Founder & Principal Elite High-Performance
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/coach-susan-hobson')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View >
                <View>
                    <Text style={styles.Venue}>4:20pm - 5:30pm</Text>
                </View>
                <View style={styles.BoxLast}>
                    <Text style={styles.TextBox}>
                        NETWORKING SESSION: DEVELOPING STRATEGIC CONNECTIONS AND CONVERSATIONS</Text>
                    <Line />
                    <Text style={styles.TextBox}>
                        Charles McFarland President Business Network International
                    </Text>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/coach-susan-hobson')}>
                        <Text style={styles.Link}>Learn More</Text>
                    </TouchableHighlight>

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
    Title1: {
        color: '#356c8c',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginTop: 30,
        paddingBottom: 5
    },
    Title2: {
        color: '#999997',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',

    },
    Venue: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#779eb9',
        fontSize: 14,
        padding: 10
    },
    Venue2: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#aeaead',
        fontSize: 14,
        padding: 10
    },
    Box: {
        backgroundColor: '#779eb9',
        width: '100%',
        padding: 20,
        borderRadius: 3
    },
    BoxMidle: {
        backgroundColor: '#aeaead',
        width: '100%',
        padding: 10,
        borderRadius: 3
    },
    BoxLast: {
        backgroundColor: '#aeaead',
        width: '100%',
        padding: 10,
        marginBottom: 100,
        borderRadius: 3
    },
    TextBox: {
        color: 'white',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
    Link: {
        fontSize: 14,
        color: 'white',
        textAlign: 'justify',
        paddingBottom: 5,
        textAlign: 'center'
    },
    styleLine1: {
        backgroundColor: '#356c8c',
        height: 0.5,
        width: 235,
        marginTop: 10
    },
    styleLine: {
        backgroundColor: 'white',
        height: 0.5,
        width: 235,
        marginTop: 10
    },
    contentContainer: {
        paddingTop: 30,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
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
