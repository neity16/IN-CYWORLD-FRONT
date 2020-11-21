import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import Logo from "../images/logo-white.svg";

function ResultPage() {
    const link = window.location.href;

    // const [gitData, setGitData] = useState(0);

    // const fetchData = async () => {
    //     await fetch("15.165.86.166:3000/").then((response) => {
    //         if (response.status === 200) {
    //             response.json().then((data) => {
    //                 const decoded = atob(data.content);
    //                 setGitData(decoded);
    //             });
    //         } else {
    //             console.log("Error");
    //         }
    //     });
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div>
            <StyledResult>
                <div>
                    <div>
                        <img alt="logo" src={Logo}></img>
                    </div>
                    <div>
                        <div>당신의 인-싸이월드 결과는?</div>
                        <div>
                            <div>안녕하세요</div>
                            <div>안녕하세요</div>
                        </div>
                    </div>
                </div>
                <section className="player">
                    <iframe
                        width="843"
                        height="412"
                        src="https://www.youtube.com/embed/v=mnbxbkuR51k&ab_channel=NAIN%EB%82%98%EC%9D%B8"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="YouTube"
                    ></iframe>
                </section>
                <CopyToClipboard text={link}>
                    <button>결과 공유하기</button>
                </CopyToClipboard>
            </StyledResult>
        </div>
    );
}

const StyledResult = styled.div`
    background-color: #ff6600;
    width: 1920px;

    & > div:nth-child(1) {
        display: flex;
        padding-top: 104px;
        padding-left: 346px;
    }

    & > div:nth-child(1) > div {
        color: white;
        font-size: 50px;
        margin-left: 41px;
    }

    & > div:nth-child(1) > div:nth-child(2) {
        display: block;
    }

    & > div:nth-child(1) > div:nth-child(3) {
        display: block;
    }

    & > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) {
        font-weight: 900;
        margin-top: 30px;
    }

    & > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) {
        display: flex;
    }

    & > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div {
        background: #ffffff;
        border: 2px solid #111111;
        box-sizing: border-box;
        border-radius: 10px;
        margin-top: 36px;
        width: 335px;
        height: 110px;
    }

    & > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) {
    }
`;

export default ResultPage;
