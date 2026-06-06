import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../assets/colors';

interface CategoryItem {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

const categories: CategoryItem[] = [
  {
    id: '1',
    name: 'Food',
    amount: 4500,
    percentage: 35,
    color: COLORS.seafoamBlue,
  },
  {
    id: '2',
    name: 'Shopping',
    amount: 3200,
    percentage: 25,
    color: COLORS.crocusPurple,
  },
  {
    id: '3',
    name: 'Travel',
    amount: 2800,
    percentage: 20,
    color: COLORS.tumbleweed,
  },
  {
    id: '4',
    name: 'Bills',
    amount: 1500,
    percentage: 12,
    color: COLORS.deepBlush,
  },
  {
    id: '5',
    name: 'Other',
    amount: 1000,
    percentage: 8,
    color: COLORS.cornflowerBlue,
  },
];

const ExpenseCategories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Categories</Text>

      {categories.map(item => (
        <View key={item.id} style={styles.categoryContainer}>
          <View style={styles.headerRow}>
            <View style={styles.leftSection}>
              <View
                style={[
                  styles.colorDot,
                  {
                    backgroundColor: item.color,
                  },
                ]}
              />

              <Text style={styles.categoryName}>{item.name}</Text>
            </View>

            <Text style={styles.amount}>₹{item.amount.toLocaleString()}</Text>
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
  );
};

export default ExpenseCategories;

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
    marginBottom: 20,
  },

  categoryContainer: {
    marginBottom: 18,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  colorDot: {
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

  amount: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textColor,
  },

  progressBackground: {
    height: 8,
    backgroundColor: COLORS.mercury,
    borderRadius: 8,
    marginTop: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 8,
  },

  percentage: {
    marginTop: 6,
    fontSize: 12,
    color: COLORS.textColor,
    alignSelf: 'flex-end',
  },
});
