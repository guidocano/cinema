import {Link} from "react-router-dom";
import "../css/bootstrap.min.css"
import logo from "../assets/logo-t.png"

function Home () {

    // const name = localStorage.getItem("name")


    
    return (

  

                <div className="row align-items-center justify-content-evenly home users">
                    
                    
                    <div className="users-logo2div">
                        <Link to="/listado">
                            <img className="users-logo2" src={logo} alt="home logo" />    
                        </Link>                  



                    {/* <div className="col-5 welcome">
                        {!token && <h2 className="section-title">WELCOME!</h2>}
                        {token && <><h2 className="section-title">WELCOME BACK </h2><h2 className="section-title">{name.toUpperCase()}!</h2></>}
                    </div> */}
                    
                    </div>
                </div>


    )
}

export default Home