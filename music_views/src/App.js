import { Home } from "./containers/Home";
import {Switch,Route} from 'react-router-dom';
import { Login } from "./components/Login";
// import { UserLogin } from "./components/UserLogin";
import { Register } from "./components/Register";

const App = ()=>{
  const img = "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg";
    const appStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundColor: "#262926",
        height: "100vh",
        width:"100vw",
        // border:"2px solid black"   
    }
    const formPortal={
        border: "2px solid black",
        margin: "35px auto",
        padding: "60px",
        width: "50%",
        borderRadius: "20px"
    }
  return (
    <div>
      <Switch>
        <Route path="/" exact> <Home homeStyle={appStyle} form={formPortal}/> </Route>
        <Route path="/register"> <Register regStyle={appStyle} form={formPortal}/> </Route>
        <Route path="/user"> <Login loginStyle={appStyle} form={formPortal}/> </Route>
        <Route render={()=><h1>404 Page Not Found</h1>}/>
      </Switch>
      {/* <Home/> */}
    </div>
  );
}
export default App;