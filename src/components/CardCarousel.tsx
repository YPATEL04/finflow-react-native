import React, {useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from 'react-native';

import FinanceCard from './FinanceCard';
import { COLORS } from '../assets/colors';

const {width} = Dimensions.get('window');

const CARD_WIDTH = width - 60;

interface Props {
  cards: any[];
}

const CardCarousel = ({cards}: Props) => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        (CARD_WIDTH + 16),
    );

    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={cards}
        horizontal
        pagingEnabled={false}
        snapToInterval={CARD_WIDTH + 16}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={
          styles.listContainer
        }
        renderItem={({item}) => (
          <FinanceCard item={item} />
        )}
        onMomentumScrollEnd={
          onMomentumScrollEnd
        }
      />

      <View style={styles.pagination}>
        {cards.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index &&
                styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CardCarousel;

const styles = StyleSheet.create({
  listContainer: {
    justifyContent:'center',
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4B5563',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 24,
    backgroundColor: COLORS.gradient1,
  },
});