import React,{ useRef } from 'react';
import { doAjax } from "../utils/ajax";

export const AddSong = ()=>{
    const form={
        border: "2px solid black",
        margin: "10px auto",
        padding: "20px",
        width: "50%",
        borderRadius: "20px"
    }

    const songname = useRef('');
    const artistname = useRef('');
    const songurl = useRef('');
    const imageurl = useRef('');
    
    const doAddSong = ()=>{
        let sname = songname.current.value;
        let surl = songurl.current.value;
        let aname = artistname.current.value;
        let imgurl = imageurl.current.value;
        const userObject = {"name":sname,"url":surl,"artistName":aname,"imageurl":imgurl};
        console.log('URL is ',process.env.REACT_APP_ADDSONG_URL);
        const json= JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ',userObject );
        const promise = doAjax(process.env.REACT_APP_ADDSONG_URL, 'POST', json);
        promise.then(response=>{
            response.json().then(data=>{
                    console.log('Data sent to Server ',data);
                    alert("Song added successfully");
            }).catch(err=>{
                console.log("Invalid JSON ", err);
            })
        }).catch(err=>{
            console.log('Error During Server Call ', err);
        })
    }

    return(
        <div className="bg-black">
                             <div style={form}>
                                <div class="form-group">
                                   <label for="songname" style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>Song Name</label>
                                   <input className='form-control' ref={songname} type="text" name="songname" className="form-control my-3" id="song" placeholder="Type Song Name here" required/>
                                </div>
                                <div class="form-group">
                                   <label for="artistname" style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>Artist Name</label>
                                   <input className='form-control' ref={artistname} type="text" name="artistname" className="form-control my-3" id="artist"  placeholder="Type Artist Name here" required/>
                                </div>
                                <div class="form-group">
                                   <label for="songurl" style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>Song URL</label>
                                   <input className='form-control' ref={songurl} type="url" name="songurl" className="form-control my-3" id="songurl"  placeholder="Type Song URL here" required/>
                                </div>
                                <div class="form-group">
                                   <label for="imageurl" style={{color:"white",fontFamily:"Arial",fontSize:"25px",fontWeight:"bold"}}>Image URL</label>
                                   <input className='form-control' ref={imageurl} type="url" name="imageurl" className="form-control my-3" id="imageurl"  placeholder="Type Image URL here" required/>
                                </div>
                                <div className='form-group'>
                                 <button onClick={doAddSong} className='btn btn-primary m-3'>Add</button>
                    
                                 <button type="reset" className='btn btn-secondary m-1'>Cancel</button>
                                </div>
                             </div>
                 </div>
            
    );
}