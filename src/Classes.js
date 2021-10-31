import "./Classes.css";
import React, { useEffect, useState } from "react";
import json from "./udemy courses.json";
import androids from "./assets/Icons/android.png";
import django from "./assets/Icons/django.png";
import flutter from "./assets/Icons/flutter.png";
import node from "./assets/Icons/node.png";
import web from "./assets/Icons/web.png";
import uzers from "./Login";
import { Link } from "react-router-dom";

const nemas = uzers;


function Classes(props) {
  const [data, setData] = useState([]);
  const image = [androids, django, flutter, node, web];

    useEffect(() => {
        setData(json);

    }, []);

 
  return (
    <div>
        <div className="aaaa">
            <h1>List of lessons</h1>
            <h3>hlo {props.value}</h3>
        </div>
        <div className="bbbb">
            <dl>
            {data.map((cell, i) => (
              <div>
                <dt>
                    <img src={image[i]} alt="image" />
                    <Link to="./detailsOfTheLesson"><h2>{cell.courseName}</h2></Link>
                    {cell.stars}
                </dt>
              </div>
            ))}
            </dl>
        </div>
    </div>
  );
}
export default Classes;
