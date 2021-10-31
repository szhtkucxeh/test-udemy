import data from './Classes'
import json from './udemy courses.json';
import React, {useEffect, useState } from 'react';
import './detailsOfTheLesson.css';
import androids from "./assets/Icons/android.png";
import django from "./assets/Icons/django.png";
import flutter from "./assets/Icons/flutter.png";
import node from "./assets/Icons/node.png";
import web from "./assets/Icons/web.png";





function Lesson(props) {
const [datas, setDatas] = useState([]);
  const image = [androids, django, flutter, node, web];

// var a = {props.data}

console.log(props.data);
     useEffect(()=>{
      
        setDatas(json);
          
       },[]);
    return(

        <div>
            <div className="aaaa">
                <h1>שם השיעור</h1>
                <h3>hlo {props.value}</h3>
            </div>
             {datas.map((cell ,i)=>
                <div>
                     <img src={image[i]} alt="image" />
                    <li><h1>{datas[1].title}</h1><br/><br/>
                    <h2>{cell.Subtitle}</h2><br/><br/>
                    <p>{cell.Description}</p></li>
                </div>
                )}
        </div>
    )
}
export default Lesson;