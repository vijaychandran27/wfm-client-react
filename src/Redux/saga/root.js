import {takeEvery} from 'redux-saga/effects'
import { loginHandler,getManagerEmployee,reqManagerEmployee, getwfmEmployee, reqwfmEmployee } from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery("GET_MANAGER_EMPLOYEE", getManagerEmployee)
    yield takeEvery("REQUEST_MANAGER_EMPLOYEE", reqManagerEmployee)
    yield takeEvery("GET_WFM_EMPLOYEE", getwfmEmployee)
    yield takeEvery("REQUEST_WFM_EMPLOYEE", reqwfmEmployee)
}