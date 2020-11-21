import { Switch, Route } from 'react-router-dom';
import QuestionPage1 from './QuestionPage1';
import QuestionPage2 from './QuestionPage2';
import QuestionPage3 from './QuestionPage3';
import QuestionPage4 from './QuestionPage4';
import QuestionPage5 from './QuestionPage5';
import QuestionPage6 from './QuestionPage6';
import QuestionPage7 from './QuestionPage7';
import QuestionPage8 from './QuestionPage8';

function Question({match}) {
    console.log(match);
    return (
        <section>
            <Switch>
                <Route exact path='/question/1' component={QuestionPage1}></Route>
                <Route exact path='/question/2' component={QuestionPage2}></Route>
                <Route exact path='/question/3' component={QuestionPage3}></Route>
                <Route exact path='/question/4' component={QuestionPage4}></Route>
                <Route exact path='/question/5' component={QuestionPage5}></Route>
                <Route exact path='/question/6' component={QuestionPage6}></Route>
                <Route exact path='/question/7' component={QuestionPage7}></Route>
                <Route exact path='/question/8' component={QuestionPage8}></Route>
            </Switch>
        </section>
    )      
}

export default Question
