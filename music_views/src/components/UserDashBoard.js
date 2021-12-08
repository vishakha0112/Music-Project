
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <meta name="description" content="">
//     <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
//     <meta name="generator" content="Hugo 0.87.0">
//     <title>Dashboard Template · Bootstrap v5.1</title>

//     <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/dashboard/">

    

//     <!-- Bootstrap core CSS -->
// <link href="/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

//     <!-- Favicons -->
// <link rel="apple-touch-icon" href="/docs/5.1/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
// <link rel="icon" href="/docs/5.1/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
// <link rel="icon" href="/docs/5.1/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
// <link rel="manifest" href="/docs/5.1/assets/img/favicons/manifest.json">
// <link rel="mask-icon" href="/docs/5.1/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3">
// <link rel="icon" href="/docs/5.1/assets/img/favicons/favicon.ico">
// <meta name="theme-color" content="#7952b3">


//     <script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=_gzEiWmIcrSkuKzmPxcuRBnFbM_bz6Ugn3yHjYdp5ArUk_uFPKFhINcOIsgPX2jzhCIdyuR8VrQmzkqdbKQtyNu6BxT2ouDhU7hWEbHHCR0" charset="UTF-8"></script><link rel="stylesheet" crossorigin="anonymous" href="https://gc.kis.v2.scr.kaspersky-labs.com/E3E8934C-235A-4B0E-825A-35A08381A191/abn/main.css?attr=aHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4xL2V4YW1wbGVzL2Rhc2hib2FyZC8"/><style>
//       .bd-placeholder-img {
//         font-size: 1.125rem;
//         text-anchor: middle;
//         -webkit-user-select: none;
//         -moz-user-select: none;
//         user-select: none;
//       }

//       @media (min-width: 768px) {
//         .bd-placeholder-img-lg {
//           font-size: 3.5rem;
//         }
//       }
//     </style>

    
//     <!-- Custom styles for this template -->
//     <link href="dashboard.css" rel="stylesheet">


import React, { useRef,useState } from 'react';
import {NavLink,Switch,Route} from 'react-router-dom';
import { Singers } from './Singers';
import {Song} from './Song';
import {doAjax} from '../utils/ajax';
import {Search} from './Search';
import { Home } from '../containers/Home';

export const UserDashBoard = ({msg})=>{
  const musicStyle={
    fontSize:"32px",
    fontWeight:"bold",
    fontFamily:"Lucida Handwriting"
  }
  const searchName = useRef('');
  const [searchSongs,setSearchSongs] = useState([]);
  
  const doSearchSong = async (val) => {
    let json = JSON.stringify({
      song: `${searchName.current.value}`,
    });
    console.log(json);
    let promise = doAjax(process.env.REACT_APP_SEARCHSONG_URL, 'POST', json);
      promise.then((response) => {
        console.log(response);
        response.json().then((data) => {
            // console.log(data);
            setSearchSongs(data);
            // setSearchView(true);
          }).catch((err) => {
            alert("json error", err);
          });
      }).catch((err) => {
        alert("response error", err);
      });
  };

    return (<>
        <header className="navbar navbar-dark sticky-top bg-black flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center" href="#" style={musicStyle}>Music App</a>
  <input className="form-control form-control-dark w-100 mx-2" ref={searchName} type="text" placeholder="Search Song By Song Name" aria-label="Search"/>
  <NavLink aria-current="page" to="/user/searchsong"><button className="btn btn-info" onClick={()=>{doSearchSong("name");}}>Search</button></NavLink>
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3 mx-3 bg-danger rounded" href="#">Sign out</a>
    </div>
  </div>
</header>

<div className="container-fluid bg-black">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-black sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-1">
            <NavLink className="nav-link active text-white" style={{fontSize:"22px",fontWeight:"bold",fontFamily:"Cambria Heading"}} aria-current="page" to="/user/singers">
              <span data-feather="home"></span>
              SINGERS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-info" style={{fontSize:"18px"}} to="/user/songs/Sonu Nigam">
              <span data-feather="file"></span>
              Sonu Nigam
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-info" style={{fontSize:"18px"}} to="/user/songs/Shaan">
              <span data-feather="file"></span>
              Shaan
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-info" style={{fontSize:"18px"}} to="/user/songs/Arijit singh">
              <span data-feather="file"></span>
              Arijit singh
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2" style={{fontSize:"30px",fontFamily:"Cambria Math",color:"#04AA6D"}}>{msg}</h1>
      </div>

      <Switch>
        <Route path="/user" exact component={Singers}/>
        <Route path="/user/searchsong">  <Search songs={searchSongs}/>  </Route>
        <Route path="/user/singers" component={Singers}/>
        <Route path="/user/songs/:singerName" component={Song}/>
        <Route render={()=><h1>404 Page Not Found</h1>}/>
      </Switch>

    </main>
  </div>
</div>
        </>
    );
}      
    

    // <script src="/docs/5.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

    // <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="dashboard.js"></script>
