import { useEffect, useState } from "react"

const ManagerHome=({managerName,ManagerEmployee,managerMessage,getManagerEmployee}:any)=>{
    const user = localStorage.getItem("username");
    useEffect(()=>{
        if (user) {
            console.log(user);
            getManagerEmployee({managerName:user})
          }
        if(ManagerEmployee !== "NA")
            setEmployee(ManagerEmployee)
    },[managerMessage]);
    const [employees, setEmployee] = useState([])
    
    return (
        <div className="table-responsive-md">
            <table className="table " >
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
                        <td><button style={{backgroundColor:'#6f42c1'}}>Request Lock</button></td>
                    </tr>):"No Data"
                    }
                </tbody>
                </table>
        </div>
    )
}

export default ManagerHome