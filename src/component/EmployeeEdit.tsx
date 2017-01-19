import * as React from 'react'
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import * as _ from 'lodash';
import * as Communications from 'react-native-communications';

class EmployeeEdit extends React.Component<any, any>{
    state = { showModal:false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift} = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onPressText() {
        const {phone, shift} = this.props;
        Communications.text(phone, `your upcoming shift is on ${shift}`);
    }

    onAccept(){
        this.props.employeeDelete({uid: this.props.employee.uid});
    }

    onDecline(){
        this.setState({showModal: false});
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onPressText.bind(this)} >
                        Text Schedule
                </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})} >Fire Employee</Button>
                </CardSection>

                <Confirm
                visible={this.state.showModal} 
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete this?
                </Confirm>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);