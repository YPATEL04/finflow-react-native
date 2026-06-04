import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../assets/colors';

interface BudgetProgressProps {
  spent: number;
  budget: number;
}

const BudgetProgress = ({ spent, budget }: BudgetProgressProps) => {
  const progress = Math.min(spent / budget, 1);

  const remaining = budget - spent;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Budget</Text>

      <Text style={styles.subtitle}>
        ₹{spent.toLocaleString()} spent of ₹{budget.toLocaleString()}
      </Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.percent}>{Math.round(progress * 100)}% Used</Text>

        <Text style={styles.remaining}>₹{remaining.toLocaleString()} Left</Text>
      </View>
    </View>
  );
};

export default BudgetProgress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginTop: 24,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textColor,
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: COLORS.textColor,
  },

  progressBackground: {
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.mercury,
    marginTop: 18,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: COLORS.positive,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  percent: {
    fontWeight: '600',
    color: COLORS.textColor,
  },

  remaining: {
    fontWeight: '600',
    color: 'green',
  },
});
