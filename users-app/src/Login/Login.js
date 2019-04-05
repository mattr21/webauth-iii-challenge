import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    };

    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username" />
                        <input 
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            id="username"
                            name="username"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" />
                        <input 
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            id="password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </>
        );
    }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = "http://localhost:5000/api/auth/login";
        axios
            .post(endpoint, this.state)
            .then(res => {
                // console.log("LOGIN RESPONSE:", res);
                localStorage.setItem('token', res.data.token);
            })
            .catch(error => {
                console.log("LOGIN ERROR:", error);
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
}

export default Login;