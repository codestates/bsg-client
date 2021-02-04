import './style/MainNavModal.css';
import './style/MyPage.css'
import './style/MainBoard.css'
import MainPage from '../src/pages/Mainpage'
import MyPage from '../src/pages/MyPage'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import MainBoard from './pages/MainBoard';

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
          >

          </Route>
    </Switch>
    </>
  );
}

export default withRouter(App);
