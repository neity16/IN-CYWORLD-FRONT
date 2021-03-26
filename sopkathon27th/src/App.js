import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { question } from './lib/data/Question';
import { postAnswerAPI } from './lib/api/Answer';
import LandingPage from './pages/LandingPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

function App({ history, match }) {
  const [ans, SetAns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [birthYear, SetBirthYear] = useState('');
  const [object, SetObject] = useState({
    score: 0,
    scoreRate: 0,
    levelNum: 0,
  });

  useEffect(() => {
    if (ans[9] !== 0) {
      onAnswerSubmit();
    }
  }, [ans]);

  const onAnsHandler = (page, data) => {
    const change = ans.map((d, i) => {
      if (page - 1 === i) {
        return data;
      } else {
        return d;
      }
    });

    //console.log(change);

    (function test(c) {
      SetAns(c);
    })(change);

    //console.log(ans);
  };

  const onBirthHandler = data => {
    SetBirthYear(data);
  };

  const onAnswerSubmit = async () => {
    const object = {
      birthYear: birthYear,
      answers: ans,
    };

    // console.log(object);
    const result = await postAnswerAPI(object);

    SetObject({
      score: result.score,
      scoreRate: result.scoreRate,
      levelNum: result.levelNum,
    });

    //console.log(history);
    history.push(`/result/${result.levelNum}`);
    window.location.reload();
  };

  const onResetAns = () => {
    SetAns([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    SetBirthYear('');
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <LandingPage onBirthHandler={onBirthHandler} props={props} />}></Route>
        <Route exact path="/question" render={props => <QuestionPage onAnswerSubmit={onAnswerSubmit} onAnsHandler={onAnsHandler} question={question} />}></Route>
        <Route exact path="/result/:levelNum" render={props => <ResultPage props={props} onResetAns={onResetAns} object={object} />}></Route>
        <Route path="/*">404 NOT FOUND</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default withRouter(App);
