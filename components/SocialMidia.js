import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Linking } from 'react-native';

import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';
import youtube from '../assets/images/youtube.png';

const SocialMidia = props => {
    return (
        <View style={styles.SocialMidiaView}>

            <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com/groups/torontoentrepreneurs/')}>
                <Image
                    source={facebook}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL('https://twitter.com/TOEntrepreneur')}>
                <Image
                    source={twitter}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL('https://www.instagram.com/toronto_entrepreneurs/')}>
                <Image
                    source={instagram}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL('https://www.linkedin.com/groups/3851905/')}>
                <Image
                    source={linkedin}
                />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4fDqoUmmGjM')}>
                <Image
                    source={youtube}
                />
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({
    SocialMidiaView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
      }
});

export default SocialMidia;