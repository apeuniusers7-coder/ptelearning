import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radius } from '../theme/tokens';

export default function ProgressBar({ percent = 0, color = colors.secondaryContainer, trackColor = colors.surfaceContainer, height = 6 }) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <View style={[styles.track, { backgroundColor: trackColor, height, borderRadius: height / 2 }]}>
      <View
        style={[
          styles.fill,
          { width: `${clamped}%`, backgroundColor: color, height, borderRadius: height / 2 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    borderRadius: radius.full,
  },
});