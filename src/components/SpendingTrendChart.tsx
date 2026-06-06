import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

import { COLORS } from '../assets/colors';

const SpendingTrendChart = (data:[]) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Trend</Text>

      <Text style={styles.subtitle}>Last 7 days expenses</Text>

      <LineChart
        data={data}
        areaChart
        curved
        hideDataPoints={false}
        thickness={3}
        color={COLORS.textColor}
        startFillColor={COLORS.textColor}
        endFillColor={COLORS.textColor}
        startOpacity={0.25}
        endOpacity={0.02}
        yAxisThickness={0}
        xAxisThickness={0}
        hideRules
        noOfSections={4}
        maxValue={4000}
        spacing={45}
        initialSpacing={10}
        textColor1={COLORS.textColor}
        dataPointsColor={COLORS.textColor}
        dataPointsRadius={5}
      />
    </View>
  );
};

export default SpendingTrendChart;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textColor,
  },

  subtitle: {
    marginTop: 4,
    marginBottom: 20,
    fontSize: 13,
    color: COLORS.textColor,
  },
});
