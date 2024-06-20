import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {GRAY_100} from '@/themes';

export const Skeleton = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <View style={styles.skeletonText} />
      <View style={[styles.skeletonText, {width: '60%'}]} />
    </View>
    <ActivityIndicator size="small" color={GRAY_100} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: GRAY_100,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  skeletonText: {
    width: '40%',
    height: 12,
    backgroundColor: GRAY_100,
    borderRadius: 4,
    marginVertical: 6,
  },
});
