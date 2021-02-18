import React, { useState, useContext } from 'react';
import Connect from '../functions/Connect';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { LoginContext } from '../context/LoginContextProvider';

const Login = () => {
    const { login } = useContext(LoginContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async () => {
        setMessage('');

        let requestData = new URLSearchParams();
        requestData.append('username', username);
        requestData.append('password', password);     

        Connect.post('/login', requestData).then(
            response => {
                console.log(response);
                console.log(response.data)

                if (response.status === 200 && response.data.status === 'success') {
                    if (response.data.token !== undefined) {
                        login(response.data.token);
                    }
        
                } else if (response.data !== undefined && response.data.auth === 'failed') {
                    setMessage('Gebruikersnaam of wachtwoord incorrect');
                }
            }
        ).catch(
            error => console.log(error)
        ); 
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
        paddingLeft: 75,
        paddingRight: 75,
    },

    inputText: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
    },
});

export default Login;