import React, {PropsWithChildren} from 'react';
import {GestureResponderEvent, TextStyle, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles/Colors';
import Styles from './Styles';

type IconTabProps = PropsWithChildren<{
  iconName: string;
  iconType: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: TextStyle;
  color?: string;
  size?: string;
}>;
export const IconTab: React.FC<IconTabProps> = ({
  iconName,
  iconType,
  style,
  onPress,
  color = Colors.SecondaryColor,
  size = responsiveFontSize(3),
}) => {
  return (
    <View>
      <Icon
        name={iconName}
        type={iconType}
        color={color}
        size={size}
        containerStyle={[Styles.containerStyle, style]}
        onPress={onPress}
      />
    </View>
  );
};
