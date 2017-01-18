import * as React from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import * as _ from 'lodash';

class EmployeeList extends React.Component<any, any>{
    dataSource: React.ListViewDataSource;

    componentWillMount(){
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps:any){
        this.createDataSource(nextProps);        
    }

    createDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    } 

    renderRow(employee){
        return <ListItem employee={employee} />;
    }

    render() {        
        return (
            <ListView 
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state =>{
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });    
    return { employees };
};

export default connect(mapStateToProps, {employeesFetch}) (EmployeeList);