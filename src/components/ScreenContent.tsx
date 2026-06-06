import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

interface ScreenContentProps {
  children: ReactNode;
}

const ScreenContent = ({ children }: ScreenContentProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {children}
    </ScrollView>
  );
};

export default ScreenContent;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingBottom: 30,
    flexGrow: 1,
  },
});
