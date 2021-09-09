import React from 'react';

import {Route} from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

import {apiKey} from "./firebase";

import Header from '../pages/Header';
import Login from '../pages/Login';
import PostList from '../pages/PostList';
import SignUp from '../pages/SignUp';
import Permit from './Permit';
import {Btn, Grid} from '../elements';
import Write from '../pages/Write';
import Detail from '../pages/Detail';
import Noti from '../pages/Noti';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false;
  
  React.useEffect(() => {
    
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }

  }, []);

  return (
    <div className="App">
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
            <Route path='/' exact component={PostList}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/signup' exact component={SignUp}/>
            <Route path='/write' exact component={Write}/>
            <Route path='/write/:id' exact component={Write}/>
            <Route path='/detail' exact component={Detail}/>
            <Route path='/noti' exact component={Noti}/>
        </ConnectedRouter>
      </Grid>
    </div>
  );
}

export default App;
