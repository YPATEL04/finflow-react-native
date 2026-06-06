import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../assets/colors';

export type PeriodType =
  | 'Today'
  | 'Week'
  | 'Month'
  | 'Year';

interface PeriodFilterProps {
  selectedPeriod: PeriodType;
  onSelectPeriod: (period: PeriodType) => void;
}

const periods: PeriodType[] = [
  'Today',
  'Week',
  'Month',
  'Year',
];

const PeriodFilter = ({
  selectedPeriod,
  onSelectPeriod,
}: PeriodFilterProps) => {
  return (
    <View style={styles.container}>
      {periods.map(period => {
        const isSelected =
          selectedPeriod === period;

        return (
          <TouchableOpacity
            key={period}
            activeOpacity={0.8}
            style={[
              styles.tab,
              isSelected && styles.activeTab,
            ]}
            onPress={() =>
              onSelectPeriod(period)
            }>
            <Text
              style={[
                styles.tabText,
                isSelected &&
                  styles.activeTabText,
              ]}>
              {period}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PeriodFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.catskillWhite,
    borderRadius: 14,
    padding: 4,
    marginTop: 16,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: COLORS.white,
  },

  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textColor,
  },

  activeTabText: {
    color: COLORS.textColor,
    fontWeight: '700',
  },
});