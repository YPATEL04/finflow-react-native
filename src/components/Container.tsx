import React, { PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../assets/colors';

interface ContainerProps extends PropsWithChildren {
  backgroundColor?: string;
  noSafeArea?: boolean;
}

const Container = ({
  children,
  backgroundColor = COLORS.background,
  noSafeArea = false,
}: ContainerProps) => {
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor }]}
      edges={noSafeArea ? [] : ['top', 'left', 'right']}
    >
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={backgroundColor}
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.flex}>{children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});
