import React from 'react';

class Login extends React.Component {
    state = {
        username: "sam",
        password: "pass",
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
}

export default Login;