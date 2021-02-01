import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import Logo from '../images/logo-white.svg';
import sketchbook from '../images/sketchbook.svg';

const Button = styled.button`
  width: 260px;
  height: 62px;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  line-height: 62px;
  color: white;
  background: rgba(0, 0, 0, 0.01);
  position: relative;
  left: 500px;
  top: 200px;
  border: solid white 3px;
  border-radius: 20px;
  padding-bottom: 10px;
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    background: #ff4000;
  }
`;
function ResultPage({ object, props, onResetAns }) {
  const link = window.location.href;
  const score = object.score;
  const scoreRate = object.scoreRate;
  const levelNum = props.match.params.levelNum;
  let number = String(scoreRate);
  let numberValue = number.substring(0, 2);
  const [levelStatus, setLevelStatus] = useState({
    leveldata: null,
    status: 'idle',
  });
  /* test */
  const fetchData = async () => {
    setLevelStatus({
      ...levelStatus,
      status: 'pending',
    });
    await fetch(`http://15.165.86.166:3000/result/${levelNum}`).then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          // console.log(data);
          setLevelStatus({
            leveldata: data.data,
            status: 'resolved',
          });
        });
      } else {
        // console.log('Error');
        setLevelStatus({
          ...levelStatus,
          status: 'idle',
        });
      }
    });
  };
  const onHandleAgain = () => {
    props.history.push('/');
    onResetAns();
  };
  useEffect(() => {
    fetchData();
  }, []);

  switch (levelStatus.status) {
    case 'pending':
      return <div>LOADING!</div>;
    case 'resolved':
      return (
        <>
          <div>
            <StyledResult>
              <div>
                <div>
                  <img alt="logo" src={Logo}></img>
                </div>
                <div>당신의 인-싸이월드 테스트 결과는?</div>
                {score ? (
                  <div>
                    <div>{score}점</div>
                    <div>동년배 중 상위 {numberValue}%</div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                <div>{levelStatus.leveldata.title}</div>
                <div>
                  <img alt="img" src={levelStatus.leveldata.imageUrl}></img>
                </div>
                <div>{levelStatus.leveldata.guide}</div>
                <img src={sketchbook}></img>
              </div>
              <div>Lv.{levelNum}인 당신을 위한 추천 영상</div>
              <div>
                <section className="player">
                  <iframe
                    width="843"
                    height="412"
                    src={levelStatus.leveldata.videoUrl}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="YouTube"
                  ></iframe>
                </section>
              </div>
              <div></div>
              <div>
                <CopyToClipboard text={link}>
                  <Button>결과 공유하기</Button>
                </CopyToClipboard>
                <Button onClick={onHandleAgain}>다시 하기</Button>
              </div>
            </StyledResult>
          </div>
        </>
      );
    case 'idle':
    default:
      return <div>idle status</div>;
  }
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
    font-size: 54px;
    line-height: 80px;
    /* identical to box height */
    text-align: center;
    padding: 2px;
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
    font-size: 54px;
    line-height: 80px;
    /* identical to box height */
    text-align: center;
    margin-left: 10px;
    padding: 2px;
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
    left: 450px;
    top: 1513px;
    color: #ff6600;
    font-size: 48px;
    line-height: 71px;
  }

  & > div:nth-child(4) {
    position: absolute;
    left: 350px;
    top: 1613px;
    border: 4px solid #ff6600;
  }

  & > div:nth-child(5) {
    height: 897px;
    margin-top: 127px;
    background-color: black;
  }
`;

export default ResultPage;
