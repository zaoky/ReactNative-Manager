import * as React from 'react'
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Picker, Text, StyleSheet, View } from 'react-native';

class EmployeeForm extends React.Component<any, any>{

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="8888-8888"
                        value={this.props.phone}
                        onChangeText={phone => this.props.employeeUpdate({ prop: 'phone', value: phone })} />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }} >
                    <Text  style={[styles.pickerTextStyle]}> Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)