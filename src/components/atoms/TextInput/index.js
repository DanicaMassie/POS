import React, {useState} from 'react';
import {StyleSheet, Text, TextInput as Input, View} from 'react-native';
import {IconEye, IconSearch} from '../../../assets';
import Button from '../Button';

const TextInput = ({label, type, ...rest}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.TextInputContainer}>
          <Input
            style={styles.textInput}
            {...rest}
            secureTextEntry={showPassword}
          />
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
    justifyContent: 'center',
  },
});
