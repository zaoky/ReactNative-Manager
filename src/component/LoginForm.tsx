import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';


interface ILoginFormState {
    email?: string;
    pass?: string;
    error?: string;
    loading?: boolean;
}

export default class LoginForm extends React.Component<void, ILoginFormState> {

    constructor() {
        super();
        this.state = { email: '', pass: '', error: '', loading: false };
    }

    btnLoginPress() {
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
        .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail(){
         this.setState({ error: 'Authentication Failed.', loading: false });
    }

    onLoginSuccess(){
        this.setState({ email: '', pass: '', loading: false });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }
        return(
            <Button onPress={this.btnLoginPress.bind(this)} >
                        Log in
                  </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        placeholder='password'
                        onChangeText={pass => this.setState({ pass })}
                        value={this.state.pass}
                        secureTextEntry
                        />
                </CardSection>

                <Text style={[styles.errorTextStyle]} >  {this.state.error} </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});