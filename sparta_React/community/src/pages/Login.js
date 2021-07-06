import React from 'react';
import { Text, Grid, Btn, Input } from '../elements';
import {getCookie, setCookie, deleteCookie} from '../shared/Cookie';

import {actionCreators as userActions} from '../redux/modules/user';
import {useDispatch} from 'react-redux';

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if(id === "" || pwd === ""){
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  };
  
  return (
    <React.Fragment>
      <Grid padding="0px 16px;" margin="15% 0px 0px 0px;">
        <Grid>
          <Text bold size="25px;">로그인</Text>
        </Grid>
        <Grid>
          <Input
            label='아이디'
            placeholder='아이디를 입력해주세요'
            _onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}></Input>
        </Grid>
        <Grid margin="7% 0px 7% 0px;">
          <Input
            type='password'
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}></Input>
        </Grid>
        <Grid>
          <Btn
            text="로그인하기"
            _onClick={()=> {
              window.alert('로그인 완료!')
              console.log('로그인 했어!')
              login();
            }}></Btn>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Login;