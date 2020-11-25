import React ,{useState}from 'react'
import { Route, withRouter } from "react-router-dom"; 
import styled from 'styled-components';
import Background from '../components/Background';

const BodyTemplate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const QuestionNumber = styled.div`
    width: 100%;
    font-size: 4.2rem;
    color: #FF6600;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
`;
const QuestionDesc = styled.div`
    width:100%;
    height:5rem;
    font-size: 3.4rem;
    font-weight: bold;
    text-align: center;
`;
const Image = styled.img`
    width: auto;
    height: 26rem;
    margin-top:2rem;
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
    color: #FF6600;
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    width: 40rem;
    height:7rem;
    margin: 1rem;
    background: #FF6600;
    border-radius: 2rem;
    text-align: center;
    position: relative;
    border: solid 0.3rem #FF6600;
    cursor: pointer; 
    &:hover{
        ${ButtonDesc}{
            color:#FF6600;
            background-color: white;
        }
        background-color: white;
        border: solid 0.3rem #FF6600;
        ${ButtonImg}{
            background-color: #FF6600;
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
function QuestionPage({question, match, history, onAnsHandler, onAnswerSubmit}) {
    const inputIdx = Number(match.params.idx);

    const onClickHandler1 =()=>{
        if(inputIdx !== 10){
            onAnsHandler(1);
            history.push(`/question/${inputIdx+1}`);
        }else{
            onAnsHandler(1);
            onAnswerSubmit();
            history.push('/result');
        }
    }
    const onClickHandler2 =()=>{
        if(inputIdx !== 10){
            onAnsHandler(2);
            history.push(`/question/${inputIdx+1}`);
        }else{
            onAnsHandler(2);
            onAnswerSubmit();
            history.push('/result');
        }
    }
    const onClickHandler3 =()=>{
        if(inputIdx !== 10){
            onAnsHandler(3);
            history.push(`/question/${inputIdx+1}`);
        }else{
            onAnsHandler(3);
            onAnswerSubmit();
            history.push('/result');
        }
    }
    const onClickHandler4 =()=>{
        if(inputIdx !== 10){
            onAnsHandler(4);
            history.push(`/question/${inputIdx+1}`);
        }else{
            onAnsHandler(4);
            onAnswerSubmit();
            history.push('/result');
        }
    }
            return (
                <>
                    <Background num={inputIdx}>
                         <Template>
                            <BodyTemplate>
                                <QuestionNumber>{`Q${question[inputIdx-1].idx}`}</QuestionNumber>
                                <QuestionDesc>
                                    {question[inputIdx-1].desc}
                                </QuestionDesc>
                                <Image src={question[inputIdx-1].img}></Image>
                                <ButtonBox>
                                    <Button onClick={onClickHandler1}>
                                        <ButtonImg><i class="fas fa-check"></i></ButtonImg>
                                        <ButtonDesc>{question[inputIdx-1].bogi[0]}</ButtonDesc>
                                    </Button>
                                    <Button onClick={onClickHandler2}>
                                        <ButtonImg><i class="fas fa-check"></i></ButtonImg>
                                        <ButtonDesc>{question[inputIdx-1].bogi[1]}</ButtonDesc>
                                    </Button>
                                    <Button onClick={onClickHandler3}>
                                        <ButtonImg><i class="fas fa-check"></i></ButtonImg>
                                        <ButtonDesc>{question[inputIdx-1].bogi[2]}</ButtonDesc>
                                    </Button>
                                    <Button onClick={onClickHandler4}>
                                        <ButtonImg><i class="fas fa-check"></i></ButtonImg>
                                        <ButtonDesc>{question[inputIdx-1].bogi[3]}</ButtonDesc>
                                    </Button>
                                </ButtonBox>
                            </BodyTemplate>
                        </Template> 
                    </Background>
                </>
            )
}

export default withRouter(QuestionPage);
