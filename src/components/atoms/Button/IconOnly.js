import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
        <IconNotification
          onPress={() => {
            alert('notification');
          }}
        />
      );
    } else if (icon === 'icon-dashboard') {
      return (
        <IconDashboard
          onPress={() => {
            alert('dashboard');
          }}
        />
      );
    } else if (icon === 'icon-analytics') {
      return (
        <IconAnalytics
          onPress={() => {
            alert('analytics');
          }}
        />
      );
    } else if (icon === 'icon-customer') {
      return (
        <IconCustomer
          onPress={() => {
            alert('customer');
          }}
        />
      );
    } else if (icon === 'icon-product') {
      return (
        <IconProduct
          onPress={() => {
            alert('product');
          }}
        />
      );
    } else if (icon === 'icon-coupon') {
      return (
        <IconCoupon
          onPress={() => {
            alert('coupon');
          }}
        />
      );
    } else if (icon === 'icon-employee') {
      return (
        <IconEmployee
          onPress={() => {
            alert('employee');
          }}
        />
      );
    } else if (icon === 'icon-setting') {
      return (
        <IconSettings
          onPress={() => {
            alert('setting');
          }}
        />
      );
    } else if (icon === 'icon-clear') {
      return (
        <IconClear
          onPress={() => {
            alert('clear');
          }}
        />
      );
    } else if (icon === 'icon-arrow') {
      return (
        <IconArrow
          onPress={() => {
            alert('arrow');
          }}
        />
      );
    } else if (icon === 'icon-min') {
      return (
        <IconMin
          onPress={() => {
            alert('min');
          }}
        />
      );
    } else if (icon === 'icon-plus') {
      return (
        <IconPlus
          onPress={() => {
            alert('plus');
          }}
        />
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
