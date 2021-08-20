import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IconEye} from '../../../assets/icons';

const IconOnly = ({icon, onPress}) => {
  console.log('icons : ', icon);
  const Icon = () => {
    if (icon === 'icon-eye') {
      return <IconEye />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
