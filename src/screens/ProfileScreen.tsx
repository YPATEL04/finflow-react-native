import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Container from '../components/Container';
import Header from '../components/Header';
import { COLORS } from '../assets/colors';
import ScreenContent from '../components/ScreenContent';

const profileSections = [
  {
    title: 'Account',
    data: [
      {
        title: 'Personal Information',
        icon: 'account-outline',
      },
      {
        title: 'Bank Accounts',
        icon: 'bank-outline',
      },
      {
        title: 'Cards & Limits',
        icon: 'credit-card-outline',
      },
      {
        title: 'Security',
        icon: 'shield-check-outline',
      },
    ],
  },
  {
    title: 'Preferences',
    data: [
      {
        title: 'Notifications',
        icon: 'bell-outline',
      },
      {
        title: 'Appearance',
        icon: 'theme-light-dark',
      },
      {
        title: 'Currency',
        icon: 'currency-inr',
      },
      {
        title: 'Language',
        icon: 'translate',
      },
    ],
  },
  {
    title: 'Support',
    data: [
      {
        title: 'Help Center',
        icon: 'help-circle-outline',
      },
      {
        title: 'Contact Support',
        icon: 'headset',
      },
      {
        title: 'Privacy Policy',
        icon: 'shield-lock-outline',
      },
      {
        title: 'Terms & Conditions',
        icon: 'file-document-outline',
      },
    ],
  },
];

const ProfileScreen = () => {
  const renderMenuItem = (item: { title: string; icon: string }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.menuItem}
        key={item.title}
      >
        <View style={styles.menuLeft}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={item.icon}
              size={22}
              color={COLORS.gradient1}
            />
          </View>

          <Text style={styles.menuTitle}>{item.title}</Text>
        </View>

        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color={COLORS.santaGrey}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <Header title="Profile" />

      <ScreenContent>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>Y</Text>
          </View>
          <Text style={styles.name}>Yash Patel</Text>
          <Text style={styles.email}>yash@gmail.com</Text>
          <Text style={styles.memberSince}>Member Since Jan 2026</Text>
        </View>

        {/* Sections */}
        {profileSections.map((section, index) => (
          <View key={index} style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.data.map(renderMenuItem)}
          </View>
        ))}

        {/* Logout */}
        <TouchableOpacity activeOpacity={0.8} style={styles.logoutButton}>
          <MaterialCommunityIcons
            name="logout"
            size={22}
            color={COLORS.deepBlush}
          />

          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScreenContent>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileCard: {
    alignItems: 'center',
    borderRadius: 24,
    padding: 24,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.gradient1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: '700',
  },

  name: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textColor,
  },

  email: {
    marginTop: 6,
    color: COLORS.santaGrey,
  },

  memberSince: {
    marginTop: 8,
    color: COLORS.gradient1,
    fontWeight: '600',
  },

  sectionCard: {
    borderRadius: 20,
    padding: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textColor,
    marginBottom: 12,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.platinum,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  menuTitle: {
    fontSize: 15,
    color: COLORS.textColor,
    fontWeight: '500',
  },

  logoutButton: {
    marginTop: 24,
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: COLORS.deepBlush,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});
