import React, { useEffect, useState, useContext } from 'react';
import Connect from '../functions/Connect';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import { LoginContext } from '../context/LoginContextProvider';

const Overview = ({navigation}) => {
    const { token } = useContext(LoginContext);
    
    const [data, setData] = useState({});
    const [renderedData, setRenderedData] = useState(null);

    useEffect( () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            const response = await Connect.post('/overview', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                setData(response.data);
            } else {
                HandleApiError(response);
            }
        }

        request();
    }, []);

    const renderItem = ({item}) => {
        return (
            item
        )
    }
    const goToView = (id) => {
        console.log(id);
        navigation.navigate('Songtekst pagina', {id:id})
    }

    useEffect( () => {
        console.log(data);

        if (data.songInfo !== undefined) {
            let newData = [];
            for(let i=0; i<data.songInfo.length; i++) {
                const {id, number, title} = data.songInfo[i];

                newData[i] = <View key={id} style={styles.row}>
                    <Text style={styles.rowNumber}>{number}</Text>
                    <Text style={styles.rowTitle}>{title}</Text>
                    <Button style={styles.rowButtn} onPress={() => {goToView(id)}} title={'Bekijk liedtekst'}/>
                </View>;
            }

            setRenderedData(
                <View style={{ flex: 1}}>
                    <FlatList data={newData} renderItem={renderItem} />
                </View>
            );
        }
            
    }, [data]);
    
    return (
        <View style={styles.center}>
            <Text>Overview</Text>
            {renderedData}
        </View>
    );
}

export default Overview;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
    },

    row: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 10,
        alignItems: 'center',

        borderWidth: 1,
        borderColor: 'grey',
    },

    rowNumber: {
        width: 40,
        padding: 5,
    },

    rowTitle: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },

    rowButton: {
        width: 75,
    },

    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingLeft: 75,
        paddingRight: 75,
    },

  });