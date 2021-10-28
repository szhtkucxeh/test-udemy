import React, { useState } from 'react';
import './Login.css';
import logos from './assets/udemy.png'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Classes from './Classes';


function Logins() {

    const [value, setValue] = useState(false);
    const [Password, setPassword] = useState(false);
    const [link,setLink]=useState(false)
    var uzers=[{value:"",Password:""}]

    console.log(value);
    console.log(Password);
    console.log(link);



  function disableaa(value, values){
        if(value==null||values==null ){
           return disableaa=false;
        }
    };
    disableaa(value, Password)
    // const [list, setList]= useState([]);
    // const saveName = () => {
    //     let mission = {
    //         missionDesc: value,
    //         done: true,
    //     }
    //     setList(state => [...state, mission])
    //     setValue("");

    // }
    //  disableBtn1(){
    //     document.getElementById("btn1").disabled = true;
    //   };
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
                                // onClick={setValue}
                                onChange={(e) => setValue(e.target.value)}
                                // value=""
                                id="btn1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="exampleInputPassword1" />
                        </div>
                       {/* <button disabled={!value} className="btn btn-primary">Login</button> */}
            {/* <button 
            disabled={!value}
            className="btn btn-primary"
            >  <Link to="/Classes"
            //  onChange={(e) => disableaa()} 
                 ></Link>Login </button> */}
                 {/* <Link to="/"  className="btn btn-primary">Login</Link>  */}
                
                 <Link to="/Classes" 
                 disabled={!value||!Password}
                //  className="btn btn-primary"
                //  onChange={(e) => disableaa()} 
                 ><button  className="btn btn-primary" disabled={!value||!Password}>Login</button></Link>
                      
                        
                        {/* // {show ? <Redirect to="/home" /> : null}  */}
                        <br />
                        <div className="spinner-border text-info " disabled={!value}></div>
                        {/* <div className="progress"> */}
                        {/* <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> */}
                        {/* </div> */}

                    </div>
                    {value}
                </div>

                {/* <button className="btn btn-outline-secondary"></button>  */}

            </div>
            {/* <Router>
      <Switch>
      <Route path="/Classes" component={Classes} />
      </Switch>
      </Router> */}
        </div>

    )
}
export default Logins;

