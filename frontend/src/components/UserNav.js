import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import vote from '../images/vote.jpg'
import './userNav.css'
import Foot from './foot'
function UserNav(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const handleLogout = () => {
        id=null;
        window.location.href=window.location.origin;
      };
    return(
        <>
        <nav class="navbar  userNav" >
            <div class="nav usernavFlex" >
            <Link to={"/User/Home/" + id} className={`nav-link text-dark usermyvote `}>
            <img src={vote} className="myVote " alt="" /> myVote

            </Link>
            </div>
            <div class="nav navRightuser">
                <Link to={"/User/Home/"+id} class={`nav-link text-dark ${location.pathname==="/User/Home/" + id ? "locActive" : ""}`}  style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Home</Link>
                <Link to={"/User/Results/"+id} class={`nav-link text-dark ${location.pathname==="/User/Results/" + id ? "locActive" : ""}`}  style={{paddingLeft:"1vh",fontFamily:"serif",fontWeight:"bolder",fontSize:"3vh"}}>Results</Link>
                {/* <hr className="hr" /> */}
                <button onClick={handleLogout} class="btn btn-warning " style={{marginRight:"20px",color:"White"}}>Log Out &nbsp; <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
            </div>
        </nav>
          
        </>
    )
}
export default UserNav;