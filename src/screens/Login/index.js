import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconEye, ILLogin} from '../../assets';
import {Button, CheckBox, Gap, Link, TextInput} from '../../components';

const Login = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Image source={ILLogin} style={styles.illustration} />
      <View style={styles.text}>
        <TextInput style={styles.email} label="Email" />
        <Gap height={23} />
        <TextInput label="Password" type="password" />
      </View>
      <View style={styles.forgotPassword}>
        <CheckBox style={styles.Ingat} label="Ingat saya" />
        <Link text="Lupa Password?" />
        {/* <Button type='icon-only' icon='icon-eye' /> */}
        {/* <IconEye /> */}
      </View>
      <View style={styles.containerButton}>
        <Button
          label="Sign In"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <Gap width={45} />
        <Text>Or</Text>
        <Gap width={45} />
        <Button label="Sign Up" color="#cccccc" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    marginHorizontal: 20,
    marginTop: 200,
  },
  illustration: {
    alignSelf: 'center',
    marginTop: -150,
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginRight: 268,
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {},
  email: {
    flex: 1,
  },
});
