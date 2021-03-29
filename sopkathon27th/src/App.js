<<<<<<< HEAD
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/RenewalResultPage";
import QuestionPage from "./pages/QuestionPage";
import { postAnswerAPI } from "./lib/api/Answer";

const question = [
  {
    idx: 1,
    desc: "이 킥의 이름은?",
    bogi: ["헥토파스칼 킥", "스콜피온 킥", "바나나 킥", "브라질리언 킥"],
    img:
      "https://cdn.clien.net/web/api/file/F01/5321252/8709ff8bc4f64b3ea51.GIF?w=230&h=150&gif=true",
  },
  {
    idx: 2,
    desc: "마지막 대사를 완성하시오.",
    bogi: ["치약", "농약", "사약", "마약"],
    img:
      "https://images.velog.io/images/neity16/post/3db4449e-1a0a-4fa4-a43f-164c8097423c/%E1%84%86%E1%85%A1%E1%84%8B%E1%85%A3%E1%86%A8.png",
  },
  {
    idx: 3,
    desc: "신구 할아버지의 대사로 옳은 것은?",
    bogi: [
      "느그 아부지 머하시노",
      "니들이 게 맛을 알아",
      "날 쏘고 가라",
      "밥은 먹고 다니냐",
    ],
    img:
      "data:image/jpeg;base64,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",
  },
  {
    idx: 4,
    desc: "다음 차를 보면 해야 할 행동으로 옳은 것은?",
    bogi: [
      "차 천장을 때린다",
      "황금 박쥐라고 외친다",
      "'황마!' 외치고 친구를 때린다",
      "코끼리 코를 돈다",
    ],
    img:
      "https://images.velog.io/images/neity16/post/d8619e37-70bd-45a7-9764-a4b03a2f097f/d%20(4).jpg",
  },
  {
    idx: 5,
    desc: "다음 장면에서 동수가 한 말은? 동수 : 니가 가라 ooo",
    bogi: ["사이판", "하와이", "필리핀", "허니문"],
    img: "http://res.heraldm.com/content/image/2016/04/05/20160405000478_0.jpg",
  },
  {
    idx: 6,
    desc: "이 그림을 보고 떠오르는 노래가사로 가장 알맞은 것은?",
    bogi: [
      "오 아이 라이크 잇",
      "오노 돈 두 댓",
      "하이 하우 알 유",
      "씨유 넥스트 타임",
    ],
    img:
      "https://2.gall-img.com/tdgall/files/attach/images/82/915/388/111/76e6daea3f740eb1b2efa5e104e5f53a.jpg",
  },
  {
    idx: 7,
    desc: "다음 단어를 영어로 읽으면?",
    bogi: ["WMF", "YOUR WELCOME", "KIN", "JEUL"],
    img:
      "https://www.theteams.kr/includes/uploads/company_profile/%EC%A6%90%EB%9D%BC%ED%8A%B8%EB%8B%88.png",
  },
  {
    idx: 8,
    desc: "이 장면을 설명하는 어휘는?",
    bogi: ["긴또깡", "빵꾸똥꾸", "그지깽깽이", "을용타"],
    img: "https://upload.wikimedia.org/wikipedia/ko/4/4e/Eulyongta.jpg",
  },
  {
    idx: 9,
    desc: "이 사람은 누구?",
    bogi: ["싱하형", "이소룡", "초난강", "주윤발"],
    img:
      "https://post-phinf.pstatic.net/MjAyMDA1MDdfNjQg/MDAxNTg4Nzc5MjkwMzU0.UmawMhwgCw5XBu4ZM7dcFbHbNegELuS8aEOGP24A6Tkg.UglbefdHfAU2ZYLOQAYJhkrdZxo7_RB57jqH2hYpTJwg.JPEG/image_2492647011588779274539.jpg?type=w1200",
  },
  {
    idx: 10,
    desc: "이 사람의 풀네임을 완성하시오. 루이 윌리엄~스 OOOO OOO 3세",
    bogi: [
      "알프레도 주니어 3세",
      "로마리오 주니어 3세",
      "리마리오 주니어 3세",
      "세바스찬 주니어 3세",
    ],
    img:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA0MjNfMTEg%2FMDAxNTU1OTg4MDQzMjIx.rVR778YdoPGqm3EUQmvpCi20HlZwu604PUE0tcM39jMg.aoFoOc8CTOyXtxCy2ZBts_0yQbQLzxTOZ_6ry9LwN-Ag.PNG.shalacho%2Fthumb.png&type=sc960_832",
  },
];
=======
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { question } from './lib/data/Question';
import { postAnswerAPI } from './lib/api/Answer';
import LandingPage from './pages/LandingPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
>>>>>>> 9cebe1ccf4da6554dbac736c01c00566da753584

function App({ history, match }) {
  const [ans, SetAns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [birthYear, SetBirthYear] = useState(" ");
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
<<<<<<< HEAD
  const onBirthHandler = (data) => {
=======

  const onBirthHandler = data => {
>>>>>>> 9cebe1ccf4da6554dbac736c01c00566da753584
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
    SetBirthYear("");
  };

  return (
<<<<<<< HEAD
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <LandingPage onBirthHandler={onBirthHandler} props={props} />
        )}
      ></Route>
      {/* <Route exact path='/' component={LandingPage} ></Route> */}
      {
        <Route
          exact
          path="/result/:levelNum"
          render={(props) => (
            <ResultPage props={props} onResetAns={onResetAns} object={object} />
          )}
        ></Route>
      }
      {/* <Route exact path='/result/:idx' component={ResultPage}></Route> */}
      <Route
        exact
        path="/question/:idx"
        render={(props) => (
          <QuestionPage
            onAnswerSubmit={onAnswerSubmit}
            onAnsHandler={onAnsHandler}
            /* props={props} */ question={question}
          />
        )}
      ></Route>
      {/* <Route exact path='/question/:idx' ></Route> */}
      {/* <Route path='/question/:idx' component={Question}></Route> */}
      <Route path="/*">404 NOT FOUND</Route>
    </Switch>
=======
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <LandingPage onBirthHandler={onBirthHandler} props={props} />}></Route>
        <Route exact path="/question" render={props => <QuestionPage onAnswerSubmit={onAnswerSubmit} onAnsHandler={onAnsHandler} question={question} />}></Route>
        <Route exact path="/result/:levelNum" render={props => <ResultPage props={props} onResetAns={onResetAns} object={object} />}></Route>
        <Route path="/*">404 NOT FOUND</Route>
      </Switch>
    </BrowserRouter>
>>>>>>> 9cebe1ccf4da6554dbac736c01c00566da753584
  );
}

export default withRouter(App);
