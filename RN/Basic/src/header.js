/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

  import React from 'react';
  import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

  // => {} : 리턴하는 jsx 컴포넌트가 없을 경우 / () : : 리턴하는 jsx 컴포넌트가 있는 경우
  // jsx : 자바스크립트 확장 문법 > 태그로 감싸져서 변수에 할당되는 표현식

  const Header = (props) => {

    return (

      // 터치이벤트
      // TouchableWithoutFeedback(style 적용 불가해서 view에 적용)의 props를 상속받음
      
      <TouchableOpacity
        style={styles.header}
        
        // onPress : 터치, onLongPress : 길게 터치, onPressIn : 터치하면 바로 실행
        // onPressOut : 손을 놓는 순간 실행
        onPress={()=> alert('hello world')}>
        <View>
          <Text>{props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'pink',
      alignItems: 'center',
      padding: 5,
      width: '100%',
    }
  })

export default Header;
