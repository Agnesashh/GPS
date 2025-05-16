import React from "react";
import { useNavigate, Link} from "react-router-dom";


function Home(){
    return(
         <div className='buttons'>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                    <Link to="/SignUp" className="btn btn-link mt-4">SignUp</Link>
                  
                  </div>
    );

}
export default Home;