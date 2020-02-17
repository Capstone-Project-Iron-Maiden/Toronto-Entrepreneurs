import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import home from '../dbstore/home.json';
const about = home.about;

const About = props => {
    
    const paragraph = about.aboutEvent.map(p => p + '\n' + '\n');
    
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