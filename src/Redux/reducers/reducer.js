export const loginReducer=(state={username:"NA",token:"NA",usertype:"NA",message:""},action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log(action.data)
            return {...action.data,message:""};
        case "LOGIN_FAILURE":
            console.log(action)
            return {...state,message:"Login Credentials incorrect"}
        default:
            return state
    }
}
export const ManagerReducer=(state={managerEmployee:"NA",Managermessage:"NA"},action)=>{
    switch(action.type){
        case "GET_MANAGER_SUCCESS":
            return {...action.data};
        case "GET_MANAGER_FAILURE":
            return {...state,Managermessage:"Empty Data"};
        default:
            return state
    }
}

export const wfmReducer=(state={wfmEmployee:"NA",wfmmessage:"NA"},action)=>{
    switch(action.type){
        case "GET_WFM_SUCCESS":
            return {...action.data};
        case "GET_WFM_FAILURE":
            return {...state,wfmmessage:"Empty Data"};
        default:
            return state
    }
}