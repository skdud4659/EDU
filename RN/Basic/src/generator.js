import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const Generator = (props) => {
  return (
    <View style={styles.generator}>
      <Button
        // 버튼에 새겨질 내용 
        title="add num"
        onPress={props.add}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  generator: {
    backgroundColor:'purple',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  }
})

export default Generator;