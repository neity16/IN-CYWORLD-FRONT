import './App.css';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import {useState} from "react";
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import Question from './pages/questionPage/Question';
import QuestionPage from './pages/QuestionPage';


function App() {
  const [birthYear,setBirthYear] = useState("");

  const onBirthHandler = (data)=>{
    setBirthYear(data);
    console.log(birthYear.data);
  };
  return (
    <Router>
        <Switch>
        <Route exact path='/' render={(props)=>(<LandingPage onBirthHandler={onBirthHandler} props={props}/>)}></Route>
          <Route exact path='/result/:idx' component={ResultPage}></Route>
          <Route exact path='/question/:idx' component={QuestionPage}></Route>
          {/* <Route path='/question/:idx' component={Question}></Route> */}
          <Route path='/*'>404 NOT FOUND</Route>
        </Switch>
    </Router>
  );
}

export default App;
