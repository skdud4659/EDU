// 리액트 패키지를 불러옵니다.
import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import {deleteBucketFB, updateBucketFB} from "./redux/modules/bucket";

const Detail = (props) => {
    const dispatch = useDispatch();
    
    
  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);
  // url 파라미터에서 인덱스 가져오기
  let bucket_index = parseInt(props.match.params.index);

  return (
    <div>
      <h1>{bucket_list[bucket_index].text}</h1>
      <ButtonGroup>
        <Button 
        style ={{color:'purple'}}
        onClick={() => {
        //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
        // 예를 들면 이렇게요.
        dispatch(deleteBucketFB(bucket_index));
        props.history.goBack();
      }}>삭제하기</Button>
        <Button onClick={() => {
          dispatch(updateBucketFB(bucket_index));
          props.history.goBack();
      }}>완료하기</Button>
      </ButtonGroup>
    </div>
  );
};

export default Detail;