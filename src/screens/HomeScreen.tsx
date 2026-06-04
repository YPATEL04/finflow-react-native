import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import Container from '../components/Container';
import Header from '../components/Header';
import { COLORS } from '../assets/colors';
import TransactionItem from '../components/TransactionItem';
import ScreenContent from '../components/ScreenContent';
import BudgetProgress from '../components/BudgetProgress';

const HomeScreen = () => {
  const [hideBalance, setHideBalance] = useState(false);
  const transactions = [
    {
      id: '1',
      title: 'Salary',
      category: 'Income',
      amount: 50000,
      type: 'income',
      date: 'Today',
    },
    {
      id: '2',
      title: 'Swiggy',
      category: 'Food',
      amount: 350,
      type: 'expense',
      date: 'Today',
    },
    {
      id: '3',
      title: 'Uber',
      category: 'Transport',
      amount: 220,
      type: 'expense',
      date: 'Yesterday',
    },
    {
      id: '4',
      title: 'Netflix',
      category: 'Subscription',
      amount: 649,
      type: 'expense',
      date: 'Yesterday',
    },
  ];

  return (
    <Container>
      <Header
        title="Dashboard"
        rightComponent={
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="notifications-outline"
              size={24}
              color={COLORS.textColor}
            />
          </TouchableOpacity>
        }
      />
      <ScreenContent>
        <View>
          {/* Balance Card */}
          <LinearGradient
            colors={[COLORS.gradient1, COLORS.gradient2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.balanceCard}
          >
            <View style={styles.balanceHeader}>
              <Text style={styles.balanceLabel}>Total Balance</Text>
              <TouchableOpacity onPress={() => setHideBalance(!hideBalance)}>
                <MaterialCommunityIcons
                  name={hideBalance ? 'eye-off-outline' : 'eye-outline'}
                  size={22}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.balanceAmount}>
              {hideBalance ? '₹ ••••••' : '₹ 1,25,000'}
            </Text>
          </LinearGradient>

          {/* Income Expense Section */}
          <View style={styles.statsContainer}>
            <View style={styles.incomeCard}>
              <View style={styles.iconWrapper}>
                <MaterialCommunityIcons
                  name="arrow-down-circle"
                  size={28}
                  color={COLORS.positive}
                />
              </View>
              <Text style={styles.cardLabel}>Income</Text>
              <Text style={styles.cardAmount}>₹ 50,000</Text>
            </View>

            <View style={styles.expenseCard}>
              <View style={styles.iconWrapper}>
                <MaterialCommunityIcons
                  name="arrow-up-circle"
                  size={28}
                  color={COLORS.nagative}
                />
              </View>
              <Text style={styles.cardLabel}>Expense</Text>
              <Text style={styles.cardAmount}>₹ 15,000</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionContainer}>
          {transactions.map(item => (
            <TransactionItem
              key={item.id}
              title={item.title}
              category={item.category}
              amount={item.amount}
              type={item.type as 'income' | 'expense'}
              date={item.date}
            />
          ))}
        </View>

        <BudgetProgress spent={15000} budget={25000} />
      </ScreenContent>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerStyle: {
    // padding: 20,
  },
  balanceCard: {
    borderRadius: 24,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 24,
  },
  balanceLabel: {
    color: COLORS.white,
    fontSize: 20,
  },
  balanceAmount: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: '700',
    margin: 24,
  },

  balanceSubText: {
    color: COLORS.white,
    opacity: 0.7,
    marginTop: 8,
    fontSize: 13,
  },

  statsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 12,
  },

  incomeCard: {
    flex: 1,
    borderWidth: 2,
    borderColor: COLORS.mistBorder,
    borderRadius: 20,
    padding: 16,
  },

  expenseCard: {
    flex: 1,
    borderWidth: 2,
    borderColor: COLORS.mistBorder,
    borderRadius: 20,
    padding: 16,
  },

  iconWrapper: {
    marginBottom: 12,
  },

  cardLabel: {
    fontSize: 14,
    color: COLORS.paleSky,
  },

  cardAmount: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textColor,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textColor,
  },

  viewAll: {
    color: '#57435C',
    fontWeight: '600',
  },

  transactionContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
});
