import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ReactComponent as Logo } from '../assets/icons/logo-white.svg';
import { ReactComponent as Sketchbook } from '../assets/icons/result-sketchbook.svg';
import { ReactComponent as Share } from '../assets/icons/btn-share.svg';
import { ReactComponent as Retry } from '../assets/icons/btn-retry.svg';

const RenewalResultPage = ({ object, props, onResetAns }) => {
  const link = window.location.href;

  // console.log(object);
  const score = object.score;
  const scoreRate = object.scoreRate;

  const levelNum = props.match.params.levelNum;

  let number = String(scoreRate);
  let numberValue = number.substring(0, 2);

  const [levelStatus, setLevelStatus] = useState({
    leveldata: null,
    status: 'idle',
  });

  const fetchData = async () => {
    setLevelStatus({
      ...levelStatus,
      status: 'pending',
    });

    await fetch(`https://incy-world.ga/result/${levelNum}`).then(response => {
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

  const onHandleCopy = () => {
    alert('클립보드에 테스트 결과가 복사되었습니다.');
  };

  useEffect(() => {
    fetchData();
  }, []);

  switch (levelStatus.status) {
    case 'pending':
      return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>LOADING</div>;
    case 'resolved':
      return (
        <StyledResult>
          <StyledLogo>
            <Logo onClick={onHandleAgain} />
          </StyledLogo>
          <StyledTitle>당신의 인-싸이월드 테스트 결과는?</StyledTitle>
          {score ? (
            <StyledScore>
              <div>{score}점</div>
              <div>
                <span>동년배 중</span>
                <span>상위 {numberValue}%</span>
              </div>
            </StyledScore>
          ) : (
            ''
          )}
          <StyledSketchbook>
            <Sketchbook />
            <StyledLevel>{levelStatus.leveldata.title}</StyledLevel>
            <StyledPhoto>
              <img alt="result-img" src={levelStatus.leveldata.imageUrl}></img>
            </StyledPhoto>
            <StyledDetail>{levelStatus.leveldata.guide}</StyledDetail>
          </StyledSketchbook>
          <StyledVideo>
            <>
              <StyledRecommend>LV.{levelNum}인 당신을 위한 추천 영상</StyledRecommend>
              <StyledYoutube>
                <iframe
                  width="100%"
                  height="100%"
                  src={levelStatus.leveldata.videoUrl}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title="YouTube"
                ></iframe>
              </StyledYoutube>
            </>
          </StyledVideo>
          <StyledButton>
            <CopyToClipboard text={link}>
              <div onClick={onHandleCopy}>
                <Share />
              </div>
            </CopyToClipboard>
            <div style={{ marginLeft: '11.6rem' }} onClick={onHandleAgain}>
              <Retry />
            </div>
          </StyledButton>
        </StyledResult>
      );
    case 'idle':
    default:
      return <div>idle status</div>;
  }
};

const StyledResult = styled.div`
  background-image: url('/images/result-background.png');
`;

const StyledLogo = styled.div`
  padding-top: 3.4rem;
  padding-left: 4rem;

  svg {
    width: 10rem;
    height: 10rem;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 900;
  font-size: 8rem;
  line-height: 11.8rem;
  color: #ffffff;
`;

const StyledScore = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 5.4rem;
  color: #ffffff;

  div {
    border: 0.2rem solid #ffffff;
    border-radius: 2rem;
  }

  div:nth-child(1) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 9.5rem;
    padding-right: 9.5rem;
  }

  div:nth-child(2) {
    margin-left: 2.1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 6.1rem;
    padding-right: 8.2rem;

    span:nth-child(1) {
      padding-top: 3.8rem;
      padding-bottom: 1.7rem;
      padding-right: 3.6rem;
      font-style: normal;
      font-weight: normal;
      font-size: 3.2rem;
      color: #ffffff;
    }
  }
`;

const StyledSketchbook = styled.div`
  margin-top: 5.4rem;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;

  svg {
    width: 128rem;
    height: 89.3rem;
  }
`;

const StyledLevel = styled.div`
  position: absolute;
  top: 8.3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 4.8rem;
  color: #ff6600;
  text-decoration: underline;
  text-underline-position: under;
`;

const StyledPhoto = styled.div`
  position: absolute;
  top: 19.7rem;

  img {
    width: auto;
    height: 45.4rem;
  }
`;

const StyledDetail = styled.div`
  position: absolute;
  top: 68.1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 2.8rem;
  color: #666666;
  width: 91.1rem;
  height: 15rem;
  line-height: 5rem;
`;

const StyledVideo = styled.div`
  margin-top: 12.7rem;
  width: 100%;
  height: 89.7rem;
  background: #000000;
  text-align: center;
`;

const StyledRecommend = styled.div`
  padding-top: 7.1rem;
  padding-bottom: 4rem;
  font-style: normal;
  font-weight: bold;
  font-size: 4.8rem;
  color: #ff6600;
`;

const StyledYoutube = styled.div`
  width: 106.4rem;
  height: 59.9rem;
  border: 0.4rem solid #ff6600;
  margin: 0 auto;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 6.6rem;
  padding-bottom: 6.6rem;

  svg {
    width: 36.3rem;
    height: 12rem;
  }
`;

export default RenewalResultPage;
