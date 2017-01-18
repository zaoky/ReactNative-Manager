import * as React from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

export default class ListItem extends React.Component<any, any>{

    onRowPress(){
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={[styles.titleStyle]} >
                            {this.props.employee.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});