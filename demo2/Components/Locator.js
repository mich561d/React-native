import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default class Locator extends Component {
    state = {
        location: null,
        errorMessage: null,
        address: null
    };

    componentWillMount() {
        this._getLocationAsync()
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        const loc = {};
        loc.longitude = location.coords.longitude;
        loc.latitude = location.coords.latitude;
        const address = await Location.reverseGeocodeAsync(loc)
        console.log(address);
        this.setState({ location, address });
    };

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.address) {
            text = JSON.stringify(this.state.address);
        }
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
});

