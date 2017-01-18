import * as React from 'react'
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends React.Component<any, any>{


    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} > Create </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate)