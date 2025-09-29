import axios from 'axios';

class Users {
    static all() {
        return axios.get('/users').then(response => response.data);
    }
}

export default Users;