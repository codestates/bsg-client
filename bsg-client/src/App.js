import './style/MainNavModal.css';
import './style/MyPage.css'
import './style/MainBoard.css'
import './style/ContentBoard.css'
import './style/CommentArea.css'
import './style/UpdateContent.css';
import './style/WriteBoard.css'
import MainPage from '../src/pages/Mainpage'
import MyPage from '../src/pages/MyPage'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import MainBoard from './pages/MainBoard';
import ContentBoard from './pages/ContentBoard';
import UpdateContent from './pages/UpdateContent';
import WriteBoard from './pages/WriteBoard';


function App() {
  return (
    <>
    <Switch>
        <Route
            path='/mainpage'
            render={() => <MainPage/>}
          />
        <Route
            exact
            path='/'
            render={() => <Redirect to='/mainpage'/>}
            />
        <Route
            exact
            path='/mypage'
            render={() => <MyPage/>}
          />
          <Route
            exact
            path='/mainboard'
            render={() => <MainBoard/>}
          />
          <Route
            exact
            path='/contentboard'
            render={() => <ContentBoard/>}
          />
          <Route
            exact
            path="/updatecontent"
            render={() => <UpdateContent/>}
          />
          <Route
            exact
            path='/writeboard'
            render={() => <WriteBoard/>}
          />
    </Switch>
    </>
  );
}

export default withRouter(App);
