import React, {PropsWithChildren} from 'react';
import {GestureResponderEvent, TextStyle, TouchableOpacity} from 'react-native';

import Styles from './Styles';
import {TextIcon} from '../textIcon/TextIcon';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = PropsWithChildren<{
  text: string;
  btnStyle?: TextStyle;
  textStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  iconProps?: any;
  colors?: string[];
}>;
export const Button: React.FC<ButtonProps> = ({
  text,
  btnStyle,
  textStyle,
  iconProps,
  onPress,
  colors,
}) => {
  return (
    <TouchableOpacity style={Styles.btnStyle} onPress={onPress}>
      <LinearGradient
        colors={colors ? colors : ['#1F2B41', '#111720']}
        style={Styles.linearContainer}>
        <TextIcon
          text={text}
          style={[Styles.textStyle]}
          leftIcon={true}
          iconProps={iconProps}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};
