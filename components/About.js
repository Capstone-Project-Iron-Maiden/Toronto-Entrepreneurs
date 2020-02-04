import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const About = props => {
    return (
        <View style={styles.aboutContainer}>
            <View style={styles.aboutItem}>
                <Text style={styles.aboutText}>
                    In its 10th year, #TECONF has been the prominent event in the Greater Toronto Area
                    for empowering and connecting local Entrepreneurs.
                </Text>
                <Text style={styles.aboutText}>
                    We take pride in the community
                    of Entrepreneurs we have built over the years and look forward to continuing to assist
                    organizations in building their businesses through connections made through our events.
                </Text>
                <Text style={styles.aboutText}>
                    Soliciting other attendees/exhibitors (“Suitcasing”) will not be permitted at the event.
                 </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default About;