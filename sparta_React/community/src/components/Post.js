import React from 'react';
import profile from '../img/16FA865C-8278-4FEE-8791-D7E3A2C7C6A6.jpeg';
import {history} from '../redux/configStore'


import {Grid, Image, Text, Btn} from '../elements';

const Post = (props) => {
  return (
    <React.Fragment>
        <Grid >
          <Grid padding="0px 16px;" is_between>
            <Grid is_between width="auto;">
              <Image shape="circle" src={props.src}/>
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_between width="auto;">
              <Text margin="0px 5px 0px 0px;">{props.insert_dt}</Text>
              {props.is_me && (<Btn width="auto" padding="4px" margin="4px" _onClick={() => {
                history.push(`/write/${props.id}`)}}>수정</Btn>)}
            </Grid>
          </Grid>
        </Grid>
        <Grid padding="0px 16px;">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid onClick={() => {
          history.push('/detail')
        }}>
          <Image shape="rectangle" src={props.image_url}/>
        </Grid>
        <Grid padding="0px 16px;">
          <Text bold margin="5px 0px">댓글 {props.comment_cnt}개</Text>
        </Grid>
    </React.Fragment>
  );
}

Post.defaultProps = {
  user_info: {
    user_name: 'fall_of_jul',
    user_profile: profile,
  },
  img_url: profile,
  contents: '귀여운 김가을!',
  comment_cnt: 10,
  insert_dt: '23시간 전',
}

export default Post;