import React from 'react';
import profile from '../img/16FA865C-8278-4FEE-8791-D7E3A2C7C6A6.jpeg';

import {Grid, Image, Text, Btn} from '../elements/index';

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_between>
          <Grid is_between width='auto'>
            <Image shape='circle' src={props.src}/>
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_between width='auto'>
            <Text>{props.insert_dt}</Text>
            <Btn mini text='수정'></Btn>
          </Grid>
        </Grid>
        <Grid padding='0px 16px'>
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape='rectangle' src={props.src}/>
        </Grid>
        <Grid padding='0px 16px'>
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
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