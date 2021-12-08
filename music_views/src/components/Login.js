import React, { useRef, useState } from 'react';
import { doAjax } from '../utils/ajax';
import { UserDashBoard } from './UserDashBoard';
import { AdminDashBoard } from './AdminDashboard';

export const Login = ({loginStyle,form})=>{
    
    const userid = useRef('');
    const password = useRef('');
    const [message, setMessage] =useState('');

    const doLogin = ()=>{
        console.log(userid, password);
        let uid = userid.current.value;
        let pwd = password.current.value;
        const userObject = {"userid":uid, "password":pwd};
        console.log('URL is ', process.env.REACT_APP_LOGIN_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_LOGIN_URL, 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data Rec From Server ',data);
                    setMessage(data.message);
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }
   
    if(message.startsWith("Welcome Admin")){
        return (<AdminDashBoard msg = {message}/>);
    }   
    else if(message.startsWith("Welcome")){
           return (<UserDashBoard msg = {message}/>);
       }
       else{
        return (
            <div style={loginStyle}>
                     <h1 className='text-white text-center pt-4' style={{fontSize:"32px",fontWeight:"bold",fontFamily:"Lucida Handwriting"}}>Music App</h1>
                             <div style={form}>
                                   <h2 className="text-center text-info">{message}</h2>
                                   <div class="form-group">
                                   <label for="username" style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>User ID</label>
                                   <input className='form-control' ref={userid} type="text" name="userid" className="form-control my-3" id="userid" placeholder="Type User ID here" aria-describedby="userid" required/>
                                
                                 </div>
                                 <div class="form-group">
                                   <label for="password" style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>Password</label>
                                   <input className='form-control' ref={password} type="password" name="password" className="form-control my-3" id="password"  placeholder="Type password here" required/>
                                 </div>
                                 <div className='form-group'>
                                 <button onClick={doLogin} className='btn btn-primary m-3'>Login</button>
                    
                                 <button className='btn btn-secondary m-1'>Reset</button>
                                 </div>
                             </div>
                 </div>
            
        );
    }
    }



    // //     <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//             //     <Switch>
//             //     <Route path="/register" component={Register}/>
//             //    </Switch>
//             //    </main>

//             // {/* // <div className="container" style={loginStyle}>
//             // //     <h1 className='text-white text-center'>Music App</h1>
//             // //     <h2>{message}</h2>

//             // //     <div className='form-group'>
//             // //         <label>User ID</label>
//             // //         <input ref={userid} className='form-control' type="text" placeholder="Type User ID here"/>
//             // //     </div>
//             // //     <div className='form-group'>
//             // //         <label>Password</label>
//             // //         <input ref={password} className='form-control' type="password" placeholder="Type password here"/>
//             // //     </div>
//             // //     <div className='form-group'>
//             // //         <button onClick={doLogin} className='btn btn-primary'>Login</button>
//             // //         <button className='btn btn-secondary'>Reset</button>
//             // //     </div>

//             // // </div> */}