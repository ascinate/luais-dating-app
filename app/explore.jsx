// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// import CircleButton from '@/components/ui/CircleButton'
// import BackgroundUI from '@/components/ui/BackgroundUI'
// import { Bookmark, Heart } from 'lucide-react-native'
// import HeadingH2 from '@/components/ui/HeadingH2'
// import Paragraph from '@/components/ui/Paragraph'
// import CustomText from '@/components/ui/CustomText'
// import { ScrollView } from 'react-native'
// import { Video } from 'expo-av'
// import { router } from 'expo-router'

// const explore = () => {
//   return (
//     <BackgroundUI>
//       <ScrollView style={{ padding: 12 }}>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={{
//             position: 'absolute',
//             top: 80,
//             zIndex: 12,
//             width: '100%',
//           }}
//           contentContainerStyle={{
//             paddingHorizontal: 10,
//           }}
//         >

//           <View style={styles.badge}>
//             <Paragraph>X 18–24 YO</Paragraph>
//           </View>

//           <View style={styles.badge}>
//             <Paragraph>X 25–30 YO</Paragraph>
//           </View>

//           <View style={styles.badge}>
//             <Paragraph>X 31–40 YO</Paragraph>
//           </View>

//           <View style={styles.badge}>
//             <Paragraph>X 40+ YO</Paragraph>
//           </View>

//           <View style={styles.badge}>
//             <Paragraph>X 40+ YO</Paragraph>
//           </View>

//           <View style={styles.badge}>
//             <Paragraph>X 40+ YO</Paragraph>
//           </View>

//         </ScrollView>

//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
//           <HeadingH2>Explore</HeadingH2>
//           <CircleButton Icon={Bookmark} onPress={() => router.push('/nearby')} />
//         </View>

//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <View style={[styles.videoContainer, styles.colOne]}>
//             <Video
//               source={require('../assets/video/videos-main.mp4')}
//               style={styles.video}
//               resizeMode="cover"
//               shouldPlay
//               isLooping
//               isMuted
//             />
//             <View style={styles.overlay}>
//               <CustomText style={styles.name}>
//                 Aria Bennett
//               </CustomText>
//               <View style={styles.likeButton}>
//                 <Heart color="#fff" fill="#fff" strokeWidth={0} />
//               </View>
//             </View>
//           </View>
//           <View style={[styles.videoContainer,]}>
//             <Video
//               source={require('../assets/video/videos-main.mp4')}
//               style={styles.video}
//               resizeMode="cover"
//               shouldPlay
//               isLooping
//               isMuted
//             />
//             <View style={styles.overlay}>
//               <CustomText style={styles.name}>
//                 Aria Bennett
//               </CustomText>
//               <View style={styles.likeButton}>
//                 <Heart color="#fff" fill="#fff" strokeWidth={0} />
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <View style={[styles.videoContainer, { marginTop: 10 }]}>
//             <Video
//               source={require('../assets/video/videos-main.mp4')}
//               style={styles.video}
//               resizeMode="cover"
//               shouldPlay
//               isLooping
//               isMuted
//             />
//             <View style={styles.overlay}>
//               <CustomText style={styles.name}>
//                 Aria Bennett
//               </CustomText>
//               <View style={styles.likeButton}>
//                 <Heart color="#fff" fill="#fff" strokeWidth={0} />
//               </View>
//             </View>
//           </View>
//           <View style={[styles.videoContainer, { marginTop: -30 }]}>
//             <Video
//               source={require('../assets/video/videos-main.mp4')}
//               style={styles.video}
//               resizeMode="cover"
//               shouldPlay
//               isLooping
//               isMuted
//             />
//             <View style={styles.overlay}>
//               <CustomText style={styles.name}>
//                 Aria Bennett
//               </CustomText>
//               <View style={styles.likeButton}>
//                 <Heart color="#fff" fill="#fff" strokeWidth={0} />
//               </View>
//             </View>
//           </View>
//         </View>


//       </ScrollView>
//     </BackgroundUI>

//   )
// }

// export default explore

// const styles = StyleSheet.create({




//   videoContainer: {
//     width: 192,
//     height: 280,
//     borderRadius: 25,
//     overflow: 'hidden',
//   },

//   overlay: {
//     position: 'absolute',
//     bottom: 15,
//     left: 12,
//     right: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   name: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },

//   likeButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FF5F8A',
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   video: {
//     width: "100%",
//     height: '100%',
//     borderRadius: 25,
//     borderWidth: 0,
//   },
//   colOne: {
//     marginTop: 40
//   },

//   badge: {
//     width: 94,
//     height: 34,
//     backgroundColor: "#373737",
//     borderRadius: 25,
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 8,
//   },




// })


import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import { router } from 'expo-router'
import { Bookmark, Heart } from 'lucide-react-native'

import BackgroundUI from '@/components/ui/BackgroundUI'
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import Paragraph from '@/components/ui/Paragraph'
import CustomText from '@/components/ui/CustomText'

const { width } = Dimensions.get('window')

// Dynamic sizing
const SPACING = 12
const CARD_WIDTH = (width - SPACING * 3) / 2
const CARD_HEIGHT = CARD_WIDTH * 1.45

const Explore = () => {
  return (
    <BackgroundUI>
      <ScrollView contentContainerStyle={{ padding: SPACING }}>

        {/* Header */}
        <View style={styles.header}>
          <HeadingH2>Explore</HeadingH2>
          <CircleButton
            Icon={Bookmark}
            onPress={() => router.push('/nearby')}
          />
        </View>

        {/* Age Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.badgeContainer}
        >
          {['18–24', '25–30', '31–40', '40+'].map((item, index) => (
            <View key={index} style={styles.badge}>
              <Paragraph>{item} YO</Paragraph>
            </View>
          ))}
        </ScrollView>

        {/* Grid */}
        <View style={styles.grid}>
          {[1, 2, 3, 4].map((_, index) => (
            <View
              key={index}
              style={[
                styles.videoContainer,
                { width: CARD_WIDTH, height: CARD_HEIGHT },
              ]}
            >
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
          ))}
        </View>

      </ScrollView>
    </BackgroundUI>
  )
}

export default Explore

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  badgeContainer: {
    paddingBottom: 20,
  },

  badge: {
    backgroundColor: "#373737",
    borderRadius: 25,
    paddingHorizontal: 18,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  videoContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 16,
  },

  video: {
    width: '100%',
    height: '100%',
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
    fontSize: 16,
    fontWeight: '600',
  },

  likeButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FF5F8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
})