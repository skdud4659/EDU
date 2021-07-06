import React from 'react';
import { Text, Grid, Btn, Input } from '../elements';

import {actionCreators as userActions} from '../redux/modules/user'
import {useDispatch} from 'react-redux'
import { emailCheck } from '../shared/emailchk';

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert('모든 항목을 입력해주세요!')
      return;
    }
    
    if (pwd !== pwd_check) {
      window.alert('비밀번호가 일치하지 않습니다!')
      return;
    }

    if (!emailCheck(id)) {
      window.alert('이메일 형식이 맞지 않습니다!')
    }

    dispatch(userActions.signupFB(id, pwd, user_name));
  };

  return (
    <React.Fragment>
      <Grid padding="0px 16px;" margin="15% 0px 0px 0px;">
        <Grid>
          <Text bold size="25px;">회원가입</Text>
        </Grid>
        <Grid>
          <Input
            label='아이디'
            placeholder='아이디를 입력해주세요'
            _onChange={(e) => {
              setId(e.target.value)
            }}/>
        </Grid>
        <Grid margin="7% 0px 0px 0px;">
          <Input
            label='닉네임'
            placeholder='닉네임을 입력해주세요'
            _onChange={(e) => {
              setUserName(e.target.value)
            }}/>
        </Grid>
        <Grid margin="7% 0px 0px 0px;">
          <Input
            type='password'
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            _onChange={(e) => {
              setPwd(e.target.value)
            }}/>
        </Grid>
        <Grid margin="7% 0px 7% 0px;">
          <Input
            type='password'
            label='비밀번호 확인'
            placeholder='비밀번호를 확인해주세요'
            _onChange={(e) => {
              setPwdCheck(e.target.value)
            }}/>
        </Grid>
        <Grid>
          <Btn
            text="회원가입하기"
            _onClick={signup}></Btn>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SignUp;