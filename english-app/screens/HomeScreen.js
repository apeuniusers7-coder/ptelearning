import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BentoCard from '../components/BentoCard';
import ProgressBar from '../components/ProgressBar';
import CircularProgress from '../components/CircularProgress';
import BottomNav from '../components/BottomNav';
import { colors, typography, spacing, radius } from '../theme/tokens';

const TABS = [
  { key: 'home', label: 'خانه', icon: 'home-variant' },
  { key: 'study', label: 'مطالعه', icon: 'book-open-page-variant' },
  { key: 'lessons', label: 'درس‌ها', icon: 'bookshelf' },
  { key: 'profile', label: 'پروفایل', icon: 'account-outline' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <Text style={[typography.headlineLg, { color: colors.primary }]}>Ptelearning</Text>
          <View style={styles.topBarActions}>
            <View style={styles.streakPill}>
              <Text style={typography.labelSm}>۷ 🔥</Text>
            </View>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons name="bell-outline" size={20} color={colors.onSurface} />
            </View>
          </View>
        </View>

        <View style={{ marginBottom: spacing.stackLg }}>
          <Text style={[typography.headlineLg, { color: colors.primary, marginBottom: 4 }]}>
            صبح بخیر، علی
          </Text>
          <Text style={[typography.bodyMd, { color: colors.onSurfaceVariant }]}>
            هدف تو در PTE نمره ۷۹+ هست. این حرکت رو ادامه بده!
          </Text>
        </View>

        <View style={styles.grid}>
          <BentoCard style={styles.fullSpan}>
            <View style={styles.dailyGoalRow}>
              <View style={{ flex: 1 }}>
                <View style={styles.badge}>
                  <Text style={[typography.labelSm, { color: colors.onSecondaryContainer }]}>هدف روزانه</Text>
                </View>
                <Text style={[typography.titleMd, { color: colors.primary, marginTop: 12 }]}>
                  تقریباً رسیدی!
                </Text>
                <Text style={[typography.bodyMd, { color: colors.onSurfaceVariant, marginTop: 6 }]}>
                  ۲ جلسه تمرین دیگه رو کامل کن تا به هدف امروزت برسی و رکوردت رو حفظ کنی.
                </Text>
                <View style={{ marginTop: 20 }}>
                  <Text style={[typography.displayLg, { color: colors.primary }]}>۸۵٪</Text>
                  <View style={{ marginTop: 8 }}>
                    <ProgressBar percent={85} color={colors.primary} />
                  </View>
                </View>
              </View>
              <CircularProgress percent={70} label="۷ روز" centerIcon="🔥" />
            </View>
          </BentoCard>

          <BentoCard style={styles.halfSpan}>
            <View style={styles.cardHeaderRow}>
              <View style={[styles.iconBox, { backgroundColor: colors.surfaceContainerHigh }]}>
                <MaterialCommunityIcons name="translate" size={22} color={colors.primary} />
              </View>
              <Text style={[typography.labelSm, { color: colors.onSurfaceVariant }]}>۱۲۰/۱۵۰ کلمه</Text>
            </View>
            <Text style={[typography.titleMd, { color: colors.primary, marginTop: 16 }]}>لغات</Text>
            <View style={styles.progressRow}>
              <View style={{ flex: 1 }}>
                <ProgressBar percent={80} color={colors.primary} />
              </View>
              <Text style={[typography.labelSm, { color: colors.primary }]}>۸۰٪</Text>
            </View>
          </BentoCard>

          <BentoCard style={styles.halfSpan}>
            <View style={styles.cardHeaderRow}>
              <View style={[styles.iconBox, { backgroundColor: colors.secondaryContainer }]}>
                <MaterialCommunityIcons name="sitemap-outline" size={22} color={colors.onSecondaryContainer} />
              </View>
              <Text style={[typography.labelSm, { color: colors.onSurfaceVariant }]}>۴۵/۶۰ عبارت</Text>
            </View>
            <Text style={[typography.titleMd, { color: colors.primary, marginTop: 16 }]}>کالوکیشن</Text>
            <View style={styles.progressRow}>
              <View style={{ flex: 1 }}>
                <ProgressBar percent={75} color={colors.secondary} />
              </View>
              <Text style={[typography.labelSm, { color: colors.secondary }]}>۷۵٪</Text>
            </View>
          </BentoCard>

          <BentoCard style={styles.thirdSpan}>
            <View style={[styles.iconBox, { backgroundColor: colors.tertiaryContainer }]}>
              <MaterialCommunityIcons name="numeric" size={22} color={colors.primary} />
            </View>
            <Text style={[typography.titleMd, { color: colors.primary, marginTop: 16 }]}>اعداد</Text>
            <Text style={[typography.labelSm, { color: colors.onSurfaceVariant, marginTop: 4 }]}>
              تمرین دیکته اعداد
            </Text>
          </BentoCard>

          <BentoCard style={styles.twoThirdSpan}>
            <View style={styles.audioRow}>
              <View style={styles.audioCircle}>
                <MaterialCommunityIcons name="headphones" size={26} color={colors.onPrimary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[typography.titleMd, { color: colors.primary }]}>تمرین شنیداری</Text>
                <Text style={[typography.bodyMd, { color: colors.onSurfaceVariant }]} numberOfLines={1}>
                  گوش بده و از حفظ بنویس
                </Text>
              </View>
              <MaterialCommunityIcons name="play-circle-outline" size={24} color={colors.outlineVariant} />
            </View>
          </BentoCard>

          <BentoCard noPadding style={[styles.halfSpan, { height: 180, overflow: 'hidden' }]}>
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600' }}
              style={StyleSheet.absoluteFill}
              imageStyle={{ borderRadius: radius.xl }}
            >
              <View style={styles.videoOverlay} />
              <View style={styles.videoContent}>
                <View style={styles.newBadge}>
                  <Text style={[typography.labelSm, { color: colors.onError }]}>درس جدید</Text>
                </View>
                <Text style={[typography.titleMd, { color: colors.white }]}>تکنیک‌های پیشرفته اسپیکینگ</Text>
              </View>
              <View style={styles.playButtonWrap}>
                <MaterialCommunityIcons name="play" size={26} color={colors.white} />
              </View>
            </ImageBackground>
          </BentoCard>

          <BentoCard style={styles.fullSpan}>
            <View style={styles.cardHeaderRow}>
              <Text style={[typography.titleMd, { color: colors.primary }]}>فعالیت یادگیری</Text>
              <View style={styles.tabToggle}>
                <View style={styles.tabToggleActive}>
                  <Text style={[typography.labelSm, { color: colors.primary }]}>۷ روز اخیر</Text>
                </View>
              </View>
            </View>
            <View style={styles.barsRow}>
              {[
                { h: 30, day: 'ش' },
                { h: 60, day: 'ی' },
                { h: 90, day: 'د' },
                { h: 50, day: 'س' },
                { h: 40, day: 'چ' },
                { h: 70, day: 'پ' },
                { h: 20, day: 'ج' },
              ].map((b, i) => (
                <View key={i} style={styles.barCol}>
                  <View
                    style={[
                      styles.bar,
                      { height: b.h, backgroundColor: i === 2 ? colors.primary : colors.surfaceContainer },
                    ]}
                  />
                  <Text style={[typography.labelSm, { color: colors.onSurfaceVariant, marginTop: 8 }]}>
                    {b.day}
                  </Text>
                </View>
              ))}
            </View>
          </BentoCard>
        </View>
      </ScrollView>

      <BottomNav tabs={TABS} activeKey="home" onChange={(key) => navigation?.navigate?.(key)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.containerPadding,
    paddingTop: spacing.stackMd,
    paddingBottom: 32,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.stackLg,
  },
  topBarActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  streakPill: {
    backgroundColor: colors.surfaceContainerHigh,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.gutterBento,
  },
  fullSpan: { width: '100%' },
  halfSpan: { width: '47.5%' },
  thirdSpan: { width: '30.5%' },
  twoThirdSpan: { width: '65%' },
  dailyGoalRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondaryContainer,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 },
  audioRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  audioCircle: {
    width: 56,
    height: 56,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11,28,48,0.45)',
    borderRadius: radius.xl,
  },
  videoContent: { position: 'absolute', bottom: 16, left: 16, right: 16 },
  newBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.error,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.sm,
    marginBottom: 6,
  },
  playButtonWrap: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -26,
    marginLeft: -26,
    width: 52,
    height: 52,
    borderRadius: radius.full,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabToggle: { flexDirection: 'row', gap: 8 },
  tabToggleActive: {
    backgroundColor: colors.surfaceContainer,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.md,
  },
  barsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    marginTop: 24,
    paddingHorizontal: 4,
  },
  barCol: { alignItems: 'center', width: 24 },
  bar: { width: '100%', borderRadius: radius.sm },
});