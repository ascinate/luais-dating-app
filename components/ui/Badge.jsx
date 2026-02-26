import React from 'react'
import { View, StyleSheet } from 'react-native'
import Paragraph from '@/components/ui/Paragraph'

const Badge = ({ text, style }) => {
  return (
    <View style={[styles.badge, style]}>
      <Paragraph style={styles.text}>
        {text}
      </Paragraph>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#373737',
    paddingHorizontal: 16,
    height: 38,
    alignSelf: 'flex-start', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  }
})