import React, {useState, useEffect, useRef} from "react";
import "./header.css";
import InfoPlay from "../InfoPlay";
import TeamName from "../TeamName";
import TeamInfo from "../TeamInfo";
import GoalInfo from "../GoalInfo";
import Box from "../Box";
import Coefficient from "../Coefficient";

const Header = () => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onmessage = ({data}) => {
        console.log("kamran", data)
    }

    // setInterval(() => {
    //     socket.send("1234")
    // })

    // const [result, setResult] = useState(''); 

    // function getAllMessages() {
    //     try {
    //         return fetch('http://localhost:3002/getAllMessages').then(response => console.log(response.json()));
    //     } catch (e) {
    //         console.log('ERROR', e);
    //     }
    // }

    // useEffect(() => {
    //     ws.addEventListener("open", function (event) {
    //         ws.send("kamran")
    //         // console.log('resultsfromapi', e.data);
    //         // setResult(prevValue => [...prevValue, ...e.target.value])//TODO look for api result
    //     }) 

    //     ws.addEventListener("message", function(event) {
    //         console.log('Message from server ', event.data); 
    //     })

    //     // ws.onmessage = function(event) {
    //     //     console.log("WebSocket message received:", event.data);
    //     // };

    // }, [])

    return (
        <div className='wrapper'>
        <div className='wrapper-container'>
            <InfoPlay/>
            <TeamName/>
            <TeamInfo/>
            <GoalInfo/>
            <Box/>
            <Coefficient/>
        </div>
    </div>
    )
};

export default Header;