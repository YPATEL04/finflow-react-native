import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../assets/colors';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
  containerStyle?: ViewStyle;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  rightComponent,
  containerStyle,
  onBackPress,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
      return;
    }

    navigation.goBack();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Left Side */}
      <View style={styles.sideContainer}>
        {showBackButton ? (
          <TouchableOpacity activeOpacity={0.7} onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={24} color={COLORS.ebonyClay} />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Center */}
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>

      {/* Right Side */}
      <View style={styles.sideContainer}>{rightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'COLORS.background',
  },

  sideContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textColor,
  },
});
