import React,{ useRef,useState } from 'react';
import { doAjax } from "../utils/ajax";

export const DeleteSong = ()=>{
    const form={
        border: "2px solid black",
        margin: "10px auto",
        padding: "20px",
        width: "50%",
        borderRadius: "20px"
    }

    const songname = useRef('');
    const [message, setMessage] =useState('');

    const doDeleteSong = ()=>{
        let sname = songname.current.value;
        const userObject = {"name":sname};
        console.log('URL is ',process.env.REACT_APP_DELETESONG_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_DELETESONG_URL, 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data sent to Server ',data);
                    setMessage(data.message);
                    // alert({message});
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }

    return(
        <div className="bg-black" style={{height:"466px"}}>
                             <h2 className="text-warning text-center">{message}</h2>
                             <div style={form}>
                                <div class="form-group">
                                   <label for="songname" style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>Song Name</label>
                                   <input className='form-control' ref={songname} type="text" name="songname" className="form-control my-3" id="song" placeholder="Type Song Name here" required/>
                                </div>
                                <div className='form-group'>
                                 <button onClick={doDeleteSong} className='btn btn-primary m-3'>Delete</button>                    
                                 <button type="reset" className='btn btn-secondary m-1'>Cancel</button>
                                </div>
                             </div>
                 </div>           
    );
}