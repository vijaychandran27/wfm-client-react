import { useEffect, useState } from "react";

const ManagerHome=({managerName,ManagerEmployee,managerMessage,getManagerEmployee,managerSendReq}:any)=>{
    const user = localStorage.getItem("username");
    const [employees, setEmployee] = useState([])
    const [formVisible, setFormVisible] = useState(false);
    const [formEmployee_id, setFormEmployee_id] = useState('');
    const [formRequestMsg, setFormRequestMsg] = useState('');

    useEffect(()=>{
        if (user) {
            getManagerEmployee({managerName:user})
          }
        if(ManagerEmployee !== "NA")
            setEmployee(ManagerEmployee)
    },[managerMessage]);

    const onRequestEmp = (empObj:any) =>{
        setFormEmployee_id(empObj.employee_id);
        setFormVisible(true);
    }

    const onSubmitForm = ()=>{
        setFormVisible(false);
        managerSendReq({ employee_id:formEmployee_id,manager:user,requestMessage:formRequestMsg });
        setFormEmployee_id('');
        setFormRequestMsg('');
    }

    const onCancel = ()=>{
        setFormVisible(false);
        setFormEmployee_id('');
        setFormRequestMsg('');
    }

    if(formVisible){
        return(
            <div className="card" 
            style={{width: "800px", minHeight: "300px",position: "relative", top:"100px",left:"25%" 
            ,padding: "20px", color:"darkblue"}}>
                <h3 style={{backgroundColor:'#6f42c1', padding:'10px'}}> Soft Lock Request Conformation </h3>
                <form style={{ padding:'10px'}}>
                    <div className="form-group">
                        <label >Please Confirm The Lock Request For {formEmployee_id}</label>
                    </div>
                    <div className="form-group">
                        <label style={{marginTop:'10px'}}>Request Message (message must be atleast 10 char long) </label>
                        <textarea style={{width: "500px",padding:'10px',margin:'10px'}} 
                        className="form-control" onChange={(x:any)=>setFormRequestMsg(x.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginRight:'30px'}} onClick={() =>{onCancel()}}>Cancel</button>
                    <button type="submit" className="btn btn-primary" onClick={() =>{onSubmitForm()}}>Send Request</button>
                </form>
            </div>
        )
    }
    return (
        <div className="table-responsive-md">
            <table className="table " style={{width: "1200px", minHeight: "300px",position: "relative", top:"50px",left:"12%" 
            ,padding: "20px", color:"darkblue"}}>
                <thead style={{backgroundColor:'#6f42c1'}}>
                    <tr>
                    <th scope="col">EmployeeId</th>
                    <th scope="col">Name</th>
                    <th scope="col">SkillSet</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Manager</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {(employees && employees.length > 0 ) ?
                    employees.map((x:any)=> 
                    <tr key={x.employee_id}>
                        <th scope="row">{x.employee_id}</th>
                        <th scope="row">{x.name}</th>
                        <th scope="row">{x.skillSet}</th>
                        <th scope="row">{x.profile}</th>
                        <th scope="row">{x.experience}</th>
                        <th scope="row">{x.manager}</th>
                        <td><button style={{backgroundColor:'#6f42c1'}} onClick={()=>{onRequestEmp(x)}}>Request Lock</button></td>
                    </tr>):"No Data"
                    }
                </tbody>
                </table>
        </div>
    )
}

export default ManagerHome