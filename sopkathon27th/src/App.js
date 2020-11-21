import './App.css';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import Question from './pages/questionPage/Question';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/result/:idx' component={ResultPage}></Route>
          <Route exact path='/question/:idx' component={QuestionPage}></Route>
          {/* <Route path='/question/:idx' component={Question}></Route> */}
          <Route path='/*'>404 NOT FOUND</Route>
        </Switch>
    </Router>
  );
}

export default App;
