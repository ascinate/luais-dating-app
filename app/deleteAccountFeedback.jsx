import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

// components
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import ThemeButton from '@/components/ui/ThemeButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import { Colors } from '@/constants/theme'
import { TableOfContents } from 'lucide-react-native'
import { router } from 'expo-router'

const deleteAccountFeedback = () => {


  const [modalVisible, setModalVisible] = useState(false)
  const [checked, setChecked] = useState(false)
  return (
    <BackgroundUI>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}>

          {/* Header */}
          <View style={styles.header}>
            <CircleButton
              Icon={TableOfContents}
              onPress={() => router.back()}
            />
            <HeadingH2 style={{ marginLeft: 14,width: '70%' }}>FEEDBACK (OPTIONAL)</HeadingH2>
            <View style={{ width: 40 }} />
          </View>

          <View style={styles.container}>
            <Paragraph style={styles.mainHeading}>
              BEFORE YOU GO
            </Paragraph>

            <Paragraph style={styles.subText}>
              Help us improve — this is optional.
            </Paragraph>

            <View style={styles.optionsWrapper}>

              <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                <Paragraph style={styles.selectedText}>
                  I FOUND WHAT I WAS LOOKING FOR
                </Paragraph>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton}>
                <Paragraph style={styles.optionText}>
                  TAKING A BREAK
                </Paragraph>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton}>
                <Paragraph style={styles.optionText}>
                  NOT ENOUGH MATCHES
                </Paragraph>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton}>
                <Paragraph style={styles.optionText}>
                  APP EXPERIENCE ISSUES
                </Paragraph>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton}>
                <Paragraph style={styles.optionText}>
                  PRIVACY CONCERNS
                </Paragraph>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton}>
                <Paragraph style={styles.optionText}>
                  OTHER
                </Paragraph>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* BOTTOM BUTTONS */}
        <View style={styles.bottomButtons}>
          <ThemeButton text="Continue" onPress={() => router.push('/confirmYourIdentity')} />

          <TouchableOpacity>
            <Paragraph style={styles.cancelText}>
              skip
            </Paragraph>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundUI>
  )
}

export default deleteAccountFeedback


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },













  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },












  bottomButtons: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },

  cancelText: {
    textAlign: 'center',
    color: '#F3DEB1',

  },

  mainHeading: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 10,
  },

  subText: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 25,
  },

  optionsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  optionButton: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
  },

  optionText: {
    color: '#ccc',
    fontSize: 12,
  },

  selectedOption: {
    borderColor: '#F3DEB1',
    backgroundColor: '#f3deb113',

  },

  selectedText: {
    color: '#F3DEB1',
    fontSize: 12,
  },

  skipText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 18,
  },

})