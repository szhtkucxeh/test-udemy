import './Classes.css';
import React, {useEffect, useState } from 'react';
import json from './udemy courses.json';
import androids from './assets/Icons/android.png'
import django from './assets/Icons/django.png'
import flutter from './assets/Icons/flutter.png'
import node from './assets/Icons/node.png'
import web from './assets/Icons/web.png'
import uzers from './Login'
const nemas=uzers;

function Classes(props) {

    const [data, setData] = useState([]);
    // const[image,setImage]=useState([])
    const image=[androids,django,flutter,node,web];
   
// console.log(image); // const images=image.map((e,i)=>console.log()
    // )

    useEffect(()=>{
      
        setData(json);
            // console.log(data);
       },[]);
    
    console.log("kk");



    //    function listData(){
    //     var datas= data.map((e)=>
    //             <li>{key={e.toString()}
    //             {e}
    //             </li>
    //             )  
    //             console.log("datas");
    // };
    // listData()
    return (
        <div>
            <div className="aaaa">
                <h1>List of lessons</h1>
                <h3>hlo {props.value}</h3>
            </div>
            <div className="bbbb">
            
                <ul  class="list-group" >
                 {/* const a= data.map((i) => */}
                {/* // <div key={data.titie}> */}
                {/* <ul>{listData.e.titie}</ul> */}
                {/* <img src={logos} alt="logos" /> */}
 {/* {image.map(cel=><div><li>  <img src={cel.image}></img></li></div>)  */}
{/* //  {console.log(cel.image)}} */}
{/* <img src={androids} alt="logos" /> */}
{data.map((cell ,i)=>
<div><li><h2>  <img src={image[i]} alt="image" />{cell.courseName}<br/>{cell.stars}</h2></li></div>
)}
             </ul>
                <p>fff</p>
                </div>  
        </div>
    );

}
export default Classes;
