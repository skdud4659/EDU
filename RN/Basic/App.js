/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';

import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';
import Input from './src/input';

const App = () => {

  // props로 넘기기
  const [appName, setAppName] = useState('my first app')

  // 배열을 props로 넘기기
  const [random, setRandom] = useState([36, 999])

  // 함수를 props로 넘기기
  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100+1);
    setRandom([...random, randomNum])
  }

  // 터치 시 항목 삭제 
  const unNumDelete = (position) => {
    const newArr = random.filter((n, idx) => {
      return position != idx
    })
    setRandom(newArr)
  }

  // input 상태 변화
  const [myText, setMyText] = useState()
  const [alphabet, setAlphabet] = useState([
    'a', 'b', 'c', 'd'
  ])


  // input onChange
  const onChgInput = (e) => {
    setMyText(e)
  }

  const onAddTextInput = () => {

    // 다음 텍스트를 입력하기 위해 공란으로 만들기
    setMyText('')
    setAlphabet([...alphabet, myText])
  }

  return (
    // <view> : 다른 컴포넌트를 감싸는 역할 = div > div처럼 div 안에 div가 있어도 상관없다.
    // default로 왼쪽 상단 > 스타일을 주기 위해서는 별도로 명시해야함
    // 스타일 주는 법 : 인라인, 별도 스타일 지정

    // case1. 인라인
    // <View style={{
    //   backgroundColor: 'green',
    //   height: '100%',
    //   paddingTop: 50
    // }}>

    // case2. 별도 지정 >> StyleSheet
    <View style={styles.mainView}>
      {/* <Header name={appName}/> */}

      {/* <View style={styles.subView}>
        <Text style={styles.mainText}>hello world</Text>
      </View> */}

      {/* <Generator add={onAddRandomNum}/> */}

      {/* = overflow */}
      {/* <ScrollView
        style={{width: '100%'}}

        // 스크롤뷰를 움직였다가 터치를 떼었을 때 자동으로 움직이는 시점에 트리거
        // onMomentumScrollBegin={() => alert('begin!')}

        // 스크롤뷰를 움직였다가 터치를 떼었을 때 자동으로 움직였다 멈추는 시점에 트리거
        // onMomentumScrollEnd={() => alert('end!')}

        // 스크롤의 움직임이 발생했을 때 트리거
        // onScroll={() => alert('scroll!')}

        // 사이즈가 바뀔 때 트리거링, 너비와 높이를 인자로 가짐
        // onContentSizeChange={(width, height) => alert(height)}

        // default : true > 스크롤 시 통통튀게
        bounces={false}
        >
        <NumList num={random} delete={unNumDelete}/>
      </ScrollView> */}

      <TextInput 
        value={myText}
        style={styles.input}
        // 타이핑 이벤트
        onChangeText={onChgInput}

        // multiline={true} > 개행
        // maxLength={10} > 글자 수에 제한
        // autoCapitalize={'none'} > 문장 첫 문자 대문자 자동 수정 none
        // editable={false} > input disable
        />
      <Button
        title="add text input"
        onPress={onAddTextInput}/>

      <ScrollView>
        {alphabet.map((i, idx) => {
          return <Text style={styles.mainText} key={idx}>{i}</Text>
        })}
      </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {

    // flex : 화면을 채우는 컴포넌트들간에 차지하는 영역의 비율
    // view가 2개 인데 하나는 1이고 하나는 3이라고 한다면 하나는 1/4 만큼, 하나는 3/4만큼 차지한다.
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },

  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },

  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop:20
  }
})

export default App;
