import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  IconEye,
  IconNotification,
  IconDashboard,
  IconAnalytics,
  IconCustomer,
  IconProduct,
  IconCoupon,
  IconEmployee,
  IconSettings,
  IconClear,
  IconArrow,
  IconMin,
  IconPlus,
} from '../../../assets/icons';

const IconOnly = ({icon, onPress}) => {
  console.log('icons : ', icon);
  const Icon = () => {
    if (icon === 'icon-eye') {
      return <IconEye />;
    } else if (icon === 'icon-notification') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconNotification />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-dashboard') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconDashboard />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-analytics') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconAnalytics />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-customer') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconCustomer />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-product') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconProduct />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-coupon') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconCoupon />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-employee') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconEmployee />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-setting') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconSettings />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-clear') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconClear />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-arrow') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconArrow />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-min') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconMin />
        </TouchableOpacity>
      );
    } else if (icon === 'icon-plus') {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconPlus />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity>
          <Text>No Icon</Text>
        </TouchableOpacity>
      );
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
