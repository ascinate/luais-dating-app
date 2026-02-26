import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import CircleButton from '@/components/ui/CircleButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import { Bookmark, MapPin, TableOfContents } from 'lucide-react-native'
import HeadingH2 from '@/components/ui/HeadingH2'
import Paragraph from '@/components/ui/Paragraph'
import CustomText from '@/components/ui/CustomText'
import BottomTabs from '@/components/ui/BottomTabs'
import { ScrollView } from 'react-native'
import { Video } from 'expo-av'
import { router } from 'expo-router'

const saveprofile = () => {
  return (
    <BackgroundUI>
      <ScrollView style={{ padding: 12 }}>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
          <CircleButton Icon={TableOfContents} onPress={() => router.push('/nearby')} />
          <HeadingH2>Saved profiles</HeadingH2>
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
              <View>
                <CustomText style={styles.name}>
                  Aria Bennett
                </CustomText>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',gap: 6 }}>
                  <MapPin color={'#fff'} size={16} />
                  <Paragraph>
                    Aria Bennett
                  </Paragraph>

                </View>
              </View>
              <View style={styles.likeButton}>
                <Bookmark color="#fff" fill="#fff" strokeWidth={0} />
              </View>
            </View>
          </View>



          <View style={[styles.videoContainer]}>
            <Video
              source={require('../assets/video/videos-main.mp4')}
              style={styles.video}
              resizeMode="cover"
              shouldPlay
              isLooping
              isMuted
            />
            <View style={styles.overlay}>
              <View>
                <CustomText style={styles.name}>
                  Aria Bennett
                </CustomText>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
                  <MapPin color={'#fff'} size={16} />
                  <Paragraph>
                    Aria Bennett
                  </Paragraph>

                </View>
              </View>
              <View style={styles.likeButton}>
                <Bookmark color="#fff" fill="#fff" strokeWidth={0} />
              </View>
            </View>
          </View>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={[styles.videoContainer, styles.colTwo]}>
            <Video
              source={require('../assets/video/videos-main.mp4')}
              style={styles.video}
              resizeMode="cover"
              shouldPlay
              isLooping
              isMuted
            />
            <View style={styles.overlay}>
              <View>
                <CustomText style={styles.name}>
                  Aria Bennett
                </CustomText>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
                  <MapPin color={'#fff'} size={16} />
                  <Paragraph>
                    Aria Bennett
                  </Paragraph>

                </View>
              </View>
              <View style={styles.likeButton}>
                <Bookmark color="#fff" fill="#fff" strokeWidth={0} />
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
              <View>
                <CustomText style={styles.name}>
                  Aria Bennett
                </CustomText>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 6
                }}>
                  <MapPin color={'#fff'} size={16}/>
                  <Paragraph >
                    Aria Bennett
                  </Paragraph>
                </View>
              </View>
              <View style={styles.likeButton}>
                <Bookmark color="#fff" fill="#fff" strokeWidth={0} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 100 }}>

          <BottomTabs />
        </View>


      </ScrollView>
    </BackgroundUI>

  )
}

export default saveprofile

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
    position: 'absolute',
    right: 0,
    top: -210,
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
  colTwo: {
    marginTop: 10
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