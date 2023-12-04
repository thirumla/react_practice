import React, { useState} from "react";
import axios from "axios";

function EmployeeInfo (){
    const [customersArray, setCustomersArray] = useState([]);

    function getData(){
        alert("hi");
        axios.get("https://dummy.restapiexample.com/api/v1/employees").then(resData=>{
            alert(resData.status);
            setCustomersArray(resData.data.data);
            console.log(resData.data);
        }).catch()
    };

    var result=customersArray&&customersArray.map&&customersArray.map((item,index)=>{
        return(
            <tr key={index}>
            <td> {item.employee_name}  </td>
            <td> {item.employee_salary}  </td>
            <td> {item.employee_age}  </td>
        </tr>
        )
    })

    return(
        <>
        <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        paddingLeft:"40px",
      }}>
         <fieldset>
        <legend>AXIOS CALLS</legend>
        <input type="button" value="Get Data" onClick={getData} />
            <hr />
            <table border="2" width="700">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee salary</th>
                        <th>Employee Age</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
            </fieldset>
            </div>
        </>
    )
}

export default EmployeeInfo;