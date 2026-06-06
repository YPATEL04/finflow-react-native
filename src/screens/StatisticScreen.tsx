import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { LineChart } from 'react-native-gifted-charts';

import Container from '../components/Container';
import Header from '../components/Header';
import { COLORS } from '../assets/colors';
import ScreenContent from '../components/ScreenContent';

type PeriodType = 'Week' | 'Month' | '3M' | 'Year';

const StatisticsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('Month');

  const periods: PeriodType[] = ['Week', 'Month', '3M', 'Year'];

  const WEEK_DATA = [
    { value: 1200, label: 'Mon' },
    { value: 2850, label: 'Tue' },
    { value: 950, label: 'Wed' },
    { value: 4200, label: 'Thu' },
    { value: 3100, label: 'Fri' },
    { value: 5800, label: 'Sat' },
    { value: 2400, label: 'Sun' },
  ];

  const MONTH_DATA = [
    { value: 4200, label: 'W1' },
    { value: 6800, label: 'W2' },
    { value: 5100, label: 'W3' },
    { value: 7900, label: 'W4' },
  ];

  const THREE_MONTH_DATA = [
    { value: 26310, label: 'Apr' },
    { value: 21450, label: 'May' },
    { value: 29870, label: 'Jun' },
  ];

  const YEAR_DATA = [
    { value: 18500, label: 'Jan' },
    { value: 21200, label: 'Feb' },
    { value: 19800, label: 'Mar' },
    { value: 24100, label: 'Apr' },
    { value: 22800, label: 'May' },
    { value: 26700, label: 'Jun' },
    { value: 23500, label: 'Jul' },
    { value: 25200, label: 'Aug' },
    { value: 21900, label: 'Sep' },
    { value: 28100, label: 'Oct' },
    { value: 24800, label: 'Nov' },
    { value: 29400, label: 'Dec' },
  ];

  const categories = [
    {
      id: '1',
      name: 'Food & Dining',
      amount: 8420,
      percentage: 32,
      color: COLORS.seafoamBlue,
    },
    {
      id: '2',
      name: 'Shopping',
      amount: 6150,
      percentage: 23,
      color: COLORS.crocusPurple,
    },
    {
      id: '3',
      name: 'Transportation',
      amount: 4380,
      percentage: 17,
      color: COLORS.tumbleweed,
    },
    {
      id: '4',
      name: 'Bills & Utilities',
      amount: 3920,
      percentage: 15,
      color: COLORS.deepBlush,
    },
    {
      id: '5',
      name: 'Entertainment',
      amount: 2160,
      percentage: 8,
      color: COLORS.cornflowerBlue,
    },
    {
      id: '6',
      name: 'Healthcare',
      amount: 1280,
      percentage: 5,
      color: COLORS.mediumTurquoise,
    },
  ];

  const getChartData = () => {
    switch (selectedPeriod) {
      case 'Week':
        return WEEK_DATA;

      case 'Month':
        return MONTH_DATA;

      case '3M':
        return THREE_MONTH_DATA;

      case 'Year':
        return YEAR_DATA;

      default:
        return MONTH_DATA;
    }
  };

  return (
    <Container>
      <Header title="Statistics" />

      <ScreenContent>
        {/* Period Filter */}
        <View style={styles.filterContainer}>
          {periods.map(period => {
            const isSelected = selectedPeriod === period;

            return (
              <TouchableOpacity
                key={period}
                activeOpacity={0.8}
                style={[
                  styles.filterButton,
                  isSelected && styles.activeFilterButton,
                ]}
                onPress={() => setSelectedPeriod(period)}
              >
                <Text
                  style={[
                    styles.filterText,
                    isSelected && styles.activeFilterText,
                  ]}
                >
                  {period}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Expenses This Month</Text>
          <Text style={styles.summaryAmount}>₹26,310</Text>
          <Text style={styles.summaryChange}>
            ↑ 12.4% compared to last month
          </Text>
        </View>

        {/* Chart */}
        <View style={styles.chartCard}>
          <Text style={styles.sectionTitle}>Spending Trend</Text>

          <LineChart
            areaChart
            curved
            data={getChartData()}
            thickness={3}
            color={COLORS.positive}
            startFillColor={COLORS.textColor}
            endFillColor={COLORS.textColor}
            startOpacity={0.25}
            endOpacity={0.02}
            hideRules
            yAxisThickness={0}
            xAxisThickness={0}
            spacing={40}
            initialSpacing={10}
            dataPointsRadius={5}
            dataPointsColor={COLORS.positive}
          />
        </View>

        {/* Expense Categories */}
        <View style={styles.categoriesCard}>
          <Text style={styles.sectionTitle}>Expense Categories</Text>
          {categories.map(item => (
            <View key={item.id} style={styles.categoryItem}>
              <View style={styles.categoryHeader}>
                <View style={styles.categoryLeft}>
                  <View
                    style={[
                      styles.dot,
                      {
                        backgroundColor: item.color,
                      },
                    ]}
                  />
                  <Text style={styles.categoryName}>{item.name}</Text>
                </View>
                <Text style={styles.categoryAmount}>
                  ₹{item.amount.toLocaleString()}
                </Text>
              </View>
              <View style={styles.progressBackground}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    },
                  ]}
                />
              </View>
              <Text style={styles.percentage}>{item.percentage}%</Text>
            </View>
          ))}
        </View>

        {/* Insights */}
        <View style={styles.insightCard}>
          <Text style={styles.sectionTitle}>Insights</Text>
          <Text style={styles.insightText}>
            • Food spending increased by 18% compared to last month.
          </Text>
          <Text style={styles.insightText}>
            • Shopping is your highest expense category this month.
          </Text>
          <Text style={styles.insightText}>
            • Weekend spending accounts for 42% of total expenses.
          </Text>
        </View>
      </ScreenContent>
    </Container>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 40,
  },

  filterContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.catskillWhite,
    borderRadius: 14,
    padding: 4,
  },

  filterButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },

  activeFilterButton: {
    backgroundColor: COLORS.white,
  },

  filterText: {
    color: COLORS.nagative,
    fontWeight: '500',
  },

  activeFilterText: {
    color: COLORS.textColor,
    fontWeight: '700',
  },

  summaryCard: {
    marginTop: 20,
    backgroundColor: COLORS.textColor,
    borderRadius: 20,
    padding: 20,
  },

  summaryLabel: {
    color: COLORS.white,
    opacity: 0.8,
  },

  summaryAmount: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '700',
    marginTop: 8,
  },

  summaryChange: {
    color: COLORS.white,
    marginTop: 8,
  },

  chartCard: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
  },

  categoriesCard: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
  },

  insightCard: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textColor,
    marginBottom: 20,
  },

  categoryItem: {
    marginBottom: 18,
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },

  categoryName: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textColor,
  },

  categoryAmount: {
    fontWeight: '700',
    color: COLORS.textColor,
  },

  progressBackground: {
    height: 8,
    borderRadius: 8,
    backgroundColor: COLORS.mercury,
    marginTop: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 8,
  },

  percentage: {
    marginTop: 5,
    alignSelf: 'flex-end',
    color: COLORS.nagative,
  },

  insightText: {
    fontSize: 14,
    color: COLORS.nagative,
    lineHeight: 22,
    marginBottom: 12,
  },
});
