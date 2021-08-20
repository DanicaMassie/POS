import React, {useState} from 'react';
import {StyleSheet, Text, TextInput as Input, View} from 'react-native';
import {IconEye} from '../../../assets';
import Button from '../Button';

const TextInput = ({label, type, ...rest}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.passwordContainer}>
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
  );
};

export default TextInput;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderColor: '#08B4B4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
