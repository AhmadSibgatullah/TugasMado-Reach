import React from "react"

function Tugas7(props){
    return(
        <div className="boxframe">
        <h1>Ahmad Sibgatullah L</h1>
        <hr/>
        <li>Name : {props.name}</li>
        <li>Class : {props.kelas}</li>
        <li>Email : {props.email}</li>
        </div>
    );
}

export default Tugas7;