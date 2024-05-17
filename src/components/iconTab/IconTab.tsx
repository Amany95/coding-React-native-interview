import React, {PropsWithChildren} from 'react';
import {TextStyle, View} from 'react-native';
import Styles from './Styles';
import {Icon} from '@rneui/themed';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles/Colors';

type IconTabProps = PropsWithChildren<{
  iconName: string;
  iconType: string;

  style?: TextStyle;
}>;
export const IconTab: React.FC<IconTabProps> = ({
  iconName,
  iconType,
  style,
}) => {
  return (
    <View>
      <Icon
        name={iconName}
        type={iconType}
        color={Colors.SecondaryColor}
        size={responsiveFontSize(3)}
        containerStyle={[Styles.containerStyle, style]}
      />
    </View>
  );
};
