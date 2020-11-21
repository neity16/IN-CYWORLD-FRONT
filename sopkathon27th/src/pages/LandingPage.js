import React, {useState} from 'react';
import "./Landing.scss";
import landingImage from "../images/landing.png";
import {Link} from "react-router-dom";



function LandingPage({onBirthHandler}) {
    const startTest=()=>{

        const UserYear=document.getElementById('year');
        console.log(UserYear.value);
        onBirthHandler(UserYear.value);
    }
    
    return (
        <div class="root">
            <img class="background" src={landingImage}></img>
            <form class="input" onSubmit={(e)=>{e.preventDefault();}}>
                <input class="input__text" type='text' id='year' pattern="[1]{1}[9]{1}[0-9]{2}||[2]{1}[0-9]{3}" required="required" placeholder="출생연도를 입력(예시: 1997)"></input>
                <Link to="/question/1">
                    <button class="input__button" onClick={startTest}>테스트 시작</button>
                </Link>
            </form>
        </div>
    )
}

export default LandingPage
