import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
    );
}

export default Home;