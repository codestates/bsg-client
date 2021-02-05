import './style/MainNavModal.css';
import './style/MyPage.css'
import './style/MainBoard.css'
import './style/ContentBoard.css'
import MainPage from '../src/pages/Mainpage'
import MyPage from '../src/pages/MyPage'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import MainBoard from './pages/MainBoard';
import ContentBoard from './pages/ContentBoard';


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
    </Switch>
    </>
  );
}

export default withRouter(App);
