import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth.js';

class Users extends React.Component {
    state = {
        users: [],
    }

    render() {
        return (
            <>
                <h2>List of Users</h2>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
            </>
        )
    }

    componentDidMount() {
        const endpoint = '/users';
        axios
            .get(endpoint)
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(error => {
                console.log(error);
            })
    }
};

export default requiresAuth(Users);