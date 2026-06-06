import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../assets/colors';

const transactions = [
  {
    id: '1',
    title: 'Netflix Premium',
    category: 'Subscription',
    amount: 499,
    icon: 'television-play',
  },
  {
    id: '2',
    title: 'Amazon Shopping',
    category: 'Shopping',
    amount: 1299,
    icon: 'shopping-outline',
  },
  {
    id: '3',
    title: 'Uber Ride',
    category: 'Transport',
    amount: 380,
    icon: 'car-outline',
  },
  {
    id: '4',
    title: 'Swiggy',
    category: 'Food',
    amount: 450,
    icon: 'food-outline',
  },
];

const CardTransactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Transactions</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {transactions.map(item => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          style={styles.transactionItem}
        >
          <View style={styles.leftContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={item.icon}
                size={22}
                color={COLORS.textColor}
              />
            </View>

            <View>
              <Text style={styles.name}>{item.title}</Text>

              <Text style={styles.category}>{item.category}</Text>
            </View>
          </View>

          <Text style={styles.amount}>- ₹{item.amount.toLocaleString()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CardTransactions;

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    backgroundColor: COLORS.platinum,
    borderRadius: 20,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textColor,
  },

  viewAll: {
    color: COLORS.textColor,
    fontWeight: '600',
  },

  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  name: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textColor,
  },

  category: {
    marginTop: 3,
    fontSize: 12,
    color: COLORS.textColor,
  },

  amount: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.deepBlush,
  },
});
