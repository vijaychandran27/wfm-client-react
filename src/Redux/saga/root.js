import {takeEvery} from 'redux-saga/effects'
import { loginHandler,getManagerEmployee } from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery("GET_MANAGER_EMPLOYEE", getManagerEmployee)

}