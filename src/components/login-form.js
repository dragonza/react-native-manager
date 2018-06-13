import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { fieldChanged, loginUser } from '../actions';

class LoginForm extends Component {
    renderError() {
        console.log('this.props.error', this.props.error);
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        const { email, password } = this.props;

        if (this.props.loading) {
            return <Spinner />;
        }

        return (
            <Button onPress={() => this.props.loginUser({ email, password })}>
                Log in
            </Button>
        );
    }

    render() {
        const { email, password } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input
                        value={email}
                        label="Email"
                        placeholder="user@gmail.com"
                        onChangeText={(text) => this.props.fieldChanged(text, 'email')}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        value={password}
                        placeholder="password"
                        onChangeText={(text) => this.props.fieldChanged(text, 'password')}
                    />
                </CardSection>

                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};

export default connect((state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading,
    };
}, { fieldChanged, loginUser })(LoginForm);
