import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';



class LoginForm extends React.Component<any, any>{
    onEmailChanged(text: string) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text: string){
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email} />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        secureTextEntry />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        email: state.auth.email,
        pass: state.auth.pass
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);