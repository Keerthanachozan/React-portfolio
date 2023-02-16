import React , {Component} from "react";
import Copyright from "./Copyright";
import Icons from "./Icons"
import Navlinks from "./Navlinks";
import Profile from "./Profile";

class Sidenav extends Component{
    render(){
        return(
           <div className="sidenav" style={{backgroundColor:"black" , width:"300px",height:"100vh" , color:"white" , position:"fixed"}}>
            <Profile/>
            <Icons/>
            <Navlinks/>
            <Copyright/>
           </div>
        )
    }
}
export default Sidenav