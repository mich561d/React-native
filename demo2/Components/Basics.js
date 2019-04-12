import React from 'react';
import { Text, View } from 'react-native';

export default class Basics extends React.Component {
    static navigationOptions = { title: "Learn the Basics" }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world!</Text>
            </View>
        )
    }
}