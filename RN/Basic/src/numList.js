import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const NumList = (props) => {
  console.log(props)
  return (

    // props로 받은 num이 배열이기 때문에 각각 나타내기 위해서는 map을 사용
    props.num.map((i, idx) => {
      return (
        <TouchableOpacity
          key={idx}
          style={styles.numList}
          onPress={() => props.delete(idx)}>
          <Text>{i}</Text>  
        </TouchableOpacity>
      )
    })
  );
}

const styles = StyleSheet.create({
  numList: {
    backgroundColor:'#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5
  }
})

export default NumList;