import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors, radius, spacing, shadow, typography } from '../theme/tokens';

export default function BottomNav({ tabs, activeKey, onChange }) {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab) => {
        const active = tab.key === activeKey;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[styles.item, active && styles.itemActive]}
          >
            <MaterialCommunityIcons
              name={tab.icon}
              size={22}
              color={active ? colors.onSecondaryContainer : colors.onSurfaceVariant}
            />
            <Text
              style={[
                typography.labelSm,
                { color: active ? colors.onSecondaryContainer : colors.onSurfaceVariant, marginTop: 2 },
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.surfaceContainerLowest,
    paddingVertical: 10,
    paddingHorizontal: spacing.stackSm,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    ...shadow.card,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  itemActive: {
    backgroundColor: colors.secondaryContainer,
  },
});