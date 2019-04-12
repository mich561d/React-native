import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Contacts, Constants, Location, Permissions } from 'expo';
import { AdMobBanner } from 'expo';

export default class Locator extends Component {
    render() {
        return (
            <ImageBackground source={require("../assets/background.jpg")} style={styles.container}>
                <Text style={styles.text}>This page contains a ad!</Text>
                <View style={styles.bottom}>
                    <AdMobBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                        testDeviceID="EMULATOR"
                        onDidFailToReceiveAdWithError={this.bannerError} />
                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'red',
        marginHorizontal: 8,
        marginVertical: 10
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})