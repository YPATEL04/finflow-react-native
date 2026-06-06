import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../assets/colors';

const actions = [
  {
    id: '1',
    title: 'Freeze',
    icon: 'snowflake',
  },
  {
    id: '2',
    title: 'Details',
    icon: 'eye-outline',
  },
  {
    id: '3',
    title: 'Limits',
    icon: 'credit-card-outline',
  },
  {
    id: '4',
    title: 'Settings',
    icon: 'cog-outline',
  },
];

const CardQuickActions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsContainer}>
        {actions.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={styles.actionButton}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={item.icon}
                size={24}
                color={COLORS.textColor}
              />
            </View>

            <Text style={styles.actionText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CardQuickActions;

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textColor,
    marginBottom: 16,
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionButton: {
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.platinum,
  },

  actionText: {
    marginTop: 8,
    fontSize: 13,
    color: COLORS.textColor,
    fontWeight: '500',
  },
});
