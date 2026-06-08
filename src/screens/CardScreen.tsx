import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../components/Container';
import Header from '../components/Header';
import ScreenContent from '../components/ScreenContent';
import CardCarousel from '../components/CardCarousel';
import CardQuickActions from '../components/CardQuickActions';
import CardTransactions from '../components/CardTransactions';
import { COLORS } from '../assets/colors';

const CardScreen = () => {
  const cards = [
    {
      id: '1',
      cardType: 'Physical Card',
      cardName: 'FinFlow Black',
      cardNumber: '4582',
      balance: 42850,
      gradient: [COLORS.gradient1, '#130C2A'],
    },
    {
      id: '2',
      cardType: 'Virtual Card',
      cardName: 'FinFlow Virtual',
      cardNumber: '8721',
      balance: 8450,
      gradient: ['#2A1B3D', COLORS.gradient1],
    },
    {
      id: '3',
      cardType: 'Business Card',
      cardName: 'FinFlow Business',
      cardNumber: '1248',
      balance: 126300,
      gradient: ['#3D2A56', '#130C2A'],
    },
  ];
  return (
    <Container>
      <Header
        title="My Cards"
        rightComponent={
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="plus-circle"
              size={30}
              color={COLORS.textColor}
            />
          </TouchableOpacity>
        }
      />

      <ScreenContent>
        <CardCarousel cards={cards} />
        <CardQuickActions />
        <CardTransactions />
      </ScreenContent>
    </Container>
  );
};

export default CardScreen;
