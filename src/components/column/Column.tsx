import React, {PropsWithChildren} from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import Styles from './Styles';

type ColProps = PropsWithChildren<{
  children: React.ReactNode;
  style?: StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
}>;
export const Column: React.FC<ColProps> = ({children, style, ...props}) => {
  return (
    <View style={[Styles.container, style]} {...props}>
      {children}
    </View>
  );
};
