import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { colors, radius, spacing, shadow } from '../theme/tokens';

export default function BentoCard({
  children,
  onPress,
  dark = false,
  style,
  noPadding = false,
}) {
  const Wrapper = onPress ? Pressable : View;

  return (
    <Wrapper
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        dark && styles.cardDark,
        noPadding && { padding: 0 },
        pressed && onPress && { transform: [{ scale: 0.98 }] },
        style,
      ]}
    >
      {children}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radius.xl,
    padding: spacing.cardPadding,
    ...shadow.card,
  },
  cardDark: {
    backgroundColor: colors.primary,
  },
});