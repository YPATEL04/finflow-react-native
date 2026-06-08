import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { COLORS } from '../assets/colors';

const {width} = Dimensions.get('window');

const CARD_WIDTH = width - 60;

interface CardProps {
  item: {
    id: string;
    cardType: string;
    cardName: string;
    cardNumber: string;
    balance: number;
  };
}

const FinanceCard = ({item}: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardType}>
        {item.cardType}
      </Text>

      <Text style={styles.cardName}>
        {item.cardName}
      </Text>

      <Text style={styles.cardNumber}>
        •••• •••• •••• {item.cardNumber}
      </Text>

      <View style={styles.bottomContainer}>
        <Text style={styles.balanceLabel}>
          Available Balance
        </Text>

        <Text style={styles.balance}>
          ₹{item.balance.toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

export default FinanceCard;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 210,
    borderRadius: 24,
    padding: 24,
    backgroundColor: COLORS.gradient1,
    marginHorizontal: 8,
    justifyContent: 'space-between',
  },

  cardType: {
    color: '#D4D4D8',
    fontSize: 14,
  },

  cardName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
  },

  cardNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 2,
  },

  bottomContainer: {},

  balanceLabel: {
    color: '#D4D4D8',
    fontSize: 13,
  },

  balance: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 4,
  },
});