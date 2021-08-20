import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Link = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    textDecorationLine: 'underline',
    color: '#263F44',
  },
});
