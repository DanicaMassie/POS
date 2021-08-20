import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconEye, ILLogin} from '../../assets';
import {Button, CheckBox, Gap, Link, TextInput} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      <Image source={ILLogin} style={styles.illustration} />
      <TextInput label="Email" />
      <Gap height={23} />
      <TextInput label="Password" secureTextEntry type="password" />
      <View style={styles.forgotPassword}>
        <CheckBox label="Ingat saya" />
        <Link text="Lupa Password?" />
        {/* <Button type='icon-only' icon='icon-eye' /> */}
        {/* <IconEye /> */}
      </View>
      <View style={styles.action}>
        <Button label="Sign In" />
        <Gap height={10} />
        <Text>Or</Text>
        <Gap height={10} />
        <Button label="Sign Up" color="#959595" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    marginHorizontal: 20,
    marginTop: 45,
  },
  illustration: {
    alignSelf: 'center',
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  action: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
