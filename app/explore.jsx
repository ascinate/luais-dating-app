import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import CircleButton from '@/components/ui/CircleButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import { Bookmark, Heart } from 'lucide-react-native'
import HeadingH2 from '@/components/ui/HeadingH2'
import Paragraph from '@/components/ui/Paragraph'
import CustomText from '@/components/ui/CustomText'
import { ScrollView } from 'react-native'
import { Video } from 'expo-av'
import { router } from 'expo-router'

const explore = () => {
  return (
    <BackgroundUI>
      <ScrollView style={{ padding: 12 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            position: 'absolute',
            top: 80,
            zIndex: 12,
            width: '100%',
          }}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
        >

          <View style={styles.badge}>
            <Paragraph>X 18–24 YO</Paragraph>
          </View>

          <View style={styles.badge}>
            <Paragraph>X 25–30 YO</Paragraph>
          </View>

          <View style={styles.badge}>
            <Paragraph>X 31–40 YO</Paragraph>
          </View>

          <View style={styles.badge}>
            <Paragraph>X 40+ YO</Paragraph>
          </View>

          <View style={styles.badge}>
            <Paragraph>X 40+ YO</Paragraph>
          </View>

          <View style={styles.badge}>
            <Paragraph>X 40+ YO</Paragraph>
          </View>

        </ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
          <HeadingH2>Explore</HeadingH2>
          <CircleButton Icon={Bookmark} onPress={() => router.push('/nearby')} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={[styles.videoContainer, styles.colOne]}>
            <Video
              source={require('../assets/video/videos-main.mp4')}
              style={styles.video}
              resizeMode="cover"
              shouldPlay
              isLooping
              isMuted
            />
            <View style={styles.overlay}>
              <CustomText style={styles.name}>
                Aria Bennett
              </CustomText>
              <View style={styles.likeButton}>
                <Heart color="#fff" fill="#fff" strokeWidth={0} />
              </View>
            </View>
          </View>
          <View style={[styles.videoContainer,]}>
            <Video
              source={require('../assets/video/videos-main.mp4')}
              style={styles.video}
              resizeMode="cover"
              shouldPlay
              isLooping
              isMuted
            />
            <View style={styles.overlay}>
              <CustomText style={styles.name}>
                Aria Bennett
              </CustomText>
              <View style={styles.likeButton}>
                <Heart color="#fff" fill="#fff" strokeWidth={0} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={[styles.videoContainer, { marginTop: 10 }]}>
            <Video
              source={require('../assets/video/videos-main.mp4')}
              style={styles.video}
              resizeMode="cover"
              shouldPlay
              isLooping
              isMuted
            />
            <View style={styles.overlay}>
              <CustomText style={styles.name}>
                Aria Bennett
              </CustomText>
              <View style={styles.likeButton}>
                <Heart color="#fff" fill="#fff" strokeWidth={0} />
              </View>
            </View>
          </View>
          <View style={[styles.videoContainer, { marginTop: -30 }]}>
            <Video
              source={require('../assets/video/videos-main.mp4')}
              style={styles.video}
              resizeMode="cover"
              shouldPlay
              isLooping
              isMuted
            />
            <View style={styles.overlay}>
              <CustomText style={styles.name}>
                Aria Bennett
              </CustomText>
              <View style={styles.likeButton}>
                <Heart color="#fff" fill="#fff" strokeWidth={0} />
              </View>
            </View>
          </View>
        </View>


      </ScrollView>
    </BackgroundUI>

  )
}

export default explore

const styles = StyleSheet.create({




  videoContainer: {
    width: 192,
    height: 280,
    borderRadius: 25,
    overflow: 'hidden',
  },

  overlay: {
    position: 'absolute',
    bottom: 15,
    left: 12,
    right: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  likeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF5F8A',
    justifyContent: 'center',
    alignItems: 'center',

  },
  video: {
    width: "100%",
    height: '100%',
    borderRadius: 25,
    borderWidth: 0,
  },
  colOne: {
    marginTop: 40
  },

  badge: {
    width: 94,
    height: 34,
    backgroundColor: "#373737",
    borderRadius: 25,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },




})