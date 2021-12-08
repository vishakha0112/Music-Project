import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom';
import { Singers } from './Singers';
import {Song} from './Song';
import { AddSong } from './AddSong';
import { DeleteSong } from './DeleteSong';

export const AdminDashBoard = ({msg})=>{
  const musicStyle={
    fontSize:"32px",
    fontWeight:"bold",
    fontFamily:"Lucida Handwriting"
  }
    return (<div style={{height:"100%"}}>
        <header className="navbar navbar-dark sticky-top bg-black flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center" href="#" style={musicStyle}>Music App</a>
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3 mx-3 bg-danger rounded" href="#">Sign out</a>
    </div>
  </div>
</header>

<div className="container-fluid bg-black">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block bg-black sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-1">
            <NavLink className="nav-link active text-white" style={{fontSize:"28px",fontFamily:"Cambria Heading"}} aria-current="page" to="/user/addsong">
              <span data-feather="home"></span>
              <i class="fas fa-plus-circle"></i> Add a Song
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink className="nav-link active text-white" style={{fontSize:"28px",fontFamily:"Cambria Heading"}} aria-current="page" to="/user/deletesong">
              <span data-feather="home"></span>
              <i class="fas fa-minus-circle"></i> Delete a Song
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2" style={{fontSize:"30px",fontFamily:"Cambria Math",color:"#04AA6D"}}>{msg}</h1>
      </div>

      <Switch>
        <Route path="/user" exact component={Singers}/>
        <Route path="/user/addsong" component={AddSong}/>
        <Route path="/user/deletesong" component={DeleteSong}/>
        <Route render={()=><h1>404 Page Not Found</h1>}/>
      </Switch>

    </main>
  </div>
</div>
        </div>
    );
}      
