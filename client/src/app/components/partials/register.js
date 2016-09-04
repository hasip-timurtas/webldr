import React from 'react';


export default class AboutUs extends React.Component {
    register(event) {
        event.preventDefault();
        var email = this.refs.email.value.trim();
        var password = this.refs.password.value.trim();

        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });

    }


    loginWithGoogle() {
        Meteor.loginWithGoogle(function (err) {
            if (err) {

            } else {
                console.log(Meteor.userId());
            }
        });
    }

    logOut() {
        Meteor.logout(function (err) {
            if (err) {

            } else {
                console.log(Meteor.userId());
            }
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.register.bind(this) }>
                    <input type="email" ref="email" name="registerEmail" />
                    <input type="password" ref="password" name="registerPassword" />
                    <input type="submit" value="Register" />
                </form>

                <input type="button" value="login with Google" onClick={this.loginWithGoogle} />

                <input type="button" value="Logout" onClick={this.logOut} />
            </div>
        )
    }
}


