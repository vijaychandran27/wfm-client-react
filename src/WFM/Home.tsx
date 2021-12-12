import { useEffect, useState } from "react";

const WfmHome=({wfmName,wfmEmployee,wfmMessage,getwfmEmployee,wfmSendReq}:any)=>{
    const user = localStorage.getItem("username");
    const [employees, setEmployee] = useState([])
    const [formVisible, setFormVisible] = useState(false);
    const [formEmployee_id, setFormEmployee_id] = useState('');
    const [formRequestMsg, setFormRequestMsg] = useState('');
    const [formRequestee, setFormRequestee] = useState('');
    const [formReqManager, setFormReqManager] = useState('');
    const [formReqStatus, setFormReqStatus] = useState('');

    useEffect(()=>{
        if (user) {
            getwfmEmployee({wfmName:user})
          }
        if(wfmEmployee !== "NA")
            setEmployee(wfmEmployee)
    },[wfmMessage]);

    const onRequestEmp = (empObj:any) =>{
        setFormEmployee_id(empObj.employee_id);
        setFormRequestMsg(empObj.requestmessage);
        setFormRequestee(empObj.request);
        setFormReqManager(empObj.manager);
        setFormVisible(true);
    }

    const onSubmitForm = ()=>{
        setFormVisible(false);
        wfmSendReq({ employee_id:formEmployee_id, managerstatus:formReqStatus });
        setFormEmployee_id('');
        setFormRequestMsg('');
        setFormRequestee('');
        setFormReqManager('');
        setFormReqStatus('');
    }

    const onCancel = ()=>{
        setFormVisible(false);
        setFormEmployee_id('');
        setFormReqStatus('');
        setFormRequestee('');
        setFormReqManager('');
        setFormRequestMsg('');
    }

    if(formVisible){
        return(
            <div className="card" 
            style={{width: "800px", minHeight: "300px",position: "relative", top:"100px",left:"25%" 
            ,padding: "20px", color:"darkblue"}}>
                <h3 style={{backgroundColor:'#6f42c1', padding:'10px'}}> Soft Lock Request Conformation </h3>
                <form style={{ padding:'10px'}}>
                    <div className="form-group row" style={{width:'600px'}}>
                        <label className="col-sm-2 col-form-label" style={{width:'200px'}}>Employee ID</label>
                        <div className="col-sm">
                        <label className="col-sm-2 col-form-label" style={{width:'350px',color:'gray'}}>{formEmployee_id}</label>
                        </div>
                    </div>
                    <div className="form-group row" style={{width:'600px'}}>
                        <label className="col-sm-2 col-form-label" style={{width:'200px'}}>Requestee</label>
                        <div className="col-sm">
                        <label className="col-sm-2 col-form-label" style={{width:'350px',color:'gray'}}>{formRequestee}</label>
                        </div>
                    </div>
                    <div className="form-group row"  style={{width:'600px'}}>
                        <label className="col-sm-2 col-form-label" style={{width:'200px'}}>Employee Manager</label>
                        <div className="col-sm">
                        <label className="col-sm-2 col-form-label" style={{width:'350px',color:'gray'}}>{formReqManager}</label>
                        </div>
                    </div>
                    <div className="form-group row" style={{width:'600px'}}>
                        <label className="col-sm-2 col-form-label" style={{width:'200px'}}>Request Description</label>
                        <div className="col-sm">
                        <label className="col-sm-2 col-form-label" style={{width:'350px',color:'gray'}}>{formRequestMsg}</label>
                        </div>
                    </div>
                    <div className="form-group row" style={{width:'600px'}}>
                        <label className="col-sm-2 col-form-label" style={{width:'200px'}}>Status</label>
                        <div className="col-sm">
                        {/* <label className="col-sm-2 col-form-label" style={{width:'350px',color:'gray'}}>Email</label> */}
                        <select className="form-select" aria-label="Default select example" onChange={x => setFormReqStatus(x.target.value)}>
                            <option selected>select the status</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                        </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginRight:'30px',marginTop:'20px'}} onClick={() =>{onCancel()}}>Cancel</button>
                    <button type="submit" className="btn btn-primary" style={{marginTop:'20px'}} onClick={() =>{onSubmitForm()}}>Send Request</button>
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
                    <th scope="col">Requestee</th>
                    <th scope="col">Request Date</th>
                    <th scope="col">Emplyee Manager</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {(employees && employees.length > 0 ) ?
                    employees.map((x:any)=> 
                    <tr key={x.employee_id}>
                        <th scope="row">{x.employee_id}</th>
                        <th scope="row">{x.request}</th>
                        <th scope="row">{new Date( x.reqdate).toJSON().split("T")[0]}</th>
                        <th scope="row">{x.manager}</th>
                        <td><button style={{backgroundColor:'#6f42c1'}} onClick={()=>{onRequestEmp(x)}}>View Details</button></td>
                    </tr>):"No Data"
                    }
                </tbody>
                </table>
        </div>
    )
}

export default WfmHome