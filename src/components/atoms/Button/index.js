import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconOnly from './IconOnly';

const Button = ({label, onPress, color = '#39A2DB', type, icon}) => {
  // console.log('hehehe : ', icon);
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container(color)} onPress={() => {}}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    width: 300,
    height: 42,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  label: {
    fontSize: 16,
    color: 'white',
  },
});
