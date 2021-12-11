import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagerHome from '../../Managers/Home';

export default connect(
    (state:any)=>{
        return {
            ManagerEmployee: state.ManagerData.managerEmployee,
            managerMessage: state.ManagerData.managerMessage,
            managerName: state.loginData.username
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getManagerEmployee:(managerName:any)=>{
                return {type: "GET_MANAGER_EMPLOYEE",data:managerName}
            }
        },dispatch)
    }
)(ManagerHome)