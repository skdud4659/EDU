import React from 'react';
import { Btn, Text, Grid } from '../elements';
import {getCookie, deleteCookie} from '../shared/Cookie'

import { history } from "../redux/configStore";
import { apiKey } from "../shared/firebase";
import Permit from '../shared/Permit'

import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as userActions} from '../redux/modules/user'

const Header = React.memo((props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login)
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  //세션이 있나요?
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <Permit>
        <React.Fragment>
          <Grid padding="4px 16px">
            <Grid is_between >
              <Grid>
                <Text margin='0px' bold size='25px'>갈갈</Text>
              </Grid>
              <Grid is_between width='auto'>
                <Btn mini width="80px" text="내 정보"/>
                <Btn
                  mini
                  width="80px"
                  text="알림"
                  _onClick={() => {
                    history.push('/noti')
                  }}/>
                <Btn
                  mini
                  width="80px"
                  text="로그아웃"
                  _onClick={() => {
                    dispatch(userActions.logoutFB({}));
                  }}/>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
        </Permit>
    )
  } 

  return (
    <React.Fragment>
      <Grid padding="4px 16px">
        <Grid is_between >
          <Grid>
            <Text margin='0px' bold size='25px'>갈갈</Text>
          </Grid>
          <Grid is_between width='auto'>
            <Btn
              mini
              width="80px"
              text="회원가입"
              _onClick = {() => {
                history.push('/signup')
              }}
            />
            <Btn
              mini
              width="80px"
              text="로그인"
              _onClick = {() => {
                history.push('/login')
              }}/>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
})

export default Header;