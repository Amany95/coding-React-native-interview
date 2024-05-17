import React, {PropsWithChildren} from 'react';
import {TextStyle, View} from 'react-native';
import Styles from './Styles';

type RowProps = PropsWithChildren<{
  children: React.ReactNode;
  style?: TextStyle;
}>;
export const Row: React.FC<RowProps> = ({children, style, ...props}) => {
  return (
    <View style={[Styles.container, style]} {...props}>
      {children}
    </View>
  );
};
