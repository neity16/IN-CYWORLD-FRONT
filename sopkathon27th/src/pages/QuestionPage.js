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
    font-size: 42px;
    color: #FF6600;
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
`;
const QuestionDesc = styled.div`
    width:100%;
    height:50px;
    font-size: 34px;
    font-weight: bold;
    text-align: center;
`;
const Image = styled.img`
    width: auto;
    height: 260px;
    margin-top:20px;
    border-radius: 10px;
`;
const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
`;
const ButtonDesc = styled.div`
    font-size: 24px;
    color: white;
    font-weight: bold;
`;
const ButtonImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 6px;
    margin: 0 20px;
    background-color: white;
    border-radius: 50%;
    color: #FF6600;
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    height:70px;
    margin: 10px;
    background: #FF6600;
    border-radius: 20px;
    text-align: center;
    position: relative;
    border: solid 3px #FF6600;
    cursor: pointer; 
    &:hover{
        ${ButtonDesc}{
            color:#FF6600;
            background-color: white;
        }
        background-color: white;
        border: solid 3px #FF6600;
        ${ButtonImg}{
            background-color: #FF6600;
            color: white;
        }
    }
`;
const Template = styled.div`
    width: 64%;
    height: 64%;
    position: absolute;
    top: 160px;
    left: 300px;
`;
function QuestionPage({question, props, onAnsHandler, onAnswerSubmit}) {
    const inputIdx = Number(props.match.params.idx);
    const [chIdx,setChIdx] = useState(0);
    const [name,setName] = useState("");
    const [comment,setComment] = useState("");

    const onClickHandler1 =()=>{
        if(inputIdx !== 10){
            onAnsHandler(1);
            props.history.push(`/question/${inputIdx+1}`);
        }else{
            onAnsHandler(1);
            onAnswerSubmit();
        }
    }
    const onClickHandler2 =()=>{
        if(inputIdx !== 10){
            onAnsHandler(2);
            props.history.push(`/question/${inputIdx+1}`);
        }else{
            onAnsHandler(2);
            onAnswerSubmit();
        }
    }
    const onClickHandler3 =()=>{
        if(inputIdx !== 10){
            onAnsHandler(3);
            props.history.push(`/question/${inputIdx+1}`);
        }else{
            onAnsHandler(3);
            onAnswerSubmit();
        }
    }
    const onClickHandler4 =()=>{
        if(inputIdx !== 10){
            onAnsHandler(4);
            props.history.push(`/question/${inputIdx+1}`);
        }else{
            onAnsHandler(4);
            onAnswerSubmit();
        }
    }
            return (
                <>
                    <Background />
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
                </>
            )
}

export default withRouter(QuestionPage);
