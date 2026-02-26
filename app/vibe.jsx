import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import ThemeButton from '@/components/ui/ThemeButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import { Video } from 'expo-av'
import { Music, Sparkles } from 'lucide-react-native'
import { router } from 'expo-router'
const match = () => {
    return (
        <BackgroundUI>
            <View style={{ padding: 12 }}>
                <View>
                    <View style={[styles.videoContainer]}>
                        <Video
                            source={require('../assets/video/videos-main.mp4')}
                            style={styles.video}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            isMuted
                        />
                    </View>
                </View>
                <ThemeButton text="Send a Message" onPress={() => router.push('/chat')} />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.touchable}
                    onPress={() => router.push('/chat')}

                >
                    <View style={styles.continueBtn}>
                        <Text style={[styles.continueTxt]}>
                            Keep Swiping
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 20 }}>

                    <View style={styles.bottomText}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <Music color="#F3DEB1" size={18} />
                            <Text style={styles.continueTxt}>
                                Your Music Compatibility:
                            </Text>
                            <Text style={[styles.continueTxt, { color: '#F3DEB1' }]}>
                                82%
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>

                            <View
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 18,
                                    backgroundColor: '#FF5F8A',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Sparkles size={16} color="#fff" />
                            </View>

                            <Text
                                style={{
                                    color: '#aaa',
                                    flex: 1,
                                    fontSize: 14,
                                    lineHeight: 20,
                                }}
                            >
                                Ask about her favorite travel memory — she loves adventure.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </BackgroundUI>
    )
}

export default match



const styles = StyleSheet.create({

    videoContainer: {
        width: '100%',
        height: 500,
        overflow: 'hidden',
    },
    video: {
        width: "100%",
        height: '100%',
        borderWidth: 0,
    },

    continueBtn: {
        borderRadius: 12,
        width: '100%',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#FF5F8A',
        padding: 17,
        alignItems: 'center'
    },

    continueTxt: {
        color: '#fff',
        fontSize: 14,
    },

    bottomText: {
        borderRadius: 12,
        width: '100%',
        marginVertical: 21,
        overflow: 'hidden',
        padding: 17,
        alignItems: 'center'
    },


})