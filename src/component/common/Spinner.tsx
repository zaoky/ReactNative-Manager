import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface ISpinner{
    size?: number | "small" | "large";
}

export const Spinner: React.StatelessComponent<ISpinner> = (props) => {
    return (
        <View style={[styles.spinnerStyle]} >
            <ActivityIndicator size={ props.size || 'large' } />
        </View>
    );
}

const styles = StyleSheet.create({
    spinnerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});