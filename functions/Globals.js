class Globals {
    _loggedIn = false;
    _token = '';

    get_Data() {
        return {
            loggedIn: this._loggedIn, 
            token: this._token
        }
    }

    setLogin(newLoggedIn) {
        if (typeof newLoggedIn === 'boolean') {
            this._loggedIn = newLoggedIn;
        }
    }

    setToken(newToken) {
        this._token = newToken;
    }
}

export default new Globals();