import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    state = {
        username: "",
        password: "",
        department: "",
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
                            placeholder="username"
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
                            placeholder="password"
                        />
                    </div>
                    <div>
                        <label htmlFor="department" />
                        <input 
                            value={this.state.department}
                            onChange={this.handleInputChange}
                            id="department"
                            name="department"
                            type="text"
                            placeholder="department"
                        />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </>
        );
    }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = "http://localhost:5000/api/auth/register";
        axios
            .post(endpoint, this.state)
            .then(res => {
                // console.log("LOGIN RESPONSE:", res);
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/login');
            })
            .catch(error => {
                console.log("REGISTER ERROR:", error);
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
}

export default Register;