import React, { useEffect, useState, useContext } from 'react';
import Connect from '../functions/Connect';
import { StyleSheet, Text, View } from 'react-native';

import { LoginContext } from '../context/LoginContextProvider';

const Songtext = ({navigation, route}) => {
    const { loggedIn, token } = useContext(LoginContext);

    const [songNumber, setSongNumber] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [songText, setSongText] = useState('');
    
    useEffect( () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            const response = await Connect.post(`/overview/${route.params.id}`, requestData);

            if (response.status === 200 && response.data.status === 'success' && response.data.songInfo !== undefined) {
                const info = response.data.songInfo;
                setSongNumber(info.number);
                setSongTitle(info.title);
                setSongText(info.songText);
            }
        }

        if ( loggedIn && route.params.id !== undefined ) {
            request();
        } else {
            console.error('loggedin =', loggedIn, 'route.patams.id=', route.params.id, 'loggedIn should be true', 'route.params.id should be a integer')
        }
    }, []);


    return (
        <View>
            <View style={styles.blueBar}>
                <Text style={styles.blueBarText}>Number: {songNumber}</Text>
            </View>
            <View style={styles.titleBar}>
                <Text style={styles.titleBarText}>{songTitle}</Text>
            </View>
            <Text style={styles.songtextView}>{songText}</Text>
        </View>        
    );
}


const styles = StyleSheet.create({
    blueBar: {
        backgroundColor: 'blue',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },

    blueBarText: {
        color: 'white',
    },

    titleBar: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingTop: 20,
        paddingBottom: 20,
    },

    titleBarText: {
        fontSize: 22,
        textAlign: 'center',
    },

    songtextView: {
        padding: 20,
    }

});

export default Songtext;