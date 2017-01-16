import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';



class LoginForm extends React.Component<any, any>{
    onEmailChanged(text: string) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text: string) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, pass} = this.props;
        this.props.loginUser(email, pass);
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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
                        value={this.props.pass}
                        secureTextEntry />
                </CardSection>
                <Text style={[styles.errorTextStyle]}>{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = (state: any) => {
    return {
        email: state.auth.email,
        pass: state.auth.pass,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);