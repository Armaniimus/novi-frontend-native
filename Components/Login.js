import React, {useState} from 'react';

import axios from 'axios';

import Connect from '../functions/Connect';
import Globals from '../functions/Globals';
import {HandleLoginError} from '../functions/HandleError';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async () => {
        setMessage('');
        const requestData = 'username=&password=';
        // let requestData = new URLSearchParams();
        // requestData.append('username', username);
        // requestData.append('password', password);

        

        // const response = await Connect.post('/login', requestData);
        
        // console.log(Date(Date.now()));
        // console.log(response);

        // console.log('hey');

        // const response = await axios.post(
        //     'https://novi-api/armaniimus-webdevelopment.nl/api/login', requestData
        //     // 'https://novi-api/armaniimus-webdevelopment.nl/api/login'
        // );
        // console.log(response)

        // console.log(axios.post(
        //     // 'https://novi-api/armaniimus-webdevelopment.nl/api/login', requestData
        //     // 'https://novi-api/armaniimus-webdevelopment.nl/api/login'
        // ));

        // const res = await axios.get(
        //     'https://api.chucknorris.io/jokes/categories'
        // );
        // console.log(res);


        // let requestData = new URLSearchParams();
        // requestData.append('username', username);
        // requestData.append('password', password);
        // Connect.post('/login', requestData).then(
        // // Connect.post('/login').then(
        // // axios.post('/https://api.chucknorris.io/jokes/categories', requestData).then(
        // // axios.post('/https://api.chucknorris.io/jokes/categories').then(
        // axios.post('https://novi-api.armaniimus-webdevelopment.nl/public/api/login').then(
        axios.post('https://novi-api.armaniimus-webdevelopment.nl/public/api/login', requestData).then(
            res => {
                console.log(res);
                console.log(res.data)
            }   
        ).catch(
            // error => console.log(error)
            error => console.log(error)
        );

        // console.log();

        // const res = await axios.get(
        //     'https://novi-api.armaniimus-webdevelopment.nl/public/login'
        // );
        // console.log(res.data);
        
        // const body = {
        //     'username' : username,
        //     'password' : password
        // }
        // const requestData = Object.keys(body).map(key =>      encodeURIComponent(key) + '=' + encodeURIComponent(body[key])).join('&');
        // console.log(requestData);

        // fetch('https://novi-api/armaniimus-webdevelopment.nl/public/login', {
        //     method: 'POST',
        //     headers: {
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     // body: requestData
        // }).then().catch( error => console.log(error));
   


        // if (response.status === 200 && response.data.status === 'success') {
            // Globals.setToken(response.data.token);
            
            // if (response.data.role === 'user') {
            //     Globals.setLoggedIn(true);
            // } else if (response.data.role === 'admin') {
            //     Globals.setLoggedIn(true);
            // }

            // Globals.reload();
            // const navEvent = new PopStateEvent('popstate');
            // window.history.pushState({}, '', '/overview');
            // window.dispatchEvent(navEvent);
        // } else {
            // if (response.data !== undefined && response.data.auth === 'failed') {
            //     setMessage('Gebruikersnaam of wachtwoord incorrect');
            // }
            // console.log(response.data);

            // HandleLoginError(response);
        // }
    }

    return (
        <View style={styles.loginContainer}>
            <Text>{message}</Text>
            <View>
                <Text>Gebruikersnaam</Text>
                <TextInput style={styles.inputText} onChangeText={setUsername} value={username} />
                <Text>Wachtwoord</Text>
                <TextInput style={styles.inputText} onChangeText={setPassword} value={password} />

                <Button title='inloggen' onPress={onSubmit}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        // paddingTop: 20,
        paddingLeft: 75,
        paddingRight: 75,
    },

    inputText: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
    },

    innerContainer: {
        padding:20,
        flex:1,
    },
  
    todo: {
        flexDirection: 'row',
    },
  
    todoText: {
        marginLeft: 18,
        fontSize: 30,
    },
  });

export default Login;