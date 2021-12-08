import React, { useRef , useState } from "react";
import { doAjax } from "../utils/ajax";

export const Register = ({regStyle,form})=>{
    const userid = useRef('');
    const password = useRef('');
    const name = useRef('');
    const [message,setMessage] = useState('');
    
    const doRegister = ()=>{
        
        console.log(userid,password);
        let uid = userid.current.value;
        let pwd = password.current.value;
        let uname = name.current.value;  //name
        const userObject = {"userid":uid,"password":pwd,"name":uname};
        // console.log('URL is ',process.env.REACT_APP_REGISTER_URL);
        const json = JSON.stringify(userObject);
        console.log('JSON is ',json,' Object is ',userObject);
        const promise = doAjax(process.env.REACT_APP_REGISTER_URL,'POST',json);
        promise.then(response=>{
            response.json().then(data=>{
                console.log('Data received from server ',data);
                setMessage(data.message);
            }).catch(err=>{
                console.log("Invalid JSON ",err);
            })
        }).catch(err=>{
            console.log('Error during server call ',err);
        })
    }
        return (
            <div style={regStyle}>
                <h1 className='text-white text-center pt-4' style={{fontSize:"32px",fontWeight:"bold",fontFamily:"Lucida Handwriting"}}>Music App</h1>
                <h2 className="text-white text-center">{message}</h2>
                <div style={form}>
                <div className='form-group'>
                    <label style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>User ID</label>
                    <input ref={userid} className='form-control mb-2' type="text" placeholder="Type User ID here"/>
                </div>
                <div className='form-group'>
                    <label style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>Password</label>
                    <input ref={password} className='form-control mb-2' type="password" placeholder="Type password here"/>
                </div>
                <div className='form-group'>
                    <label style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>Name</label>
                    <input ref={name} className='form-control' type="text" placeholder="Type name here"/>
                </div>
                <div className='form-group'>
                    <button onClick={doRegister} className='btn btn-primary m-4'>Register</button>
                    &nbsp;&nbsp;
                    <button className='btn btn-secondary m-1'>Reset</button>
                </div>
                </div>
            </div>
        );
}