import React from "react";
// import { Login } from "../components/Login";
// import { Register } from "../components/Register";
import {NavLink} from 'react-router-dom';  //,Switch,Route
// import { Singers } from "../components/Singers";

export const Home = ({homeStyle,form})=>{
    // const img = "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg";
    // const homeStyle = {
    //     backgroundImage: `url(${img})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundColor: "#262926",
    //     height: "100vh",
    //     width:"100vw"   
    // }
    // const formPortal={
    //     border: "2px solid black",
    //     margin: "45px auto",
    //     padding: "75px",
    //     width: "50%",
    //     borderRadius: "20px"
    // }
    return (
        <div style={homeStyle}>
            <h1 className='text-white text-center pt-4' style={{fontSize:"32px",fontWeight:"bold",fontFamily:"Lucida Handwriting"}}>Music App</h1>
            <div style={form}>
            <NavLink className="nav-link text-white text-center bg-primary m-4 rounded-pill" style={{fontSize:"18px"}} to="/user">
              <span data-feather="file"></span>
              LOGIN
            </NavLink>

            <NavLink className="nav-link text-white text-center bg-primary m-4 rounded-pill" style={{fontSize:"18px"}} to="/register">
              <span data-feather="home"></span>
              Doesn't have an account? Register here
            </NavLink>
            </div>
        </div>
    );
}