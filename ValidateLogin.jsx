import { useState } from "react"
function Login(){
    const[i, change]=useState(" ")
    const[j, change2]=useState(" ")
    function check(){
        if(un.value.length==" "){
            change("Please Enter a valid Username")
        }
        if(pw.value.length==" "||pw.value.length<8){
            change2("Please Enter a valid Password")
        }
        else if(un.value.length!=" " && pw.value.length!=" "||pw.value.length>=8){
            alert("Login Successfull")
        }
    }
    return (<div>
    <input type="text" name="username" id="un"/><br></br><br></br>
    <p>{i}</p>
    <input type="password" name="password" id="pw"/><br></br><br></br>
    <p>{j}</p>
    <button onClick={check}>Login</button>
    </div>)
}
export default Login