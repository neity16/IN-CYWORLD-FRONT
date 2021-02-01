import React, { useEffect, memo } from "react";
import { Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import Background from "../components/Background";

const BodyTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QuestionNumber = styled.div`
  width: 100%;
  font-size: 4.2rem;
  color: #ff6600;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  text-decoration: underline;
  text-underline-offset: 0.5rem;
`;
const QuestionDesc = styled.div`
  width: 100%;
  height: 5rem;
  font-size: 3.4rem;
  font-weight: bold;
  text-align: center;
`;
const Image = styled.img`
  width: auto;
  height: 26rem;
  margin-top: 2rem;
  border-radius: 1rem;
`;
const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;
`;
const ButtonDesc = styled.div`
  font-size: 2.4rem;
  color: white;
  font-weight: bold;
`;
const ButtonImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  padding: 0.6rem;
  margin: 0 2rem;
  background-color: white;
  border-radius: 50%;
  color: #ff6600;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  width: 40rem;
  height: 7rem;
  margin: 1rem;
  background: #ff6600;
  border-radius: 2rem;
  text-align: center;
  position: relative;
  border: solid 0.3rem #ff6600;
  cursor: pointer;
  &:hover {
    ${ButtonDesc} {
      color: #ff6600;
      background-color: white;
    }
    background-color: white;
    border: solid 0.3rem #ff6600;
    ${ButtonImg} {
      background-color: #ff6600;
      color: white;
    }
  }
`;
const Template = styled.div`
  //padding: 10% 18%;
  width: 100%;
  height: 100%;
  /*     position: relative;
    top: 30%;
    left: 20%; */
`;
const PageIndexError = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

function QuestionPage({ question, match, history, onAnsHandler }) {
  const inputIdx = Number(match.params.idx);

  const onClickHandler = (e) => {
    /* 이벤트 버블링 때문에 e.target.attributes.id.value 하면 가끔 undefinded가 뜬다! */
    //onAnsHandler(Number(e.currentTarget.getAttribute('id')));
    onAnsHandler(inputIdx, Number(e.currentTarget.attributes.id.value));

    if (inputIdx !== 10) {
      history.push(`/question/${inputIdx + 1}`);
    }
  };
  const onLoadHandler = () => {
    history.push("/");
  };

  return (
    <>
      {inputIdx > 0 && inputIdx < 11 ? (
        <Background num={inputIdx}>
          <Template>
            <BodyTemplate>
              <QuestionNumber>{`Q${
                question[inputIdx - 1].idx
              }`}</QuestionNumber>
              <QuestionDesc>{question[inputIdx - 1].desc}</QuestionDesc>
              <Image src={question[inputIdx - 1].img}></Image>
              <ButtonBox>
                <Button id={1} onClick={onClickHandler}>
                  <ButtonImg>
                    <i class="fas fa-check"></i>
                  </ButtonImg>
                  <ButtonDesc>{question[inputIdx - 1].bogi[0]}</ButtonDesc>
                </Button>
                <Button id={2} onClick={onClickHandler}>
                  <ButtonImg>
                    <i class="fas fa-check"></i>
                  </ButtonImg>
                  <ButtonDesc>{question[inputIdx - 1].bogi[1]}</ButtonDesc>
                </Button>
                <Button id={3} onClick={onClickHandler}>
                  <ButtonImg>
                    <i class="fas fa-check"></i>
                  </ButtonImg>
                  <ButtonDesc>{question[inputIdx - 1].bogi[2]}</ButtonDesc>
                </Button>
                <Button id={4} onClick={onClickHandler}>
                  <ButtonImg>
                    <i class="fas fa-check"></i>
                  </ButtonImg>
                  <ButtonDesc>{question[inputIdx - 1].bogi[3]}</ButtonDesc>
                </Button>
              </ButtonBox>
            </BodyTemplate>
          </Template>
        </Background>
      ) : (
        <PageIndexError onLoad={onLoadHandler}>
          {" "}
          Page Index Error!
        </PageIndexError>
      )}
    </>
  );
}
export default withRouter(QuestionPage);
