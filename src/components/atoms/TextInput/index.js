import React, {useState} from 'react';
import {StyleSheet, Text, TextInput as Input, View} from 'react-native';
import {IconEye, IconSearch} from '../../../assets';
import Button from '../Button';

const TextInput = ({label, type, ...rest}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View>
      <View style={styles.text}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.TextInputContainer}>
          {type === 'password' ? (
            <Input
              style={styles.textInput}
              {...rest}
              secureTextEntry={showPassword}
            />
          ) : (
            <Input style={styles.textInput} {...rest} />
          )}
          {type === 'password' && (
            <Button
              type="icon-only"
              icon="icon-eye"
              onPress={() => setShowPassword(!showPassword)}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    marginLeft: 280,
  },
  textInput: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
  },
  TextInputContainer: {
    width: 700,
    flexDirection: 'row',
    borderColor: '#39A2DB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
});
