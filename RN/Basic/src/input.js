import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


const Input = (props) => {

  const [myText, setMyText] = useState()

  const onChgInput = (e) => {
    setMyText(e)
  }
  
  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop:20
  }
})

export default Input;