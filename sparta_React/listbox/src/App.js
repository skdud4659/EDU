import React from "react";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./Listbox";
import styled from "styled-components";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from './Progress';
import Spinner from './Spinner';

// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import {connect} from 'react-redux';
// 리덕스 모듈에서 (bucket 모듈에서) 액션 생성 함수 두개를 가져올게요!
import {loadBucketFB, addBucketFB} from './redux/modules/bucket';

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateTopProps = (state) => ({
  bucket_list: state.bucket.list,
  is_loaded: state.bucket.is_loaded,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucketFB());
  },
  create: (new_item) => {
    console.log(new_item);
    dispatch(addBucketFB(new_item));
  }
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
     
    };
    // ref는 이렇게 선언합니다!
    this.text = React.createRef();
  }

  componentDidMount() {
    this.props.load();
    // const bucket = firestore.collection('bucket');

    // bucket.doc('bucket_item').set({text:'수영배우기', completed:false});

    //특정 도큐먼트만 가져올 때
    // bucket.doc('bucket_item2').get().then((doc) => {
    //   //doc이 존재하는지 알아보는 방법
    //   if(doc.exists) {
    //     console.log(doc)
    //     console.log(doc.data());
    //     console.log(doc.id)
    //   }
    //   console.log(doc.exists)
    // });

    //다 가져올 때
    // //id를 모를 때 반복문으로 다 찾는 방법
    // bucket.get().then(docs => {
    //   let bucket_data = [];
    //   docs.forEach((doc) => {
    //     if(doc.exists) {
    //       bucket_data =[...bucket_data, {id: doc.id, ...doc.data()}];
    //     }
    //   });
    //   console.log(bucket_data)
    // });

    // bucket.add({text:'캘리그라피 배우기', completed: false}).then((docRef)=> {
    //   console.log(docRef);
    //   console.log(docRef.id);
    // })

  //   bucket.doc('bucket_item1').update({text: '배드민턴 배우기'});

    // bucket.doc('bucket_item2').delete().then(docRef => {
    //   console.log('지웠어요!');
    // })
 }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          {/* firestore에서 데이터를 가져온 후에만 페이지를 보여줄거예요!  */}
          {!this.props.is_loaded ? (
            <Spinner />
          ) : (
            <React.Fragment>
              <Progress />
              <Line />
              <Switch>
                <Route path="/" exact component={BucketList} />
                <Route path="/detail/:index" component={Detail} />
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          )}
        </Container>
        {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
        <button onClick={()=>{
          window.scrollTo({top:0, left:0, behavior:'smooth'});
          // (x,y좌표)
        }}>위로가기</button>
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & input {
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid #888;
    width: 70%;
    &:focus {
      outline: 1px solid purple;
    }
  }

  & button {
    width: 25%;
    color: #fff;
    border: 1px solid #a673ff;
    background-color: #a673ff;
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;
// withRouter 적용
// connect로 묶어줬습니다!
export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));