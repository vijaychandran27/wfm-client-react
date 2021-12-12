import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import WfmHome from '../../WFM/Home';

export default connect(
    (state:any)=>{
        return {
            wfmEmployee: state.wfmData.wfmEmployee,
            wfmMessage: state.wfmData.wfmMessage,
            wfmName: state.loginData.username
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getwfmEmployee:(wfmName:any)=>{
                return {type: "GET_WFM_EMPLOYEE",data:wfmName}
            },
            wfmSendReq:(employee:any)=>{
                return {type: "REQUEST_WFM_EMPLOYEE",data:employee}
            }
        },dispatch)
    }
)(WfmHome)