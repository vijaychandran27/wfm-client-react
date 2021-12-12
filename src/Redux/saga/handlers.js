import axios from 'axios'
import {call,put} from 'redux-saga/effects'


export function* loginHandler(action){
    try{
 let  result = yield call(axios.post,"http://localhost:8000/users/signin",action.data)
 console.log(result.data)

 localStorage.setItem("username",result.data.username)
 localStorage.setItem("usertype",result.data.usertype)
 localStorage.setItem("token",result.data.token)

 yield put({type:"LOGIN_SUCCESS",data: 
  {
     username:result.data.username,
     usertype:result.data.usertype,
     token: result.data.token
  }})
    } 
  catch(e){
      yield put({type:"LOGIN_FAILURE"})
  }
 
}

export function* getManagerEmployee(action){
  try{
    let  result = yield call(axios.post,"http://localhost:8000/manager/getEmployees",action.data)


    yield put({type:"GET_MANAGER_SUCCESS", data:{managerEmployee: result.data.data,managerMessage:result.data.message}})
  } 
  catch(e){
      yield put({type:"GET_MANAGER_FAILURE"})
  }

}

export function* reqManagerEmployee(action){
  try{
    let  result = yield call(axios.post,"http://localhost:8000/manager/insertRequestMessage",action.data)

    yield put({type:"GET_MANAGER_SUCCESS", data:{managerMessage:"Updated"}})
  } 
  catch(e){
      yield put({type:"GET_MANAGER_FAILURE"})
  }

}

export function* getwfmEmployee(action){
  try{
    let  result = yield call(axios.post,"http://localhost:8000/wfmmanager/getEmployees",action.data)


    yield put({type:"GET_WFM_SUCCESS", data:{wfmEmployee: result.data.data,wfmMessage:result.data.message}})
  } 
  catch(e){
      yield put({type:"GET_WFM_FAILURE"})
  }

}

export function* reqwfmEmployee(action){
  try{
    let  result = yield call(axios.post,"http://localhost:8000/wfmmanager/updateRequestMessage",action.data)
    yield put({type:"GET_WFM_SUCCESS", data:{wfmMessage:"Updated"}})
  } 
  catch(e){
      yield put({type:"GET_WFM_FAILURE"})
  }

}