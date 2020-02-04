import React from 'react';
import { StyleSheet, View, TouchableHighlight, Linking, Text } from 'react-native';

const TabBarSchedule = props => {
    return (
        <View style={styles.TabBarScheduleView}>
            <View style={styles.TextView}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.eventbrite.ca/e/toronto-entrepreneurs-conference-tradeshow-registration-may-8th-2019-tickets-53551474903')}>
                    <Text style={styles.Text}>REGISTER NOW</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.TextView}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.torontoentrepreneurs.ca/whats-happening-in-the-tradeshow')}>
                    <Text style={styles.Text}>TRADESHOW INF</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    TabBarScheduleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    TextView: {
        backgroundColor: '#285e8d',
        width: 157,
        height: 45,
        borderRadius: 3,
        borderColor: 'white',
        borderWidth: 1

    },
    Text: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 13
    }
});

export default TabBarSchedule;