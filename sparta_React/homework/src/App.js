import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import styled from 'styled-components';

import HowKnow from "./HowKnow";
import Quiz from "./Question";
import Score from "./Score";
import Message from "./Mnt";
import Ranking from "./Rank";
import Progress from "./Progress";

import { withRouter } from "react-router";
// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import { connect } from "react-redux";


// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateToProps = (state) => ({
  ...state,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    
  },
  
});

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      
    };
}


  render() {
    return (
      <div className='App'>
        <Progress/>
        <Switch>
          <Route path="/" exact component={HowKnow}/>
          <Route path="/quiz"  component={Quiz}/>
          <Route path="/result"  component={Score}/>
          <Route path="/mnt"  component={Message}/>
          <Route path="/rank"  component={Ranking}/>
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));