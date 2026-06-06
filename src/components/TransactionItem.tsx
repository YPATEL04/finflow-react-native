import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../assets/colors';

interface Props {
  title: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
}

const TransactionItem = ({ title, category, amount, type, date }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={type === 'income' ? 'arrow-down' : 'arrow-up'}
            size={20}
            color={type === 'income' ? COLORS.positive : COLORS.nagative}
          />
        </View>

        <View>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.category}>
            {category} • {date}
          </Text>
        </View>
      </View>

      <Text
        style={[
          styles.amount,
          {
            color: type === 'income' ? COLORS.seafoamBlue : COLORS.deepBlush,
          },
        ]}
      >
        {type === 'income' ? '+' : '-'}₹{amount.toLocaleString()}
      </Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.catskillWhite,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textColor,
  },

  category: {
    fontSize: 13,
    color: COLORS.paleSky,
    marginTop: 2,
  },

  amount: {
    fontSize: 15,
    fontWeight: '700',
  },
});
