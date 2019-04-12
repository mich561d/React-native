import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

export class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', top: 50 }}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}

export default class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
        let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
        return (
            <Image source={pic} style={{ width: 193, height: 110 }} />
        );
    }
}