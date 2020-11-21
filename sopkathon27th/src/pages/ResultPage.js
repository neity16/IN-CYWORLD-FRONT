import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import Logo from "../images/logo-white-100.svg";
import sketchbook from "../images/sketchbook.svg";

function ResultPage() {
    const link = window.location.href;

    const [leveldata, setLeveldata] = useState(0);
    const [userdata, setUserdata] = useState(0);

    const fetchData = async () => {
        await fetch("http://15.165.86.166:3000/result/1").then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    setLeveldata(data.data);
                });
            } else {
                console.log("Error");
            }
        });
    };

    const fetchUser = async () => {
        await fetch("http://15.165.86.166:3000/user").then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    setLeveldata(data.data);
                });
            } else {
                console.log("Error");
            }
        });
    };

    useEffect(() => {
        fetchData();
        fetchUser();
    }, []);

    return (
        <div>
            <StyledResult>
                <div>
                    <div>
                        <img alt="logo" src={Logo}></img>
                    </div>
                    <div>당신의 인-싸이월드 테스트 결과는?</div>
                    <div>
                        <div>{userdata.score}</div>
                        <div>{userdata.scoreRate}</div>
                    </div>
                </div>
                <div>
                    <div>{leveldata.title}</div>
                    <div>
                        <img alt="img" src={leveldata.imageUrl}></img>
                    </div>
                    <div>{leveldata.guide}</div>
                    <img src={sketchbook}></img>
                </div>
                <div>
                    <section className="player">
                        <iframe
                            width="843"
                            height="412"
                            src={leveldata.videoUrl}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="YouTube"
                        ></iframe>
                    </section>
                </div>
                {/* <CopyToClipboard text={link}>
                    <button>결과 공유하기</button>
                </CopyToClipboard> */}
                <div>안녕하세요</div>
            </StyledResult>
        </div>
    );
}

const StyledResult = styled.div`
    background-color: #ff6600;
    width: 100%;
    height: 3000px;

    & > div:nth-child(1) > div:nth-child(1) {
        padding-top: 34px;
        padding-left: 40px;
    }

    & > div:nth-child(1) > div:nth-child(2) {
        color: white;
        font-weight: 900;
        font-size: 80px;
        text-align: center;
    }

    & > div:nth-child(1) > div:nth-child(3) {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 50px;
    }

    & > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) {
        /* position: absolute; */
        width: 304px;
        height: 100px;
        /* left: 537px;
        top: 261px; */
        color: white;
        border: 2px solid #ffffff;
        box-sizing: border-box;
        border-radius: 20px;
    }

    & > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) {
        /* position: absolute; */
        width: 521px;
        height: 100px;
        /* left: 862px;
        top: 261px; */
        color: white;
        border: 2px solid #ffffff;
        box-sizing: border-box;
        border-radius: 20px;
    }

    & > div:nth-child(2) {
        /* position: absolute; */
        width: 1280px;
        height: 860px;
        /* left: 320px;
        top: 444px; */
        text-align: center;
        /* display: flex;
        justify-content: center;
        text-align: center; */
        margin-left: 110px;
        margin-top: 50px;
    }

    & > div:nth-child(2) > div:nth-child(1) {
        position: absolute;
        width: 1280px;
        font-weight: bold;
        font-size: 48px;
        line-height: 71px;
        text-align: center;
        letter-spacing: -0.03em;
        color: #ff6600;
        font-weight: 700;
        margin-top: 100px;
        text-decoration: underline;
    }

    & > div:nth-child(2) > div:nth-child(2) {
        position: absolute;
        width: 534px;
        height: 454px;
        text-align: center;
        margin-top: 200px;
        margin-left: 373px;
    }

    & > div:nth-child(2) > div:nth-child(3) {
        position: absolute;
        width: 900px;
        height: 150px;
        text-align: center;
        margin-top: 650px;
        margin-left: 220px;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 180%;
        letter-spacing: -0.05em;
        color: #666666;
    }

    & > div:nth-child(3) {
        position: absolute;
        width: 1064px;
        height: 599px;
        left: 428px;
        top: 1613px;
    }

    & > div:nth-child(4) {
        height: 897px;
        margin-top: 127px;
        background-color: black;
    }
`;

export default ResultPage;
