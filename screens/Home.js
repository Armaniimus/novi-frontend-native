import React, {useContext} from 'react';

import Login from '../Components/Login';
import Overview from '../Components/Overview';

import { LoginContext } from '../context/LoginContextProvider';

const Home = ({navigation}) => {
    const { loggedIn } = useContext(LoginContext);

    return (
        loggedIn ? <Overview navigation={navigation} /> : <Login />
    );
}

export default Home;