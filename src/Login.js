import React, { useState } from 'react';
import './Login.css';
import logos from './assets/udemy.png'
import { Link } from 'react-router-dom';

function Logins() {

    const [value, setValue] = useState(false);
    const [Password, setPassword] = useState(false);
    const [link,setLink]=useState(false)
    var uzers=[{value:"",Password:""}]

function links(){
    var linkss =value&&Password
    return linkss? "/Classes":"/";
}

 function spinner(){
    var spinn = link
    return spinn ? <div className="spinner-border text-info "></div>:""; 
}

    return (
        <div className="a" ><br/>
            <div className="header">
                <img src={logos} alt="logos" />
            </div>
            <br/><br/><br/>

            <div className="container d-flex justify-content-center">
                <div className="card text-center width: 18rem;" >
                    <div className="card-body ">
                        <br /><br />
                        <h5 className="card-title">Welcome</h5>
                        <p className="card-text">To log in you must enter a name and password </p>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"> name</label>
                            <input type="texs" className="form-control" placeholder="Enter full name"
                              
                                onChange={(e) => setValue(e.target.value)}
                               
                                id="btn1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="exampleInputPassword1" />
                        </div>
                     
                 <button  className="btn" onClick={()=> setLink(true)}
                       disabled={!value||!Password} 
                      ><Link to={links()}>Login</Link></button>
                       <br/> 
                       { spinner()}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Logins;

