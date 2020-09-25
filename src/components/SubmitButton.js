import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Button, Text, View } from 'native-base';
import _ from 'lodash';

export default function SubmitButton(props) {
  const { children, loading } = props;
  _.unset(props, ['children', 'loading']);
  if (loading)
    return (
      <Button {...props}><ActivityIndicator color="white" size = "small" /></Button>
    );
  return <Button {...props}>{children}</Button>;
}
